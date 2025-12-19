import { TestJob } from "../queue/types.js";

export function validateJob(job: TestJob) {
    if (!job.repoUrl.startsWith("https://github.com")) {
        throw new Error("Invalid GitHub repo");
    }
}
