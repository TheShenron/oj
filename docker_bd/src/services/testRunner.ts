import path from "node:path";
import fs from 'node:fs/promises'
import { execa } from "execa";

export async function runTests(workDir: string) {

    const timeout = Number(process.env.MAX_TEST_TIME ?? 120_000);

    const args = [
        "run",
        "--rm",
        "--init",
        "--cpus", "2",
        "-m", "2g",
        "--ipc=host",

        // "-v", `${workDir}/src:/test_runner/src`,
        // "-v", `${workDir}/main.jsx:/runner/main.jsx`,
        // "-v", `${workDir}/app.jsx:/runner/app.jsx`,
        "-v", `${workDir}/playwright-report:/test_runner/playwright-report`,

        "playwright-runner",
    ];

    const subprocess = await execa("docker", args, {
        timeout,
        stdio: "inherit",
        reject: false,
        killSignal: "SIGKILL",
    });;

    if (subprocess.timedOut) {
        throw new Error("Docker test execution timed out");
    }

    if (subprocess.exitCode !== 0) {
        throw new Error(`Docker exited with code ${subprocess.exitCode}`);
    }

    const reportPath = path.join(
        workDir,
        "playwright-report",
        "report.json"
    );
    const report = JSON.parse(await fs.readFile(reportPath, "utf-8"));

    return report;

}
