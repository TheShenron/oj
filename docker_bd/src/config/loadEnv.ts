import dotenv from "dotenv";
import path from "node:path";

const env = process.env.NODE_ENV || "development";

const envFile =
    env === "production"
        ? ".env.prod"
        : ".env.dev";

dotenv.config({
    path: path.resolve(process.cwd(), envFile)
});

console.log(`🌱 Loaded env file: ${envFile}`);
