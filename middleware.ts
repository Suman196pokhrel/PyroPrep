import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

// WE WILL INVKOE MIDDLEWARE ON BOTH PUBLIC AND PRIVATE ROUTES< AND INSIDE THE MIDDLEWARE WE WILL DECIDE AOURSELVEL WHAT TO DO WITH THEM

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("IS LOGGED IN => ", isLoggedIn);
  console.log("ROUTE => ", req.nextUrl.pathname);
});

// EVERY ROUTE PLACED INSIDE MATCHER WILL INVOKE MIDDLEWARE (It's not about public or private but more about invoking the middlware on specific routes)
export const config = {
  // WILL INVOKE MIDDLEWARE ON EVERY ROUTES EXCEPT THE STATIC FILES
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
