# Roadmap — Standardly Design System

The **long-term delivery plan**, in two layers:

1. **Phase backlogs** (bottom of this file) — the long-term record of everything that must eventually exist, grouped by the phases from [`architecture.md §11`](architecture.md#11-phased-roadmap): **P1 Tokens → P2 Components → P3 npm Package → P4 Automation**. Backlogs are *unscheduled* — goals, tasks, and milestones, not dates.
2. **Sprints** (top of this file) — the delivery unit: **weekly, carved just-in-time** (defined only 1–2 weeks ahead, because plans further out churn). Each sprint pulls tasks from the phase backlogs and/or adds sprint-specific tasks toward a concrete outcome.

> **Relationship to [`tasks.md`](tasks.md):** when a sprint becomes **active**, its entire task list is copied into `tasks.md` (the working surface, with tiered detail). Completion is recorded in **both**: check the task `[x]` here (historical record) and in `tasks.md` (working state). Daily changes are logged in [`changelog.md`](changelog.md).

---

## How to read this file

- **Sprints** are dated day-by-day (`### 2026-07-10 (Fri)`); only days that carry work are listed.
- **Phase backlogs** are flat task lists + milestone blocks — no dates until a task is pulled into a sprint.
- A backlog task pulled into a sprint **keeps its `P` ID** (it's listed in the sprint by ID); tasks invented for a sprint get `S` IDs.

### Status legend

| Marker | Meaning |
|---|---|
| `[ ]` | todo |
| `[~]` | in progress |
| `[x]` | done |
| `[!]` | blocked — append `· blocked by: <what>` |

### ID scheme

- **Backlog tasks:** `P{phase}-T{nn}` → `P1-T01`. **Sprint tasks:** `S{sprint}-T{nn}` → `S1-T01`. IDs are **stable and never reused**, even after completion or re-scheduling.
- **Milestones:** `P{phase}-M{nn}` → `P2-M01`.
- IDs are assigned in creation order, not schedule order (so reordering never renumbers anything).

---

# Sprints

## Sprint S1 — Design-Direction Explorations  · _active_  · Fri 2026-07-10 → Tue 2026-07-14  · **team call Tue 2026-07-14**

> 4-day sprint producing **3 design directions (o1/o2/o3)** on the locked token foundation. Each direction: styleguide + starter components (rebuilt from a prototype dashboard screenshot) + demo webpage; plus one combined HTML deck. Lives in [`explorations/`](explorations/README.md) — one Vite+React app, shared token pipeline, primitives fixed, per-direction `semantic.css` remap. Deployed to a shareable URL for the call. Owner tags: **(you)** = Naman, unmarked = Claude-driven with your review. Full task detail: [`tasks.md`](tasks.md).

### 2026-07-10 (Fri)

- [ ] **[S1-T01]** Scaffold `explorations/` workspace — Vite + React app, router (`/o1 /o2 /o3` + styleguide routes), `scripts/build-tokens.mjs` (tokens.json → `primitives.css`, strips Figma `$extensions`), shared page chrome, deployable static build.  · deps: —
- [ ] **[S1-T02]** **(you)** Pick the prototype dashboard page + drop screenshots → derive the starter-component inventory (~8–12 components) from it.  · deps: —
- [ ] **[S1-T03]** **(you, AI-assisted)** Direction research → define o1/o2/o3: name, 2–3 references, 3–5 principles each. Feeds each styleguide's rationale section.  · deps: —

### 2026-07-11 (Sat)

- [ ] **[S1-T04]** Author the three per-direction `semantic.css` remaps from the S1-T03 definitions (primitive refs only; AA contrast checked).  · deps: [S1-T03]
- [ ] **[S1-T05]** Build the full starter component set + styleguide route for **o1** (token viz + component gallery live; rationale/do-don'ts stubbed).  · deps: [S1-T02], [S1-T04]

### 2026-07-12 (Sun)

- [ ] **[S1-T06]** Re-create the dashboard screenshot as the **o1** demo page (`/o1`).  · deps: [S1-T05]
- [ ] **[S1-T07]** **o2** — components + styleguide + demo, adapted from o1 under the o2 remap + styling treatment.  · deps: [S1-T06]
- [ ] **[S1-T08]** **o3** — components + styleguide + demo, adapted from o1 under the o3 remap + styling treatment.  · deps: [S1-T06]

### 2026-07-13 (Mon)

- [ ] **[S1-T09]** Complete all 3 styleguides: direction rationale + per-component usage do/don'ts (brief).  · deps: [S1-T07], [S1-T08]
- [ ] **[S1-T10]** Polish + a11y pass across all 3 demos: AA contrast, focus rings, keyboard nav, status-not-by-color-alone.  · deps: [S1-T07], [S1-T08]
- [ ] **[S1-T11]** Deploy the static build to a shareable URL (Vercel/Netlify — pick at task time).  · deps: [S1-T10]
- [ ] **[S1-T12]** Build the combined HTML deck in `explorations/presentation/` (narrative: problem → token foundation → AI workflow → 3 directions → live demos → recommendation/next steps) + dry-run the full presentation flow.  · deps: [S1-T09], [S1-T11]

### 2026-07-14 (Tue) — team call

- [ ] **[S1-T13]** **(you)** Present deck + live demos on the team call; afterwards record the chosen direction + feedback in `memory.md`, check off this sprint, and define Sprint S2.  · deps: [S1-T12]

## Sprint S2 — (draft)  · week of 2026-07-15

> **To be defined after the S1 team call** — shaped by the chosen direction and feedback. Likely candidates to pull: hardening the winning direction, authoring `design.md` [P1-T01], starting the real Phase-2 component library in root `src/`.

---

# Phase backlogs (long-term)

## Phase 1 — Tokens & Docs  · _active phase_

> Focus: `tokens.json` (W3C DTCG), Figma/Tokens Studio sync, and the documentation set. Parked behind Sprint S1; pull into sprints from S2 onward.

- [ ] **[P1-T01]** Author `design.md` — the full design rationale (color philosophy, typography, spacing/radius logic, status-vs-confidence language, a11y reasoning). Highest-value doc gap; S1's direction rationale feeds it.
- [ ] **[P1-T02]** Define **motion/animation tokens** (durations, easings) — restrained per `brief.md §10`; AI-streaming is the one expressive moment.
- [ ] **[P1-T03]** Define **elevation/shadow tokens**.
- [ ] **[P1-T04]** Add **`semantic.border` and `semantic.space` roles** to `tokens.json` (currently semantic has only `color`/`typography`/`radius`); update README + Figma export mapping.
- [ ] **[P1-T05]** Define the **confidence-meter visual language + tokens** (continuous 0–100%, distinct from discrete status — `brief.md §7B`); signature element, no tokens yet.

## Phase 2 — Components & Storybook  · _planned_

> Focus: `src/components/` (React + TS + Radix), Storybook, Chromatic, a11y addon. The winning S1 direction seeds this phase.

- [ ] **[P2-M01]** Milestone: token→CSS pipeline chosen (Style Dictionary vs custom — `architecture.md §6.3`) and generating `src/styles/tokens.css` in the real `src/`.
- [ ] **[P2-M02]** Milestone: Storybook running with the a11y + designs addons; first components (from the S1 winner) promoted with stories.
- [ ] **[P2-M03]** Milestone: core component set complete (buttons, inputs, selects, dense tables, cards, badges/status pills, confidence meter, navigation, tabs, modals, toasts, file-upload, empty states — `brief.md §17`).

## Phase 3 — npm Package  · _planned_

> Focus: component build (tsup/Vite — `architecture.md §8.3`), private npm publish, semver + changelog discipline.

- [ ] **[P3-M01]** Milestone: `@syscore-solutions/standardly-ds` (name TBD) installable from a private registry with install docs.

## Phase 4 — Automation & Polish  · _planned_

> Focus: GitHub Actions CI (Chromatic on PR, publish on tag), white-label token layer (`--brand-logo` + `--primary` per-tenant hooks — `brief.md §14`), motion/elevation rollout across components.

- [ ] **[P4-M01]** Milestone: CI green — Chromatic on every PR, publish on tag.
- [ ] **[P4-M02]** Milestone: basic white-label tier working end-to-end on a demo tenant.
