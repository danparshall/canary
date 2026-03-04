import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { join } from 'path';

const distDir = join(import.meta.dirname, '..', 'dist');

const pages = [
  { path: './', file: 'index.html' },
  { path: 'about/', file: 'about/index.html' },
  { path: 'research/', file: 'research/index.html' },
  { path: 'policy/', file: 'policy/index.html' },
  { path: 'blog/', file: 'blog/index.html' },
];

for (const { path, file } of pages) {
  const label = path === './' ? '/' : `/${path}`;
  test(`${label} ships zero JavaScript in production build`, async () => {
    const html = readFileSync(join(distDir, file), 'utf-8');
    const scriptTags = html.match(/<script\s+[^>]*src=/g) || [];
    expect(scriptTags.length).toBe(0);
  });
}
