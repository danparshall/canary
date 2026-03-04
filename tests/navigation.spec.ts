import { test, expect } from '@playwright/test';

const pages = [
  { path: './', name: 'Home' },
  { path: 'about/', name: 'About' },
  { path: 'research/', name: 'Research' },
  { path: 'policy/', name: 'Policy' },
];

test('home page loads and has correct title', async ({ page }) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/Canary Institute/);
});

test('all nav links navigate to correct pages', async ({ page }) => {
  await page.goto('./');

  for (const { name } of pages.slice(1)) {
    await page.click(`nav >> a:has-text("${name}")`);
    await expect(page).toHaveURL(new RegExp(name.toLowerCase() + '/'));
  }
});

test('each page has a working home link', async ({ page }) => {
  for (const { path } of pages.slice(1)) {
    await page.goto(path);
    await page.click('nav >> a:has-text("Home")');
    await expect(page).toHaveURL(/\/$/);
  }
});
