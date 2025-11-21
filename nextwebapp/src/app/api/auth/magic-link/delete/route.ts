// Delete a magic link

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import { MagicLink } from "@/models/MagicLink";

export async function DELETE(req: Request) {
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

  await connectMongo();

  await MagicLink.findByIdAndDelete(id);

  return NextResponse.json({ message: "Magic link deleted" });
}
