# Design System Spec

Source of truth for both Claude Design (prototyping) and Claude Code (implementation). Keep this file in sync with Figma.

---

## Token Architecture

Tokens follow a two-layer primitive → semantic model.

```
tokens/
├── raw-colors/         ← primitive palette (never use directly in components)
│   └── mode-1.json
├── semantic-colors/    ← semantic aliases; light and dark variants
│   ├── light.json
│   └── dark.json
├── brand-colors/       ← brand-specific palette primitives
├── alpha/              ← alpha/opacity variants
├── chart-colors/       ← data visualisation palette (light + dark)
├── shadows/            ← elevation shadows
├── typography/         ← font family, size, weight, line-height scales
├── spacing/            ← relative spacing scale (rem)
├── spacing-absolute/   ← absolute spacing scale (px)
├── border-radii/       ← relative radius scale
└── border-radii-absolute/ ← absolute radius scale (px)
```

`$metadata.json` defines token set layering order (used by Tokens Studio).

---

## Naming Conventions

Token references use dot notation: `{group.subgroup.scale}`.

| Layer | Example key | Example value |
|-------|-------------|---------------|
| Primitive | `neutral.500` | `#737373` |
| Semantic | `general.background` | `{white}` |
| Semantic | `general.foreground` | `{brand-neutrals.950}` |

Semantic token names are plain English (`primary`, `secondary`, `destructive`, `muted`, `accent`). Map these directly to CSS variable names when building components.

---

## Light / Dark Theming

- `semantic-colors/light.json` — default (light) theme values
- `semantic-colors/dark.json` — dark mode overrides

Both files share the same token keys. Dark mode is applied by swapping the active semantic token set (e.g. via a `data-theme="dark"` attribute on `<html>`).

When generating CSS variables, output light tokens under `:root` and dark tokens under `[data-theme="dark"]`.

---

## Using Tokens in Components

Reference semantic tokens, never raw primitives.

```tsx
// Correct — semantic
style={{ background: 'var(--color-general-background)' }}

// Wrong — primitive leaks design decisions into code
style={{ background: '#fafafa' }}
```

---

## Re-syncing from Figma

1. Open Figma file → Tokens Studio plugin
2. Export → JSON → Download ZIP
3. Replace `~/Desktop/tokens.zip`
4. Run: `node scripts/ingest-tokens.js` (to be created)

Until that script exists, follow the manual mapping in the plan docs.
