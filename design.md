# UX/UI Design Specifications

This specification serves as the design source of truth for both human and AI designers/engineers working on this project. All design adjustments must comply with these design tokens, typography, color palette rules, and user flow guidelines.

---

## Design Tokens

Tokens are organized in a two-layer model (Primitives → Semantics) defined under the `tokens/` directory.

### Token Directory Structure
```
tokens/
├── raw-colors/         ← Primitive palette (do not reference directly in component code)
│   └── mode-1.json
├── semantic-colors/    ← Semantic/theme-aware aliases (references primitive keys)
│   ├── light.json
│   └── dark.json
├── brand-colors/       ← Brand-specific palette primitives
├── alpha/              ← Alpha/opacity variants
├── chart-colors/       ← Data visualization palette (light & dark)
├── shadows/            ← Elevation shadows
├── typography/         ← Font families, sizes, weights, and line-heights
├── spacing/            ← Relative spacing scale (rem)
├── spacing-absolute/   ← Absolute spacing scale (px)
├── border-radii/       ← Relative radius scale
└── border-radii-absolute/ ← Absolute radius scale (px)
```

### Token Naming Convention
Tokens are referenced in configuration and specifications using dot notation: `{group.subgroup.scale}`.
- **Primitive Example:** `neutral.500` -> `#737373`
- **Semantic Example:** `general.background` -> `{white}`
- **Semantic Example:** `general.foreground` -> `{brand-neutrals.950}`

---

## Typography

Typography styles must utilize variables built from standard typography configurations.

- **Font Family:** Inter, system-ui, -apple-system, sans-serif.
- **Font Sizes:**
  - `sm`: 0.875rem (14px) — Captions, labels, helper texts.
  - `base` (or `md`): 1rem (16px) — Body text, inputs, buttons.
  - `lg`: 1.125rem (18px) — Subheadings, card titles.
  - `xl`: 1.5rem (24px) — Section headings.
  - `2xl`: 1.875rem (30px) — Main headers.
- **Font Weights:**
  - Regular (`400`): Standard body text.
  - Medium (`500`): Navigation items, active states.
  - Semi-Bold (`600`): Component headings, primary action text.
  - Bold (`700`): Page-level titles.

**Typography Rule:** Avoid using more than 2 font weights on a single screen to maintain clean hierarchy and high-quality aesthetic.

---

## Palette (Color & Theming)

The system supports end-to-end Light and Dark themes. The active theme is controlled by a `data-theme` attribute (e.g. `data-theme="dark"` or `data-theme="light"` on the `<html>` or `<body>` element).

### Theme Tokens Configuration
- **Light Theme (Default / `:root`):**
  - Uses `tokens/semantic-colors/light.json` values.
  - Map to CSS custom properties like `--color-general-background`, `--color-general-foreground`.
- **Dark Theme Override (`[data-theme="dark"]`):**
  - Uses `tokens/semantic-colors/dark.json` values.
  - Swaps semantic token mappings while retaining identical keys.

### Brand & General Semantic Mapping
- **Primary:** Represents main actions. Keep to exactly one focal action per view.
- **Secondary:** Used for accents, secondary actions, and subtle highlights.
- **Destructive:** Used for critical actions (e.g. deletion, warnings).
- **Muted / Accent:** Soft backgrounds, border dividers, and secondary textual elements.

---

## User Flow & Interaction Guidelines

To ensure the interface feels interactive, alive, and highly premium, adhere to the following interactive states and feedback guidelines:

1. **Active and Hover States:**
   - All buttons, links, and cards must have smooth transition hover states (e.g., transition `background-color`, `border-color`, or `box-shadow` over `150ms ease-in-out`).
   - Scales, slight lifts, or depth shadows on hover should be subtle but noticeable (e.g., transform `translateY(-1px)`).

2. **Focus Indicators (Accessibility/a11y):**
   - Interactive elements must show a high-contrast focus state when focused (keyboard navigation).
   - Use an outline ring with safe padding (e.g., `outline: 2px solid var(--color-primary)`, `outline-offset: 2px`).

3. **Motion and Transition (Micro-animations):**
   - **Accordions / Drawers:** Animate opening and closing using CSS transitions on height/max-height or grid-row-template-rows (e.g. `transition: grid-template-rows 200ms cubic-bezier(0.4, 0, 0.2, 1)`).
   - **Page Transitions & Modals:** Use entry fades (`opacity` 0 to 1) and slide-ins (`translateY` or `scale` 0.95 to 1) over `200ms` to provide standard responsive flow.

4. **Figma Synchronization Sync Workflow:**
   - Figma updates → Export to Tokens Studio → Download JSON package.
   - Commit files in `tokens/`.
   - Run `npm run build:tokens` to recompile design tokens to theme CSS files.
