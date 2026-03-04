# Noridoc: canary (root)

Path: @/

### Overview

- Static website for The Canary Institute, an AI safety organization, built with Astro 5.x
- Ships zero JavaScript to the browser -- all pages are pre-rendered HTML + CSS
- Hosted on GitHub Pages at `https://danparshall.github.io/canary/` via a GitHub Actions workflow

### How it fits into the larger codebase

- This is the repository root; all other folders are children of this one
- `astro.config.mjs` sets the `site` and `base` (`/canary/`) which propagate through `import.meta.env.BASE_URL` into all navigation links, asset paths, and Playwright test URLs
- `package.json` defines the build/dev/test scripts; the only runtime dependency is `astro`, with `@playwright/test` and `@axe-core/playwright` as dev dependencies
- The GitHub Actions workflow in `@/.github/workflows/deploy.yml` builds and deploys the `dist/` directory to GitHub Pages on pushes to `main`
- Playwright config (`playwright.config.ts`) starts the Astro dev server on port 4321 and runs tests against `http://localhost:4321/canary/`

### Core Implementation

- **Build**: `npm run build` produces static HTML in `dist/`, one directory per page route (e.g., `dist/about/index.html`)
- **Dev**: `npm run dev` starts the Astro dev server; `npm test` runs Playwright integration tests against it
- **Base path**: The `/canary/` base path is the single most important configuration detail -- it must match the GitHub Pages repository name and is used by Nav, BaseLayout, and all test URLs

### Things to Know

- The `base` value `/canary/` in `astro.config.mjs` must match the GitHub repo name for GitHub Pages to serve assets correctly; changing the repo name requires updating this value and all downstream references
- Content on the pages currently uses placeholder/lorem-ipsum-style text that will be replaced with real copy
- The project is planned to add a blog (via Astro Content Collections) and papers in the future

Created and maintained by Nori.
