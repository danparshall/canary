# Noridoc: styles

Path: @/src/styles

### Overview

- Contains `global.css`, the single global stylesheet imported by `@/src/layouts/BaseLayout.astro`
- Defines all CSS custom properties (design tokens), a box-sizing reset, base typography, layout primitives, and utility classes

### How it fits into the larger codebase

- Imported once in `@/src/layouts/BaseLayout.astro`; the custom properties cascade to all components and pages
- Components in `@/src/components/` reference these variables in their scoped `<style>` blocks (e.g., `var(--color-border)`, `var(--nav-height)`)
- Pages use utility classes defined here (`.section`, `.tagline`, `.container`)

### Core Implementation

- **Design tokens** (`:root` custom properties):

| Token | Value | Purpose |
|---|---|---|
| `--color-dark` | `#1A2A28` | Dark teal-tinged charcoal for headings, links, active nav |
| `--color-accent` | `#1A4A44` | Deep teal accent / hover color (renamed from `--color-gold`) |
| `--color-grey` | `#4A4A4A` | Body text |
| `--color-light-grey` | `#527872` | Teal-tinted muted text (footer, secondary); adjusted from brand spec `#7A9A96` for WCAG AA compliance |
| `--color-bg` | `#FAFAF8` | Page background |
| `--color-white` | `#fff` | Nav background |
| `--color-border` | `#e5e5e3` | Horizontal rules, nav/footer borders |
| `--font-heading` | Cinzel, serif fallback | Headings (h1-h3) |
| `--font-body` | System sans-serif stack | Body text, nav |
| `--max-width` | `800px` | Content container |
| `--nav-height` | `4rem` | Nav bar height |

- **Layout**: `.container` applies `max-width` + auto margins + horizontal padding. `main` uses `min-height: calc(100vh - nav - footer)` to push the footer to the bottom on short pages.
- **Typography**: Headings use `--font-heading` with `font-weight: 400`; paragraphs use `--color-grey`; links are unstyled (no underline) with teal accent hover via `--color-accent`.

### Things to Know

- All theming runs through these custom properties -- changing a color here changes it everywhere
- There is no CSS preprocessor or build-time processing; this is plain CSS imported directly by Astro
- The `main` min-height calculation references `--nav-height` and a hardcoded `8rem` footer estimate

Created and maintained by Nori.
