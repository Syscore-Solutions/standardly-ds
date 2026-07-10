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

## Component inventory (S1-T02) — binding scope for all 3 directions

Source: the **prototype dashboard page** ("Welcome back" / project-based analysis dashboard), chosen by Naman 2026-07-10 and provided as a screenshot in chat. Screenshots to be dropped into [`reference/`](reference/) (see its README). Every direction re-creates this page with this same component set — nothing more — so the three stay comparable.

| # | Component | Where on the page | States needed |
|---|---|---|---|
| 1 | `TopNav` | Logo wordmark, nav links (Dashboard · Projects · My Usage · Admin ▾), AI-model selector, user greeting, avatar + sign-out icons | active link, hover, focus |
| 2 | `Button` | "Try Interactive Demo" (primary), "Create Your First Project" (tonal/brand-tinted) | primary / tonal / secondary · hover, active, focus, disabled · with-icon |
| 3 | `StatCard` | 4-up row: Project Documents, Analyses Completed, In Progress, Average Score | default; zero/empty value ("0", "N/A") and populated value |
| 4 | `Card` (titled panel) | "Quick Actions", "Recent Activity" containers | default |
| 5 | `IconTile` | Rounded colored icon squares in stat cards + quick actions | brand / success / info color variants |
| 6 | `ActionListItem` | Quick-action rows (Create Project, View Projects, Browse Standards, My Usage) | default, hover, focus (whole row clickable) |
| 7 | `EmptyState` | "No recent activity" in Recent Activity | default |
| 8 | `ActivityListItem` | Recent Activity rows when populated (analysis events + status + time) | default; with status pill |
| 9 | `StatusPill` | Status on activity rows; the compliance set Pass / Partial / Fail / Needs evidence (`brief.md §7A`) | all 4 statuses — each with a non-color icon signal |
| 10 | `ConfidenceMeter` | AI confidence on populated activity/score surfaces — **added beyond the screenshot**: signature element (`brief.md §7B`), continuous 0–100%, visually distinct from status | value variants (low/mid/high — same language, no stoplight) |
| 11 | `Callout` | "Getting Started with Project-Based Analysis" tinted onboarding panel with steps + CTA | brand-tinted |
| 12 | `ModelSelect` | "AI Models · Claude Sonnet 4.5" selector in the nav | static visual only (no menu) |

**Explicitly excluded** (visible or implied but out of a 4-day sprint's scope): Admin dropdown menu contents, avatar/user menu, sign-out flow, any page other than this dashboard, tables, modals, toasts, file-upload, tabs, form inputs. The demo may populate empty states with realistic compliance content (that is the "improved prototype" ask) but must not add new page structure.

## Directions (S1-T03)

### o1 — **Soft Precision**  · _defined 2026-07-10 (Claude, per Naman's reference; react & adjust)_

**Feel:** *Serious compliance infrastructure that feels like a well-lit studio, not a server room.*

**Reference set:**
1. **Provided reference screenshot** (Link AI copilot dashboard — in chat, to be dropped into `reference/`): the soft large-radius cards, pill controls, quiet muted-label hierarchy, generous padding, and one-accent discipline. We borrow its *design language only* — not its chat/copilot layout, and not its warm cream/orange (primitives are locked).
2. **Stripe dashboard** (`brief.md §2` north star): density discipline, restrained accent, information-rich-but-legible.
3. **Claude.ai app chrome**: warm-neutral surfaces achieving approachability without decorative color.

**Principles:**
1. **Soft geometry, serious structure.** Containers at `radius.xl`/`radius.2xl`, controls as full pills; underneath, an exact grid and strict alignment. Warmth comes from shape and space, never from loosening precision.
2. **Quiet canvas, white work surfaces.** App background `slate.50`; content on white cards with hairline `slate.200` borders; at most one soft ambient shadow level. No heavy elevation.
3. **Purple is a decision, not decoration.** Brand color only on the primary action, selected/active states, and focus rings. Everything else is slate.
4. **Comfortable density.** Generous padding with small, muted `label.sm` overlines — panels read calm at a glance and dense on inspection (progressive disclosure, `brief.md §3.1`).
5. **Status speaks softly, twice.** Statuses are tinted chips (`*.50` bg + `*.700` text) always paired with a shape/icon signal; AI confidence uses its own continuous-meter language (`brief.md §7`). Never stoplight saturation.

**Locked-constraint check:** purple stays primary ✓ · primitives untouched (warmth via slate.50 + radius, no cream/orange) ✓ · light theme only ✓ · AA contrast (all text pairs ≥ 4.5:1 — verified in the o1 `semantic.css`) ✓.

### o2 / o3 — to be defined

Pending Naman's direction research (S1-T03). Skeleton routes exist in the app; nothing else.

## Endgame

The demo is deployed to a shareable URL (Mon), presented Tue 2026-07-14. After the call, record the chosen direction + feedback in `memory.md`, then promote that direction's components toward root `src/` as Phase 2 begins. This folder is then archived or deleted — nothing in here is a permanent home.
