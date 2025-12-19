import { Queue } from "bullmq";
import { redis } from "./redis";

export const TEST_QUEUE_NAME = "test-queue";

export const testQueue = new Queue(TEST_QUEUE_NAME, {
    connection: redis
});
