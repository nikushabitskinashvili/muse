import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./app/constant";


export function middleware(request: NextRequest) {

  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;

  if (!cookie?.value && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/signup"))) {
    return null; 
  }

  if (!cookie?.value && !pathname.startsWith("/auth/login") && !pathname.startsWith("/auth/signup")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (cookie?.value && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/signup"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return null;
  console.log(cookie)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
