import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['./', 'about/', 'research/', 'policy/'];

for (const path of pages) {
  const label = path === './' ? '/' : `/${path}`;
  test(`${label} passes accessibility checks`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page })
      .exclude('astro-dev-toolbar')
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
