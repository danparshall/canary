import { test, expect } from '@playwright/test';

const pages = ['./', 'about/', 'research/', 'policy/'];

for (const path of pages) {
  const label = path === './' ? '/' : `/${path}`;

  test(`page ${label} has the logo`, async ({ page }) => {
    await page.goto(path);
    const logo = page.locator('img[src*="canary"]');
    await expect(logo.first()).toBeVisible();
  });

  test(`page ${label} has navigation with 4 links`, async ({ page }) => {
    await page.goto(path);
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    const links = nav.locator('a');
    await expect(links).toHaveCount(4);
  });

  test(`page ${label} has a footer`, async ({ page }) => {
    await page.goto(path);
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
}
