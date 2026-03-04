# Noridoc: layouts

Path: @/src/layouts

### Overview

- Contains `BaseLayout.astro`, the single shared HTML shell used by all pages
- Responsible for `<head>` metadata, loading global CSS, and composing the Nav/Footer around page content

### How it fits into the larger codebase

- Every page in `@/src/pages/` imports BaseLayout and passes props into it
- BaseLayout imports `@/src/styles/global.css`, which makes design tokens available site-wide
- BaseLayout composes `@/src/components/Nav.astro` and `@/src/components/Footer.astro` around a `<slot />`
- The `base` URL (`import.meta.env.BASE_URL`) is used here for the favicon path

### Core Implementation

- **Props**: `title` (required string), `description` (optional string, defaults to "The Canary Institute for AI Policy")
- **Structure**: `<html>` > `<head>` (charset, viewport, description, favicon, Google Fonts preconnect + Cinzel import, title) > `<body>` > Nav > `<main><div class="container"><slot /></div></main>` > Footer
- The `<main>` element wraps content in a `.container` div that applies `max-width` and centering from global.css

### Things to Know

- Google Fonts (Cinzel) is loaded via `<link>` tags with `preconnect` hints -- this is the only external dependency at page load time
- The favicon points to `canary_base.svg` in `@/public/` using the base path prefix

Created and maintained by Nori.
