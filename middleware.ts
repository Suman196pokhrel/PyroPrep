import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
} from "@/routes";

const { auth } = NextAuth(authConfig);

// WE WILL INVKOE MIDDLEWARE ON BOTH PUBLIC AND PRIVATE ROUTES< AND INSIDE THE MIDDLEWARE WE WILL DECIDE AOURSELVEL WHAT TO DO WITH THEM
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/signin", nextUrl));
  }

  return;
});

// EVERY ROUTE PLACED INSIDE MATCHER WILL INVOKE MIDDLEWARE (It's not about public or private but more about invoking the middlware on specific routes)
export const config = {
  // WILL INVOKE MIDDLEWARE ON EVERY ROUTES EXCEPT THE STATIC FILES
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
