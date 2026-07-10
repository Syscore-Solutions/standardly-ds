# Active Sprint — Sprint S1: Design-Direction Explorations

The working surface for the **entire active sprint**, pulled from [`roadmap.md`](roadmap.md) when the sprint starts. Sprint S1 runs **Fri 2026-07-10 → Tue 2026-07-14** (team call Tuesday). Workspace: [`explorations/`](explorations/README.md).

> **The rules**
> - **This file holds the whole active sprint** — every task, with **tiered detail**: tasks in focus (in progress / next up) carry the full template; the rest stay one-liners until promoted into focus.
> - **IDs come from the roadmap** (`S1-T{nn}` / `P{n}-T{nn}`). Don't invent IDs here.
> - **Completion is recorded twice**: check `[x]` here *and* in `roadmap.md`; log the change in [`changelog.md`](changelog.md) under today's entry.
> - **Between sprints** this file is emptied and refilled from the next sprint's roadmap section.

### Status legend
`[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked (append `· blocked by: …`)

---

## In focus (full detail)

### [S1-T01] Scaffold the `explorations/` sprint workspace

- **Status:** todo
- **Roadmap:** S1 · 2026-07-10 (Fri)
- **Links:** [`explorations/README.md`](explorations/README.md) (agreed structure), [`tokens.json`](tokens.json), [`architecture.md §5.3`](architecture.md) (component dir shape), [`architecture.md §6.2`](architecture.md) (CSS variable shape)
- **Depends on:** —

**Context**
Sprint S1 needs a running workspace before any direction work can land. One Vite + React app hosts all three directions (o1/o2/o3) so the token pipeline is built once and the demo provably runs off `tokens.json` — the whole point of the sprint is demonstrating that AI-driven token→component workflow. Direction folders mirror the Phase-2 component shape so the winner promotes to root `src/` cheaply.

**Sub-tasks**
- [ ] `npm create vite` (React + TS) inside `explorations/`; add react-router
- [ ] Write `scripts/build-tokens.mjs`: parse `../tokens.json` → emit `src/shared/primitives.css` (custom properties; strip `com.figma.*` `$extensions`; resolve set-name-less refs)
  - [ ] Wire as `npm run build:tokens`, run automatically before `dev`/`build`
- [ ] Create `src/o1|o2|o3/` skeletons: `semantic.css` (empty remap stub), `components/`, `styleguide/`, `demo/`
- [ ] Router: `/` (sprint index linking all directions), `/oN` (demo), `/oN/styleguide`
- [ ] Shared page chrome (direction switcher nav) styled from primitives only
- [ ] Confirm `npm run build` emits a static, deployable bundle
- [ ] Update `.gitignore` (`node_modules/`, `dist/`) — done 2026-07-10 pre-emptively

**Done when** (acceptance criteria)
- [ ] `npm run dev` serves all six routes with the direction switcher working
- [ ] `primitives.css` is regenerated from `tokens.json` by the script — no hand-written values, no Figma extension residue
- [ ] Static `npm run build` output works when served standalone
- [ ] Committed on a `feat/explorations-scaffold` branch (not directly to `main`)

**Notes / decisions**
- 2026-07-10 — Structure agreed with Naman: one app, 3 direction folders, shared pipeline (over 3 standalone apps or building in root `src/`).

### [S1-T02] Pick the prototype dashboard + derive the component inventory

- **Status:** todo · **(you)** own the pick; Claude derives the inventory
- **Roadmap:** S1 · 2026-07-10 (Fri)
- **Links:** screenshots (to be provided — drop into the chat or `explorations/reference/`), [`brief.md §12`](brief.md) (signature screens)
- **Depends on:** —

**Context**
The starter component set for all three directions is defined by one real prototype dashboard page, re-created in each direction. Everything downstream (S1-T05 onward) is blocked on knowing which page and which components. Naman picks the page and provides screenshots; from them we extract a fixed inventory so all three directions build the *same* set and stay comparable.

**Sub-tasks**
- [ ] **(you)** Choose the dashboard page from the current prototype
- [ ] **(you)** Provide screenshot(s) — full page plus any hover/expanded states that matter
- [ ] Derive the component inventory (~8–12: expect buttons, cards, table, badges/status pills, nav/sidebar, tabs, inputs, progress/confidence meter, empty state)
- [ ] Record the inventory list in `explorations/README.md` as the binding scope for all 3 directions

**Done when** (acceptance criteria)
- [ ] Screenshots stored in `explorations/reference/`
- [ ] A written inventory (component name + where it appears on the page + states needed) is committed, and Naman has confirmed it
- [ ] Anything visible-but-out-of-scope is explicitly listed as excluded (scope guard for a 4-day sprint)

**Notes / decisions**
- 2026-07-10 — Source is screenshots only (no Figma file, no product-repo access), per Naman.

### [S1-T03] Define the three design directions (o1 / o2 / o3)

- **Status:** todo · **(you)**-led research, AI-assisted
- **Roadmap:** S1 · 2026-07-10 (Fri)
- **Links:** [`brief.md`](brief.md) (governing principles §3, emotional jobs §5, brand direction §6), [`memory.md §4`](memory.md) (locked: purple primary, light-only, AA)
- **Depends on:** —

**Context**
The three directions are the sprint's creative core and are currently undefined. Naman is researching them; each needs to be sharp enough that a `semantic.css` remap + component styling treatment can be authored from it (S1-T04). All three must respect the locked constraints: purple stays the brand primary, primitives are fixed, light theme only, WCAG AA — differentiation comes from semantic mapping, density, radius, shadow, motion, and composition.

**Sub-tasks**
- [ ] **(you)** Research references (products, sites, systems) — collect 2–3 per candidate direction
- [ ] (AI, on request) Propose candidate directions grounded in `brief.md` (e.g., variations along the Stripe-register ↔ warm-approachable ↔ data-dense axes) to react against
- [ ] Name each direction and write 3–5 principles + a one-line "feel" statement per direction
- [ ] Sanity-check each against the locked constraints (purple primary, fixed primitives, AA) — flag anything a direction wants that tokens can't express yet
- [ ] Write the definitions into `explorations/README.md` (and later each styleguide's rationale section)

**Done when** (acceptance criteria)
- [ ] Three named directions, each with references + principles, committed
- [ ] Each is distinct enough that a reviewer could match an unlabeled screenshot to its direction
- [ ] None requires violating a locked decision (or the exception is explicitly recorded in `memory.md` with Naman's sign-off)

**Notes / decisions**
- 2026-07-10 — Directions intentionally undefined at sprint start; research is Naman's, target completion Fri evening so S1-T04 (semantic remaps) can start Saturday.

---

## Rest of sprint (one-liners — promote into focus when their day arrives)

**Sat 2026-07-11**
- [ ] **[S1-T04]** Author the three per-direction `semantic.css` remaps (primitive refs only; AA checked)  · deps: [S1-T03]
- [ ] **[S1-T05]** Full starter component set + styleguide route for **o1**  · deps: [S1-T02], [S1-T04]

**Sun 2026-07-12**
- [ ] **[S1-T06]** Re-create the dashboard as the **o1** demo page  · deps: [S1-T05]
- [ ] **[S1-T07]** **o2** — components + styleguide + demo, adapted from o1  · deps: [S1-T06]
- [ ] **[S1-T08]** **o3** — components + styleguide + demo, adapted from o1  · deps: [S1-T06]

**Mon 2026-07-13**
- [ ] **[S1-T09]** Complete styleguides: rationale + brief do/don'ts for all 3  · deps: [S1-T07], [S1-T08]
- [ ] **[S1-T10]** Polish + a11y pass across all 3 demos  · deps: [S1-T07], [S1-T08]
- [ ] **[S1-T11]** Deploy static build to a shareable URL (Vercel/Netlify)  · deps: [S1-T10]
- [ ] **[S1-T12]** Combined HTML deck in `explorations/presentation/` + dry run  · deps: [S1-T09], [S1-T11]

**Tue 2026-07-14 — team call**
- [ ] **[S1-T13]** **(you)** Present; record chosen direction + feedback in `memory.md`; define Sprint S2  · deps: [S1-T12]

---

## Task template

Use this block when promoting a one-liner into focus. Keep every field — a task must carry enough context to be picked up cold.

```markdown
### [S?-T??] Task title

- **Status:** todo
- **Roadmap:** S? · <date it maps to in roadmap.md>
- **Links:** <files / doc sections / Figma / external refs this touches>
- **Depends on:** <task IDs that must finish first, or "—">

**Context**
<2–4 sentences: why this task exists, what it unblocks.>

**Sub-tasks**
- [ ] <granular, checkable step>

**Done when** (acceptance criteria)
- [ ] <objective, verifiable condition>

**Notes / decisions**
- <running log, dated>
```
