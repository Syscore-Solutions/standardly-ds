# .storybook — placeholder scaffold (Phase 2)

**Nothing lives here yet.** This directory is pre-scaffolded for the Storybook configuration planned in [`architecture.md §7`](../../architecture.md#7-storybook-and-chromatic-pipeline).

When Phase 2 starts, this will hold:

- `main.ts` — Storybook config (stories glob, addons: `@storybook/addon-a11y`, `@storybook/addon-designs`)
- `preview.ts` — global decorators, imports the generated `src/styles/tokens.css`

Storybook is the design system's living documentation environment — no separate docs site is planned (`architecture.md §7.1`). Chromatic visual regression is added on top in Phase 4 CI.
