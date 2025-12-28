import mongoose, { Schema, Document, Model } from "mongoose";
import Counter from "@/models/Counter";

export interface ITask extends Document {
    taskId?: string;
    title: string;
    description: string;
    tech: "react" | "node" | "python";
    level: "easy" | "medium" | "hard";
    category?: "task" | "ui" | "api" | "auth";
    repoTemplateUrl: string;
    readmePath?: string;
    isActive: boolean;
    createdBy?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
    {
        taskId: {
            type: String,
            unique: true,
            index: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 300,
        },

        tech: {
            type: String,
            enum: ["react", "node", "python"],
            required: true,
            index: true,
        },

        level: {
            type: String,
            enum: ["easy", "medium", "hard"],
            required: true,
        },

        category: {
            type: String,
            enum: ["task", "ui", "api", "auth"],
            default: "task",
        },

        repoTemplateUrl: {
            type: String,
            required: true,
        },

        readmePath: {
            type: String,
        },

        isActive: {
            type: Boolean,
            default: true,
            index: true,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

TaskSchema.pre("validate", async function (next) {
    const task = this as ITask;

    const techPrefix = task.tech.toUpperCase(); // REACT / NODE / PYTHON
    const category = (task.category ?? "task").toUpperCase(); // TASK / UI / API

    const counterKey = `${techPrefix}-${category}`;

    const counter = await Counter.findOneAndUpdate(
        { key: counterKey },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );

    const sequence = String(counter.seq).padStart(3, "0");

    task.taskId = `${techPrefix}-${category}-${sequence}`;

    if (typeof next === 'function') next();
});

const Task: Model<ITask> =
    (mongoose.models.Task as Model<ITask>) ||
    mongoose.model<ITask>("Task", TaskSchema);

export default Task;
