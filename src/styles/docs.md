# Noridoc: styles

Path: @/src/styles

### Overview

- Contains `global.css`, the single global stylesheet imported by `@/src/layouts/BaseLayout.astro`
- Defines all CSS custom properties (design tokens), a box-sizing reset, base typography, layout primitives, and utility classes

### How it fits into the larger codebase

- Imported once in `@/src/layouts/BaseLayout.astro`; the custom properties cascade to all components and pages
- Components in `@/src/components/` reference these variables in their scoped `<style>` blocks (e.g., `var(--color-border)`, `var(--nav-height)`)
- Pages use utility classes defined here (`.section`, `.tagline`, `.gold`, `.container`)

### Core Implementation

- **Design tokens** (`:root` custom properties):

| Token | Value | Purpose |
|---|---|---|
| `--color-dark` | `#111` | Headings, links, active nav |
| `--color-gold` | `#D4AF37` | Accent / hover color |
| `--color-grey` | `#4A4A4A` | Body text |
| `--color-light-grey` | `#717171` | Footer text |
| `--color-bg` | `#FAFAF8` | Page background |
| `--color-white` | `#fff` | Nav background |
| `--color-border` | `#e5e5e3` | Horizontal rules, nav/footer borders |
| `--font-heading` | Cinzel, serif fallback | Headings (h1-h3) |
| `--font-body` | System sans-serif stack | Body text, nav |
| `--max-width` | `800px` | Content container |
| `--nav-height` | `4rem` | Nav bar height |

- **Layout**: `.container` applies `max-width` + auto margins + horizontal padding. `main` uses `min-height: calc(100vh - nav - footer)` to push the footer to the bottom on short pages.
- **Typography**: Headings use `--font-heading` with `font-weight: 400`; paragraphs use `--color-grey`; links are unstyled (no underline) with gold hover.

### Things to Know

- All theming runs through these custom properties -- changing a color here changes it everywhere
- There is no CSS preprocessor or build-time processing; this is plain CSS imported directly by Astro
- The `main` min-height calculation references `--nav-height` and a hardcoded `8rem` footer estimate

Created and maintained by Nori.
