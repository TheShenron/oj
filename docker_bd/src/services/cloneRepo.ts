import simpleGit from "simple-git";
import fs from "node:fs";
import path from "node:path";

export async function cloneRepo({ repoUrl, jobId }: { repoUrl: string, jobId: string }): Promise<string> {
    const dir = path.join("/tmp", `job-${jobId}`);
    fs.mkdirSync(dir, { recursive: true });

    const git = simpleGit({
        timeout: { block: 30_000 },
        // config: ["core.hooksPath=/dev/null"], // security
    });

    await git.clone(repoUrl, dir, ["--depth", "1"]);

    return dir;
}
