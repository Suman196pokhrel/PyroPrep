import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { getUserById } from "./data/users";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/signin",
    error: "/error",
  },
  events: {
    // TO AUTO POPULATE EMAIL VERIFIED FOR USERS WHO REGISTER OR LOGIN WITH OAUTH PROVIDERS
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // ALLOW OAUTH WITHOUT EMAIL VERIFICATION
      if (account?.provider !== "credentials") return true;

      // CODE TO BLOCK SIGNIN FOR CREDENTIALS BASED LOGIN IF USER'S EMAIL IS NOT VERIFIED
      if (user.id) {
        const existingUser = await getUserById(user.id);
        if (!existingUser?.emailVerified) {
          return false;
        }
      }

      // TODO: ADD TWO FACTOR AUTH

      return true;
    },
    async session({ token, session }) {
      // ADDING ADDITIONAL USER ID IN THE SESSION
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
