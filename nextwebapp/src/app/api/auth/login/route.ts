// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { validateUser, createAccessCookie } from "@/lib/auth";
import { signAccessToken } from "@/lib/jwt";

export async function POST(req: Request) {
    const body = await req.json();
    const { email, password } = body ?? {};

    const user = await validateUser(email, password);
    if (!user) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // create tokens (demo: only access token)
    const accessToken = signAccessToken({ sub: user.id, role: user.role });

    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, name: user.name } });
    res.headers.append("Set-Cookie", createAccessCookie(accessToken));
    return res;
}
