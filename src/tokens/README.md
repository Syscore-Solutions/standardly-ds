# src/tokens — placeholder scaffold (Phase 2/3)

**Nothing lives here yet.** This directory is pre-scaffolded for the token build pipeline planned in [`architecture.md §2.2`](../../architecture.md#22-planned-layout-phase-2) and [`§6`](../../architecture.md#6-token-to-css-build-pipeline).

When Phase 2/3 starts, this will hold:

- `transform.ts` — reads root [`tokens.json`](../../tokens.json) → generates CSS custom properties into `src/styles/tokens.css`
- `utils.ts` — reference resolver and type helpers

The build tool is **not yet chosen** (Style Dictionary vs custom Node script vs Token Transformer — see `architecture.md §6.3`). Do not add code here until that decision is made.
