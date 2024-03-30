import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // SOME LOGIC TO CHECK AUTH StATUS
  console.log("Middleware core EXECUTED");

  return NextResponse.next();
}
