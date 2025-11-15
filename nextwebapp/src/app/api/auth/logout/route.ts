// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import { clearAccessCookie } from "@/lib/auth";

export async function POST() {
    const res = NextResponse.json({ ok: true });
    res.headers.append("Set-Cookie", clearAccessCookie());
    return res;
}
