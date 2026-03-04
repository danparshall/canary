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

test('blog listing page has correct heading', async ({ page }) => {
  await page.goto('blog/');
  const heading = page.locator('main h1');
  await expect(heading).toBeVisible();
  await expect(heading).toContainText(/Blog/i);
});

test('blog listing page links to at least one post', async ({ page }) => {
  await page.goto('blog/');
  const postLinks = page.locator('.post-preview h2 a');
  const count = await postLinks.count();
  expect(count).toBeGreaterThanOrEqual(1);
});

test('home page contains CAIS extinction statement', async ({ page }) => {
  await page.goto('./');
  const body = await page.textContent('main');
  expect(body).toContain('risk of extinction from AI');
});

test('home page has no placeholder lorem text', async ({ page }) => {
  await page.goto('./');
  const body = await page.textContent('main');
  const lowerBody = body?.toLowerCase() ?? '';
  expect(lowerBody).not.toContain('craft beer');
  expect(lowerBody).not.toContain('selvage');
  expect(lowerBody).not.toContain('bushwick');
  expect(lowerBody).not.toContain('lorem ipsum');
});

test('about page has no placeholder lorem text', async ({ page }) => {
  await page.goto('about/');
  const body = await page.textContent('main');
  const lowerBody = body?.toLowerCase() ?? '';
  expect(lowerBody).not.toContain('craft beer');
  expect(lowerBody).not.toContain('bushwick');
  expect(lowerBody).not.toContain('sriracha');
});
