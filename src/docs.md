# Noridoc: src

Path: @/src

### Overview

- Contains all source code for the Astro static site: pages, layouts, components, and styles
- Astro compiles everything in this directory into static HTML/CSS in `@/dist` at build time

### How it fits into the larger codebase

- Astro's file-based routing uses `@/src/pages/` -- each `.astro` file there becomes a route
- `@/src/layouts/BaseLayout.astro` is the shared HTML shell imported by every page
- `@/src/components/` provides Nav and Footer, composed into BaseLayout
- `@/src/styles/global.css` defines CSS custom properties (design tokens) imported once by BaseLayout and available to all components via cascade
- Static assets live in `@/public/`, not here -- Astro copies `public/` contents to `dist/` verbatim

### Core Implementation

```
Page (.astro)
  --> imports BaseLayout
        --> imports global.css (design tokens, reset, typography)
        --> composes Nav + <slot /> + Footer
              Nav reads Astro.url.pathname for active-link highlighting
              Footer renders dynamic copyright year
```

- Every page passes `title` (required) and `description` (optional) as props to BaseLayout, which renders them into `<head>`
- The `base` path (`/canary/`) flows from `astro.config.mjs` into components via `import.meta.env.BASE_URL`

### Things to Know

- All styling uses CSS custom properties defined in `@/src/styles/global.css`; components use Astro scoped `<style>` blocks that reference these variables
- There is no client-side JavaScript -- Astro's default static output mode means every `.astro` file compiles to pure HTML

Created and maintained by Nori.
