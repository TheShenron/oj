import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import Task from "@/models/Task";

/**
 * GET /api/tasks/:id
 * id = Mongo _id OR taskId
 */
export async function GET(
    _: Request,
    { params }: { params: { id: string } }
) {
    await connectMongo();

    const task = await Task.findOne({
        $or: [{ _id: params.id }, { taskId: params.id }],
    });

    if (!task) {
        return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(task);
}

/**
 * PATCH /api/tasks/:id
 * Update task fields
 */
export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    await connectMongo();

    const body = await req.json();

    const task = await Task.findOneAndUpdate(
        { $or: [{ _id: params.id }, { taskId: params.id }] },
        body,
        { new: true }
    );

    if (!task) {
        return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json(task);
}

/**
 * DELETE /api/tasks/:id
 * Soft delete (recommended)
 */
export async function DELETE(
    _: Request,
    { params }: { params: { id: string } }
) {
    await connectMongo();

    const task = await Task.findOneAndUpdate(
        { $or: [{ _id: params.id }, { taskId: params.id }] },
        { isActive: false },
        { new: true }
    );

    if (!task) {
        return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
}
