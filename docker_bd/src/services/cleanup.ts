import fs from "node:fs/promises";

export async function cleanup(dir: string) {
    try {
        console.log("Cleaning:", dir);
        await fs.rm(dir, { recursive: true, force: true, maxRetries: 5 });
        console.log("Cleanup success");
    } catch (err) {
        console.error("Cleanup error:", err);
    }
}
