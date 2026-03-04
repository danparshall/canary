import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
];

const pages = ['./', 'about/', 'research/', 'policy/', 'blog/'];

for (const viewport of viewports) {
  for (const path of pages) {
    const label = path === './' ? '/' : `/${path}`;
    test(`${label} has no horizontal overflow at ${viewport.name} (${viewport.width}px)`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto(path);

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewport.width);
    });
  }
}

for (const viewport of viewports) {
  test(`nav is visible at ${viewport.name} (${viewport.width}px)`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('./');
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });
}
