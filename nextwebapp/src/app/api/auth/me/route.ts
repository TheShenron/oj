// app/api/auth/me/route.ts
import { NextResponse } from "next/server";
import { parseAccessTokenFromCookieHeader } from "@/lib/auth";
import { verifyAccessToken } from "@/lib/jwt";

export async function GET(req: Request) {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const token = parseAccessTokenFromCookieHeader(cookieHeader);
    if (!token) return NextResponse.json({ user: null });

    try {
        const payload: any = verifyAccessToken(token);
        // In real app, lookup user by payload.sub in DB and return minimal user info
        return NextResponse.json({ user: { id: payload.sub, role: payload.role } });
    } catch (err) {
        return NextResponse.json({ user: null });
    }
}
