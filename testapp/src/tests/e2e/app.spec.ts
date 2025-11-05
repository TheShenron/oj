import { test, expect } from '@playwright/test'

test('counter increments when clicked', async ({ page }) => {
    // Start the dev server
    await page.goto('http://localhost:5173')

    // Check the heading
    await expect(page.getByRole('heading', { name: 'Vite + React' })).toBeVisible()

    // Check initial counter
    const button = page.getByRole('button', { name: /count is/i })
    await expect(button).toHaveText('count is 0')

    // Click and check increment
    await button.click()
    await expect(button).toHaveText('count is 1')

    await button.click()
    await expect(button).toHaveText('count is 2')
})
