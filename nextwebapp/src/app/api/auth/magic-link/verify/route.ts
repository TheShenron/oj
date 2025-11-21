// Verify token & login user

import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import { MagicLink } from "@/models/MagicLink";
import { hashToken } from "@/lib/magic-link";
import { cookies } from "next/headers";
import { email } from "zod";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token)
    return NextResponse.json({ error: "Token missing" }, { status: 400 });

  await connectMongo();

  const tokenHash = hashToken(token);
  const link = await MagicLink.findOne({ tokenHash });

  if (!link)
    return NextResponse.json({ error: "Invalid link" }, { status: 400 });
  if (link.expiresAt < new Date())
    return NextResponse.json({ error: "Magic link expired" }, { status: 400 });

  const cookieStore = await cookies();
  const cookiesData = JSON.stringify({ email, role: "assessee", token });
  cookieStore.set("session_user", cookiesData, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return NextResponse.json({ message: "Magic link verified" });
}
