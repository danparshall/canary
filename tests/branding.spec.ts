import { test, expect } from '@playwright/test';

test('home page heading says "AI Policy Research & Public Advocacy"', async ({ page }) => {
  await page.goto('./');
  const heading = page.locator('main h1');
  await expect(heading).toContainText('AI Policy Research & Public Advocacy');
});

test('home page title contains site name', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/Canary Institute/);
});

test('default meta description contains relevant keywords', async ({ page }) => {
  await page.goto('./');
  const desc = page.locator('meta[name="description"]');
  await expect(desc).toHaveAttribute('content', /AI/i);
});

test('CSS accent color is teal, not gold', async ({ page }) => {
  await page.goto('./');
  const accent = await page.evaluate(() =>
    getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim()
  );
  expect(accent).toBe('#1A4A44');
});

test('link hover color uses teal accent', async ({ page }) => {
  await page.goto('./');
  const hasGold = await page.evaluate(() => {
    const sheets = Array.from(document.styleSheets);
    for (const sheet of sheets) {
      try {
        const rules = Array.from(sheet.cssRules);
        for (const rule of rules) {
          if (rule instanceof CSSStyleRule && rule.cssText.includes('#D4AF37')) {
            return true;
          }
        }
      } catch { /* cross-origin sheets */ }
    }
    return false;
  });
  expect(hasGold).toBe(false);
});

test('nav logo SVG does not contain gold fill', async ({ page }) => {
  await page.goto('./');
  const logoSrc = await page.locator('img[src*="canary"]').first().getAttribute('src');
  expect(logoSrc).toBeTruthy();
  const response = await page.request.get(logoSrc!);
  const svgText = await response.text();
  expect(svgText).not.toContain('#D4AF37');
  expect(svgText).toContain('#1A4A44');
});

test('about page description references AI policy', async ({ page }) => {
  await page.goto('about/');
  const desc = page.locator('meta[name="description"]');
  await expect(desc).toHaveAttribute('content', /AI policy/i);
});
