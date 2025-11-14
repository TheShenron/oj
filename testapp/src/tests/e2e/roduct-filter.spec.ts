import { test, expect } from '@playwright/test';

test('product filter UI works', async ({ page }) => {
    await page.goto('http://localhost:5173'); // default Vite port

    // Search test
    await page.fill('[placeholder="Search products..."]', 'iphone');
    await expect(page.locator('.pf-grid .pf-card')).toHaveCount(1);

    // Clear search
    await page.fill('[placeholder="Search products..."]', '');

    // Category filter test
    await page.check('text=Electronics'); // assumes label text is visible and checkable
    await expect(page.locator('.pf-grid .pf-card')).toHaveCount(2);

    // Screenshot
    await page.screenshot({ path: 'product-filter.png', fullPage: false });
});
