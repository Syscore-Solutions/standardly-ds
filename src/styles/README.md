# src/styles — placeholder scaffold (Phase 2/3)

**Nothing lives here yet.** This directory is pre-scaffolded for the generated stylesheet planned in [`architecture.md §6`](../../architecture.md#6-token-to-css-build-pipeline).

When the token build pipeline exists, it will emit exactly one file here:

- `tokens.css` — CSS custom properties generated from root [`tokens.json`](../../tokens.json)

> **Critical rule:** `tokens.css` is a **generated file — never edit it by hand.** Always regenerate via the token build script after modifying `tokens.json` (`architecture.md §6.2`). Figma `$extensions` (`com.figma.*`) metadata is stripped during generation.
