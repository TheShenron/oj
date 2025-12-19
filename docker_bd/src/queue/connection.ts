import { Queue } from "bullmq";
import { redis } from "../config/redis";

export const TEST_QUEUE = "test-queue";

export const testQueue = new Queue(TEST_QUEUE, {
    connection: redis
});
