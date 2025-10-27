import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");

  const { pathname } = request.nextUrl;

  // Si intenta acceder al login o register y YA tiene token → redirigir a dashboard
  if ((pathname === "/login" || pathname === "/register") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Si intenta acceder al dashboard y NO tiene token → redirigir a login
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Si no aplica ninguna condición, continuar normalmente
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/register/:path*",
    "/dashboard/:path*",
  ],
};
