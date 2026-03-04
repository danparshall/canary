# Noridoc: logos

Path: @/logos

### Overview

- Brand asset source directory containing the Canary Institute logo SVGs and the design rationale document
- These are source/reference files, not deployed to the site (the deployed logo is `@/public/canary_base.svg`)

### How it fits into the larger codebase

- `@/public/canary_base.svg` is the favicon and nav logo used at runtime; the files here are the upstream brand assets that `canary_base.svg` is derived from
- The `.docx` rationale document is gitignored via `*.docx` in `@/.gitignore`
- Light and dark SVG variants both carry the tagline "FOR AI POLICY" and use the teal palette (`#1A4A44` accent fill)

### Core Implementation

- `canary_logo_light.svg` -- Light background variant of the logo
- `canary_logo_dark.svg` -- Dark background variant of the logo
- `canary_logo_rationale.docx` -- Brand rationale document (gitignored)
- `canary_logo_teal.html` -- HTML preview of the teal logo design

### Things to Know

- When updating brand colors or the tagline, these source SVGs should be updated alongside `@/public/canary_base.svg` to keep them in sync
- The branding tests in `@/tests/branding.spec.ts` verify that `canary_base.svg` contains the expected teal fill color and does not contain the old gold `#D4AF37`

Created and maintained by Nori.
