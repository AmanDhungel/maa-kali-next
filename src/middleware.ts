import { NextRequest, NextResponse } from "next/server";

import { verifyToken } from "@/app/api/controllers/verifyToken";

export const config = {
  matcher: ["/login", "/admin/:path*"],
};

export async function middleware(req: NextRequest) {
  const verificationResponse = await verifyToken();

  if (
    (verificationResponse?.status === 401 ||
      verificationResponse?.status === 403 ||
      verificationResponse?.status === 404) &&
    req?.nextUrl?.pathname.includes("/admin")
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  } else if (
    verificationResponse?.status === 200 &&
    req?.nextUrl?.pathname === "/login"
  ) {
    return NextResponse.redirect(new URL("/admin/blog", req.url));
  }
}
