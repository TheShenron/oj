import { NextResponse } from "next/server";
import { testQueue } from "@/lib/queue";
import { v4 as uuid } from "uuid";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { repoUrl } = body;

        if (!repoUrl.startsWith("https://github.com")) {
            return NextResponse.json(
                { error: "Invalid GitHub repo URL" },
                { status: 400 }
            );
        }

        const jobId = uuid();

        let x = await testQueue.add(
            "test-queue",
            {
                repoUrl,
                jobId
            },
            {
                attempts: 1,
                removeOnComplete: true,
                removeOnFail: false
            }
        );

        console.log(x)

        return NextResponse.json({
            success: true,
            jobId
        });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to enqueue test job" },
            { status: 500 }
        );
    }
}