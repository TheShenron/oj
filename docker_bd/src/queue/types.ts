export interface TestJob {
    repoUrl: string;
    branch?: string;
    jobId: string;
}

export interface TestResult {
    success: boolean;
    summary: any;
    error?: string;
}
