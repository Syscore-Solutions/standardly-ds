# explorations — Sprint S1: Design-Direction Explorations

Time-boxed sprint workspace (**Fri 2026-07-10 → Mon 2026-07-13**, team call **Tue 2026-07-14**). Three design directions (**o1 / o2 / o3**) built on the locked token foundation, each delivering a styleguide, a starter component set rebuilt from a prototype dashboard screenshot, and a demo webpage — plus one combined presentation deck.

**This is not the Phase-2 library.** The real component system lands in root `src/` later; the winning direction from this sprint seeds it. Plan: [`roadmap.md` → Sprint S1](../roadmap.md); active tasks: [`tasks.md`](../tasks.md).

## Structure (agreed 2026-07-10)

One Vite + React app. One shared token pipeline. Direction folders mirror the Phase-2 component shape so promotion is mechanical.

```
explorations/
├── package.json          # ONE Vite + React app (scaffolded by S1-T01)
├── scripts/
│   └── build-tokens.mjs  # reads ../tokens.json → src/shared/primitives.css
├── src/
│   ├── shared/
│   │   └── primitives.css   # GENERATED from tokens.json — never hand-edit
│   ├── o1/                  # direction 1
│   │   ├── semantic.css     # this direction's semantic remap (references primitives only)
│   │   ├── components/      # Button/ Card/ Table/ … — Phase-2 per-component shape
│   │   ├── styleguide/      # route /o1/styleguide
│   │   └── demo/            # route /o1 — the re-created dashboard
│   ├── o2/                  # same shape
│   ├── o3/                  # same shape
│   └── main.tsx             # router: /o1 /o2 /o3 (+ /oN/styleguide)
├── presentation/            # combined HTML deck for the Tue 2026-07-14 call
└── README.md                # ← this file
```

## Rules

- **Primitives are fixed.** No new ramps, fonts, or scales. Each direction differentiates only via its `semantic.css` remap + component-level styling (radius, density, shadow, motion) and composition.
- `primitives.css` is **generated** — regenerate via `scripts/build-tokens.mjs` after any `tokens.json` change; strip Figma `$extensions` during generation.
- `semantic.css` files reference primitive variables only (mirrors the semantic→primitive-only rule in `tokens.json`).
- Components follow the Phase-2 per-component directory shape (`architecture.md §5.3`) minus stories/tests — this sprint has no Storybook.
- Accessibility floor still applies: WCAG 2.1 AA contrast, visible focus rings, status never by color alone.
- Each styleguide route contains: token visualization, component gallery (states/variants), direction rationale (name, references, principles), and brief per-component do/don'ts.

## Endgame

The demo is deployed to a shareable URL (Mon), presented Tue 2026-07-14. After the call, record the chosen direction + feedback in `memory.md`, then promote that direction's components toward root `src/` as Phase 2 begins. This folder is then archived or deleted — nothing in here is a permanent home.
