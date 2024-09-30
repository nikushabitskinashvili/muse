import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const AUTH_COOKIE_KEY = "auth";
const secret = new TextEncoder().encode("daculiparoli");

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;

  if (!cookie?.value && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/signup"))) {
    return null; 
  }

  if (!cookie?.value && !pathname.startsWith("/auth/login") && !pathname.startsWith("/auth/signup")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (cookie?.value) {
    try {
      const { payload }: any = await jwtVerify(cookie.value, secret);

      console.log(payload.blocked)
      if (payload.blocked) {
        const response = NextResponse.redirect(new URL("/auth/login", request.url));
        response.cookies.delete(AUTH_COOKIE_KEY);
        return response;
      }

      if (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/signup")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (err) {
      console.error("JWT verification error:", err);
      const response = NextResponse.redirect(new URL("/auth/login", request.url));
      response.cookies.delete(AUTH_COOKIE_KEY);
      return response;
    }
  }

  return null;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};