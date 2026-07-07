# Standardly Design System

Design tokens for Standardly, authored in [W3C DTCG](https://www.designtokens.org/tr/drafts/format/) format for use with the [Tokens Studio](https://tokens.studio/) plugin for Figma.

## Structure

All tokens live in **`tokens.json`**. Two token sets, tracked in `$metadata.tokenSetOrder`:

- **`primitive`** — raw values only, no references:
  - `color` — ramps: `neutral` (`white`/`black` only), `slate`, `purple`, `mint`, `red`, `yellow`, `teal`, `blue`, `pink` (each `50`–`950`)
  - `size` — sizing scale, `2xs`–`3xl`
  - `space` — spacing scale, `3xs`–`6xl`
  - `radius` — border-radius scale, `none` / `sm` / `md` / `lg` / `xl` / `2xl` / `full`
  - `border` — border-width scale, `none` / `sm` / `md` / `lg` / `xl`
  - `opacity` — opacity scale, `0` / `10` / `20` / `40` / `60` / `80` / `100`
  - `fontFamily` — `heading` (Cal Sans), `body` (Geist)
  - `fontWeight` — `regular` (400), `medium` (500), `semibold` (600), `bold` (700)
  - `fontSize` — scale, `xs`–`6xl`
  - `lineHeight` — `tight` / `normal` / `relaxed` (percentage values)
  - `letterSpacing` — `none` / `wide` / `wider` (percentage values)
- **`semantic`** — alias layer that references primitives (e.g. `{slate.900}`). Currently empty — populate as components need semantic color, spacing, radius, and typography tokens.

`$themes` is intentionally `[]` (single light theme only).

All scales use consistent `2xs/xs/sm/md/lg/xl/2xl/3xl`-style abbreviations (not `s/m/l`) — follow the same pattern when adding new tokens.

## Figma sync workflow

The Tokens Studio plugin's GitHub sync is configured against **`main`**. Commit and push token changes to `main`, then use **Pull from GitHub** in the plugin to pick them up in Figma.
