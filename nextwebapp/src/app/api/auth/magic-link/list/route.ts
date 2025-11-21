// List all magic links (admin)

import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import { MagicLink } from "@/models/MagicLink";

export async function GET() {
  await connectMongo();
  const links = await MagicLink.find().sort({ createdAt: -1 });
  return NextResponse.json(links);
}
