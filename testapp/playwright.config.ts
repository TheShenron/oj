import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
    testDir: './src/tests/e2e', // folder for E2E tests
    timeout: 30 * 1000,
    retries: 0,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        // video: 'on-first-retry',
        // screenshot: 'only-on-failure',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ],
})
