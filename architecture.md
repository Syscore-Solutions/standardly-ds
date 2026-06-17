# Architecture & Pipeline Specifications

This document outlines the pipeline architecture, directory structure mapping, and module communication patterns within the 1w Design System POC repository.

---

## Technical Pipeline Overview

The project implements a design-to-code compiler architecture, translating raw design metrics into typed React component UI elements.

```
┌──────────────────────────────────────┐
│       Tokens Studio / Figma          │
└──────────────────┬───────────────────┘
                   │ export (JSON)
                   ▼
┌──────────────────────────────────────┐
│           tokens/ (JSON)             │
│    (Raw primitives & Semantics)      │
└──────────────────┬───────────────────┘
                   │
                   │ npm run build:tokens (Style Dictionary transforms)
                   ▼
┌──────────────────────────────────────┐
│         src/styles/*.css             │
│     (CSS custom properties)          │
└──────────┬───────────────────────┬───┘
           │                       │
           │ CSS imports           │ CSS variables mapping
           ▼                       ▼
┌──────────────────────┐   ┌──────────────────────┐
│   src/components/    │   │    .storybook/       │
│  (React UI Library)  │   │ (Visual Playgrounds) │
└──────────┬───────────┘   └──────────────────────┘
           │
           │ Vitest integrations
           ▼
┌──────────────────────┐
│    vitest / tests    │
└──────────────────────┘
```

---

## Directory Layout Mapping

The structure of the repository is mapped as follows:

- **Root Configurations:**
  - `package.json` / `package-lock.json`: Dependencies, dev scripts, and package management.
  - `tsconfig.json`: TypeScript configuration (strict compiler options).
  - `vite.config.ts` / `vitest.config.ts`: Configuration for dev server/bundling and testing.
  - `sd.config.js`: Style Dictionary engine transforms and formats.
  - `.gitignore` / `.gitattributes`: Repository syncing controls.
- **Directories:**
  - `tokens/`: Holds design-token JSON files, separating primitive scales and semantic collections.
  - `src/`: Core development codebase.
    - `src/components/`: Directory for reusable design system components (React).
    - `src/styles/`: Generated CSS properties files.
  - `.storybook/`: Storybook testing environment and preview rendering controls.

---

## Module Communication & Integration Rules

1. **Tokens Compile Transformation:**
   - Style Dictionary (`sd.config.js`) reads source files inside `tokens/`.
   - The engine runs token-transformer pipelines to resolve alias variables.
   - It outputs CSS variables inside `src/styles/` mapped under `:root` (light default values) and `[data-theme="dark"]` overrides.

2. **Style Application in React:**
   - CSS properties compiled under `src/styles/` must be imported in the entry-point stylesheet.
   - React components must never import raw token JSON files or hardcode color hex codes. They reference the styles via standard CSS variables (e.g., `var(--color-primary-default)`).

3. **Storybook Documentation Hook:**
   - Storybook reads `.storybook/preview.tsx` to load compiled stylesheets (`src/styles/`).
   - Standard stories are defined alongside the React components to isolate component states (`*.stories.tsx`).

4. **Testing Hook:**
   - Vitest runs automated verification against Storybook files using Playwright test engines.
   - Accessibility metrics are checked via automated `@storybook/addon-a11y` tests.
