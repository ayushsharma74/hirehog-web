import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log('MIDDLEWARE, TOKEN', token);
  

  // If user is not logged in and tries to access protected routes
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow everything else
  return NextResponse.next();
}
