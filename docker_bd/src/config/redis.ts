import IORedis from "ioredis";

export const redis = new IORedis({
    host: process.env.REDIS_HOST || "redis",
    port: 6379,
    maxRetriesPerRequest: null
});
