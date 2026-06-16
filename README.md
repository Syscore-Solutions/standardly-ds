# 1w Design System — Proof of Concept

A design-to-code workflow POC that connects **Figma → Tokens Studio → Style Dictionary → React components → Storybook**. Built to validate an org-wide design system pipeline where designers and engineers share a single source of truth.

## What this POC proves

| Capability | How it's demonstrated |
|---|---|
| Figma feeds a shared design system | Tokens exported via Tokens Studio to `tokens/` |
| Design tokens are automated code | Style Dictionary builds JSON → CSS variables |
| Light/dark theming works end-to-end | Semantic token sets produce separate CSS files |
| Components are theme-aware | React components reference CSS custom properties, never raw values |
| Components are documented and testable | Storybook with stories, a11y checks, and Vitest integration |
| The loop is repeatable | Update tokens → rebuild CSS → components reflect changes instantly |

## Architecture

```
Figma (Tokens Studio)
        │
        │ manual export
        ▼
tokens/ ───────────────────┐   DTCG-format JSON token files
        │                  │
        ▼                  ▼
sd.config.js         DESIGN.md
(Style Dictionary)   (design spec)
        │
        │ npm run build:tokens
        ▼
src/styles/*.css  ────────►  CSS custom properties
        │                     (:root primitives + semantic light/dark)
        │
        ▼
src/components/  ──────────►  React components (Button, Accordion)
        │
        ▼
.storybook/  ──────────────►  Storybook 10 + Vitest + a11y
```

## Token Architecture

Tokens follow a **two-layer primitive → semantic** model.

```
tokens/
├── raw-colors/              ← Primitive palette (never used directly in code)
├── semantic-colors/         ← Semantic aliases — light.json + dark.json
├── brand-colors/            ← Brand-specific primitives
├── alpha/                   ← Alpha/opacity variants
├── chart-colors/            ← Data visualisation palette (light + dark)
├── shadows/                 ← Elevation shadows
├── typography/              ← Font family, size, weight, line-height
├── spacing/                 ← Relative spacing scale (rem)
├── spacing-absolute/        ← Absolute spacing scale (px)
├── border-radii/            ← Relative radius scale
└── border-radii-absolute/   ← Absolute radius scale (px)
```

**Rule:** Components reference semantic tokens via CSS custom properties (`var(--generalBackground)`), never raw primitive values.

### Theme system

- `:root` — light theme tokens
- `[data-theme="dark"]` — dark theme overrides
- Applied via `npm run build:tokens` → `src/styles/semantic-light.css` + `semantic-dark.css`

## Getting Started

```sh
# Install dependencies
npm install

# Build design tokens → CSS
npm run build:tokens

# Start Storybook
npm run storybook

# Run tests (Vitest + Storybook)
npm test

# Type-check
npm run typecheck
```

## Scripts

| Command | Description |
|---|---|
| `npm run build:tokens` | Compile `tokens/` JSON → `src/styles/*.css` via Style Dictionary |
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook site |
| `npm test` | Run Vitest with Storybook integration |
| `npm run typecheck` | Run TypeScript type checking (`tsc --noEmit`) |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + Vite production build |

## Components

### Button

Variants: `primary`, `secondary`, `outline`, `ghost`, `destructive`

Sizes: `mini`, `sm`, `default`, `lg`

Roundness: `default`, `round`

Supports `leftIcon` and `rightIcon` slots.

### Accordion

- `type`: `single` (default) or `multiple`
- Variants: `line` (default), `bordered`
- Sub-components: `AccordionItem`, `AccordionTrigger`, `AccordionContent`
- Animated open/close with CSS transitions

## Tooling

- **React 19** — component library
- **TypeScript 6** — strict mode
- **Vite 8** — dev server and build
- **Storybook 10** — component dev environment and documentation
- **Style Dictionary 5** — token transformation pipeline
- **Tokens Studio SD Transforms** — DTCG token processing
- **Vitest 4** — test runner
- **Playwright** — browser-based component testing
- **a11y addon** — accessibility compliance checks

## Design Spec

See [`DESIGN.md`](./DESIGN.md) for the full design system specification — token naming conventions, component anatomy, and Figma sync instructions.

## POC Plan

See [`poc-plan.md`](./poc-plan.md) for the original build plan and workflow vision.
