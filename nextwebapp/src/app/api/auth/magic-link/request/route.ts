// Generate & send magic link email

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import { MagicLink } from "@/models/MagicLink";
import { generateToken, hashToken } from "@/lib/magic-link";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email)
    return NextResponse.json({ error: "Email required" }, { status: 400 });

  await connectMongo();

  const existingLink = await MagicLink.findOne({ email });

  if (existingLink) {
    const now = new Date();

    if (existingLink.expiresAt > now) {
      return NextResponse.json(
        {
          error: "Magic link already sent and still valid",
          magicUrl: existingLink.tokenHash,
        },
        { status: 400 }
      );
    } else {
      await MagicLink.deleteOne({ _id: existingLink._id });
      return NextResponse.json(
        {
          error: "Magic link expired, please request a new one",
        },
        { status: 400 }
      );
    }
  }

  const rawToken = generateToken();
  const tokenHash = hashToken(rawToken);

  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24); // 1 day
  // const expiresAt = new Date(Date.now() + 1000 * 10);

  await MagicLink.create({ email, tokenHash, expiresAt });

  const res = NextResponse.json({
    message: "Magic link generated",
    token: rawToken,
    email,
  });

  return res;
}
