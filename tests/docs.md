# Noridoc: tests

Path: @/tests

### Overview

- Playwright integration tests that run against the Astro dev server in Chromium
- Cover navigation, layout structure, page content, responsive behavior, accessibility (via axe-core), and performance

### How it fits into the larger codebase

- Configured by `@/playwright.config.ts`, which starts `npm run dev` and points tests at `http://localhost:4321/canary/`
- Tests run in Chromium only (single project config)
- Accessibility tests use `@axe-core/playwright` to run automated WCAG checks, excluding the Astro dev toolbar
- `npm test` is the entry point; CI retries failed tests twice (`retries: process.env.CI ? 2 : 0`)

### Core Implementation

- **Navigation tests**: Verify page loads, all nav links reach the correct URLs, and each page's home link returns to the base URL
- **Layout tests**: Assert every page has a visible logo, a nav with 4 links, and a footer (parameterized across all pages)
- **Content tests**: Check that each page contains its expected `<h1>` heading text
- **Responsive tests**: Set viewport to 375px width and verify nav remains visible and functional
- **Accessibility tests**: Run axe-core on each page and assert zero violations
- **Performance tests**: Verify each page loads within 3 seconds and the document has a valid `<title>`

### Things to Know

- All test files define a `pages` array with the site's routes and loop over them -- adding a new page requires updating these arrays
- The Playwright `baseURL` includes the `/canary/` base path, so test navigation uses relative paths like `'./'` and `'about/'`
- The dev server is reused when not in CI (`reuseExistingServer: !process.env.CI`) to speed up local test runs

Created and maintained by Nori.
