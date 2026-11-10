import { NextResponse } from "next/server";

// First gate only: bounce cookie-less requests away from /admin. Real verification
// (signature, expiry, server-side revocation) happens in getServerSideProps and every API route.
export function proxy(request) {
  const { pathname } = request.nextUrl;
  const hasCookie = request.cookies.has("__Host-rh_admin") || request.cookies.has("rh_admin");
  const isLogin = pathname.startsWith("/admin/login");
  if (pathname.startsWith("/admin") && !isLogin && !hasCookie) {
    return NextResponse.redirect(new URL("/admin/login/", request.url));
  }
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return res;
}

export const config = { matcher: ["/admin/:path*", "/api/admin/:path*"] };
