# The Token Pipeline

This document outlines how Standardly moves from design decisions to production code without manual handoffs or frontend engineers.

## 1. The Source of Truth (`tokens.json`)

All design decisions live in a single `tokens.json` file at the root of this repository.
- Formatted to the **W3C Design Token Community Group (DTCG)** draft spec.
- Edited in Figma via the **Tokens Studio** plugin, which reads and writes directly to this repo.
- Separated strictly into two layers:
  - **Primitive:** Raw values (e.g., `#5c42f5`, `16px`).
  - **Semantic:** Meaningful aliases pointing *only* to primitives (e.g., `{color.action.primary}` → `{color.purple.600}`).

## 2. Automated Build (`build-tokens.mjs`)

A lean Node script (`storybook/build-tokens.mjs`) reads the W3C tokens and emits standard CSS custom properties.
- **Why not Style Dictionary?** Too heavy for our needs right now. We only need CSS variables.
- **Output:** Generates `primitives.css` containing raw variable definitions (`--color-purple-600: #5c42f5;`).

## 3. Semantic Mapping (`semantic.css`)

The magic happens in the mapping. 
- Each design direction (o1, o2, o3) is defined by a specific `semantic.css` file.
- This file maps semantic variables to primitive variables (e.g., `--color-action-primary: var(--color-purple-600);`).
- **Proof:** The HTML files in `directions/` all use the same `primitives.css` but different inline semantic mappings, resulting in entirely distinct visual identities with zero component changes.

## 4. Components (`storybook/src/components`)

React components are written strictly against semantic variables.
- A `<Button>` never uses `--color-purple-600`; it uses `--color-action-primary`.
- When the direction changes, the button updates automatically. No code changes required.

## 5. Storybook Validation

We run Storybook to prove the components isolate correctly and expose the right controls. 
- If we can generate the Storybook, we can generate the final React package.

## 6. Distribution (Phase 2 Planned)

Once a direction is chosen, the `storybook/` folder will graduate to the main Phase 2 library.
- Built via Vite.
- Distributed as an internal NPM package (`@standardly/ui`).
- Consumed by the main Standardly web app.
