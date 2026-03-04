# Noridoc: components

Path: @/src/components

### Overview

- Contains the two shared UI components: `Nav.astro` (site navigation) and `Footer.astro` (copyright footer)
- Both are composed into `@/src/layouts/BaseLayout.astro` and appear on every page

### How it fits into the larger codebase

- Only consumed by `@/src/layouts/BaseLayout.astro` -- no page imports these directly
- Nav reads `Astro.url.pathname` at build time to determine which link should have the `active` class
- Both components reference CSS custom properties from `@/src/styles/global.css` (e.g., `--color-border`, `--nav-height`, `--font-body`)

### Core Implementation

- **Nav.astro**: Defines a hardcoded array of `{ href, label }` link objects, each prefixed with `import.meta.env.BASE_URL`. The `isActive()` function compares the link's `href` against the current page path -- for the home link it does an exact match against the base URL, for all other links it uses `startsWith`. Includes a responsive breakpoint at 600px that stacks the layout vertically.
- **Footer.astro**: Renders a copyright notice with a dynamically computed year via `new Date().getFullYear()`. Minimal scoped styles for border, padding, and text color.

### Things to Know

- The Nav link array is hardcoded -- adding a new page to `@/src/pages/` also requires adding an entry to this array
- Nav's `isActive()` handles the home route specially: it matches both `/canary/` and `/canary` (with or without trailing slash)
- Nav's max-width is 900px (wider than the 800px content container) to give the navigation more horizontal space

Created and maintained by Nori.
