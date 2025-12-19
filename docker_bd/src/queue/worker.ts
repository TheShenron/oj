import { Worker } from "bullmq";
import { redis } from "../config/redis";
import { TEST_QUEUE } from "./connection";
import { TestJob, TestResult } from "./types";
import { cloneRepo } from "../services/cloneRepo";
import { runTests } from "../services/testRunner";
import { cleanup } from "../services/cleanup";
import { validateJob } from "../utils/validator";

export const worker = new Worker<TestJob, TestResult>(
    TEST_QUEUE,
    async (job) => {
        const jobId = job.data.jobId;

        try {
            // 1️⃣ Validate job payload
            validateJob(job.data);
            console.log("ValidateJob")

            // 2️⃣ Clone repo
            const workDir = await cloneRepo(job.data);
            console.log("Cloning to workDir")

            // 4️⃣ Run tests
            const result = await runTests(workDir);
            console.log("RunningTest")


            // 6️⃣ Return result to BullMQ (stored in Redis)
            console.log("Success", result)
            return {
                success: true,
                summary: result
            };
        } catch (err: any) {
            // 7️⃣ Publish FAILURE result
            console.log(err)
            return { success: false, summary: null };

        } finally {
            // 8️⃣ Cleanup workspace
            if (job.data?.jobId) {
                try {
                    await cleanup(`/tmp/job-${jobId}`);
                    console.log('JobRemoved')
                } catch {
                    // ignore cleanup errors
                }
            }
        }
    },
    {
        connection: redis,
        concurrency: 1,
        removeOnComplete: { count: 0 },
        removeOnFail: { count: 0 }
        // lockDuration: 10 * 60 * 1000 // 10 min safety lock
    }
);

