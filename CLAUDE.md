# Canary Institute Website

Astro static site deployed to https://canaryinstitute.ai via GitHub Pages.

## Environment (overrides global Python policy)

This is a Node/TypeScript project. Do NOT use Python, uv, pyproject.toml, or pytest here.

- **Package manager:** npm (not pnpm, not yarn). `package-lock.json` is committed.
- **Node version:** Use whatever is available; no `.nvmrc` pinned yet.
- **Install:** `npm install`
- **Dev server:** `npm run dev` (port 4321)
- **Build:** `npm run build`
- **Type check:** `npm run check` (runs `astro check`)
- **Test:** `npm test` (Playwright + axe-core accessibility)
- **Lint/format:** None configured yet.

## Testing

Playwright tests live in `tests/`. They run against the dev server on localhost:4321.
Accessibility checks use `@axe-core/playwright`. All new pages should have accessibility coverage.

## Project structure

- `src/pages/` — Astro pages (file-based routing)
- `src/components/` — Reusable Astro components
- `src/layouts/` — Page layouts
- `src/styles/` — Stylesheets
- `public/` — Static assets (served as-is)
- `logos/` — Logo source files
