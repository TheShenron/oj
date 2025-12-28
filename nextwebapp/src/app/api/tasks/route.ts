import { NextResponse } from "next/server";
import Task from "@/models/Task";
import { connectMongo } from "@/lib/mongo";

/**
 * GET /api/tasks
 * Optional query params:
 *  - tech=react|node|python
 *  - active=true|false
 */
export async function GET(req: Request) {
    await connectMongo();

    const { searchParams } = new URL(req.url);
    const tech = searchParams.get("tech");
    const active = searchParams.get("active");

    const query: any = {};

    if (tech) query.tech = tech;
    if (active !== null) query.isActive = active === "true";

    const tasks = await Task.find(query).sort({ createdAt: -1 });

    return NextResponse.json(tasks);
}

/**
 * POST /api/tasks
 * Create a new task
 */
export async function POST(req: Request) {
    await connectMongo();

    const body = await req.json();

    const task = await Task.create({
        title: body.title,
        description: body.description,
        tech: body.tech,
        level: body.level,
        category: body.category,
        repoTemplateUrl: body.repoTemplateUrl,
        readmePath: body.readmePath,
        createdBy: body.createdBy,
    });

    return NextResponse.json(task, { status: 201 });
}
