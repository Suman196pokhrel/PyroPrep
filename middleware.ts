import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // SOME LOGIC TO CHECK AUTH StATUS
  const nextauth_session_token = request.cookies.get("next-auth.session-token");

  const publicRoutes =
    request.nextUrl.pathname == "/auth/signin" ||
    request.nextUrl.pathname === "/auth/signup" ||
    request.nextUrl.pathname === "/";

  // IF USER IS TRYING TO ACCESS AUTH ROUTES
  if (publicRoutes) {
    // IS HE IS LOGGED IN
    if (nextauth_session_token) {
      // RETURN HIM TO DASHBOARD
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  // IF HE IS ACCESSING PRIVATE ROUTES
  else {
    // IF HE IS NOT AUTHENTICATED
    if (!nextauth_session_token)
      // RETURN HIM TO AUTH PAGE
      return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
  console.log("Middleware EXECUTED");
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*", "/"],
};
