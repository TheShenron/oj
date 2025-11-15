// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const PUBLIC = ["/login", "/register", "/about", "/api/auth"];
    if (PUBLIC.some(p => req.nextUrl.pathname.startsWith(p) || req.nextUrl.pathname === "/")) {
        return NextResponse.next();
    }

    if (!token) {
        const url = req.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/admin/:path*"],
};
