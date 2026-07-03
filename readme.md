# Standardly Design System

Design tokens for Standardly, authored in [W3C DTCG](https://www.designtokens.org/tr/drafts/format/) format for use with the [Tokens Studio](https://tokens.studio/) plugin for Figma.

## Structure

Two token sets, tracked in `tokens/$metadata.json`'s `tokenSetOrder`:

- **`tokens/primitive.json`** — raw values only, no references. Four groups:
  - `color` — ramps: `neutral` (`white`/`black` only), `slate`, `purple`, `mint`, `red`, `yellow`, `teal`, `blue`, `pink` (each `50`–`950`)
  - `size` — sizing scale, `2xs`–`3xl`
  - `space` — spacing scale, `3xs`–`6xl`
  - `radius` — border-radius scale, `none` / `sm` / `md` / `lg` / `xl` / `2xl` / `full`
- **`tokens/semantic.json`** — alias layer that references primitives (e.g. `{slate.900}`). Currently empty — populate as components need semantic color/spacing/radius tokens.
- **`tokens/$metadata.json`** / **`tokens/$themes.json`** — Tokens Studio config. Single theme only (light mode), so `$themes.json` is intentionally `[]`.

All scales use consistent `2xs/xs/sm/md/lg/xl/2xl/3xl`-style abbreviations (not `s/m/l`) — follow the same pattern when adding new tokens.

## Figma sync workflow

The Tokens Studio plugin's GitHub sync is configured against the **`tokens-studio`** branch, not `main`. After committing token changes to `main`, they must also be pushed to `tokens-studio` before **Pull from GitHub** in the plugin will pick them up:

```
git push origin main
git push origin main:tokens-studio
```

`tokens-studio` is kept as a fast-forward of `main`, so this is a plain push, not a force-push. This is a manual step today — there's no CI automation to keep the branches in sync — so repeat it for every token change.
