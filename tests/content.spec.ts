import { test, expect } from '@playwright/test';

test('home page has main heading', async ({ page }) => {
  await page.goto('./');
  const heading = page.locator('main h1');
  await expect(heading).toBeVisible();
  await expect(heading).toContainText(/Canary Institute/i);
});

test('about page has correct heading', async ({ page }) => {
  await page.goto('about/');
  const heading = page.locator('main h1');
  await expect(heading).toBeVisible();
  await expect(heading).toContainText(/About/i);
});

test('research page has correct heading', async ({ page }) => {
  await page.goto('research/');
  const heading = page.locator('main h1');
  await expect(heading).toBeVisible();
  await expect(heading).toContainText(/Research/i);
});

test('policy page has correct heading', async ({ page }) => {
  await page.goto('policy/');
  const heading = page.locator('main h1');
  await expect(heading).toBeVisible();
  await expect(heading).toContainText(/Policy/i);
});
