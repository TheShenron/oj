// Update expiry date of a link

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import { MagicLink } from "@/models/MagicLink";

export async function PATCH(req: Request) {
  const { id, expiresAt } = await req.json();
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  await connectMongo();

  const updated = await MagicLink.findByIdAndUpdate(
    id,
    { expiresAt: expiresAt ? new Date(expiresAt) : undefined },
    { new: true }
  );

  return NextResponse.json(updated);
}
