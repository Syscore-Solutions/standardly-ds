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
- **`semantic`** — role-based aliases referencing primitives (e.g. `{color.slate.900}`):
  - `color.bg` — surface backgrounds (`default`, `subtle`, `muted`, `inverse`, `brand`, …)
  - `color.text` — text roles (`primary`, `secondary`, `link`, `onBrand`, …)
  - `color.border` — border roles (`default`, `focus`, `inverse`, …)
  - `color.action` — interactive fills (`primary`, `secondary`, `destructive`, …)
  - `color.feedback` — status colors (`success`, `warning`, `error`, `info` — each with `bg` / `text` / `border`)
  - `typography` — composite text styles: `H1`–`H6`, `body` (`lg`/`md`/`sm`), `label` (`md`/`sm`), `caption`
  - `radius` — `control`, `container`, `overlay`, `badge`

> **Not yet defined:** `semantic.border` and `semantic.space` roles are planned but do **not** exist in `tokens.json` today. The semantic set currently contains only `color`, `typography`, and `radius`. Consuming code should reference primitive `space`/`border` directly until the semantic roles land.

### Brand ramp mapping

| Role | Primitive ramp |
|------|----------------|
| Neutral UI | `slate` |
| Primary / brand | `purple` |
| Success | `mint` |
| Warning | `yellow` |
| Error / destructive | `red` |
| Info / links | `blue` |

`$themes` is intentionally `[]` (single light theme only).

All scales use consistent `2xs/xs/sm/md/lg/xl/2xl/3xl`-style abbreviations (not `s/m/l`) — follow the same pattern when adding new tokens.

Semantic tokens use `$value` then `$type`. Typography composites use `$type: "typography"` with singular property keys (`fontFamily`, `fontSize`, …). References omit the set name: `{color.slate.900}`, not `{primitive.color.slate.900}`.

## Figma sync workflow

The Tokens Studio plugin's GitHub sync is configured against **`main`**. Commit and push token changes to `main`, then use **Pull from GitHub** in the plugin to pick them up in Figma.

Export color, spacing, radius, and font semantics as **Variables**. Export typography composites as **Text styles** with "Create styles with variable references".
