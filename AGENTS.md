# AGENTS.md — standardly-ds

Guide for AI agents working in this repo. This root file is intentionally thin so it's auto-discovered; the **full working context lives in [`memory.md`](memory.md) — read that first.**

## What this repo is

The **design system** for **Standardly**, an agentic compliance-intelligence platform (automated building-certification review via a RAG pipeline; humans make the final call). This repo is the **single source of truth for design tokens**, authored in **W3C DTCG** format and synced to Figma via the **Tokens Studio** plugin.

**Phase 1: tokens only** — no library code, no npm package. `src/` and `.storybook/` exist but are **placeholder scaffolds only** (a README each, marking where Phase 2+ work lands); anything in `architecture.md` describing actual tooling there is *planned* Phase 2–4 work, not current reality. The one place code does live is **`explorations/`** — a time-boxed **Sprint S1** workspace (3 design-direction demos, o1/o2/o3, for the 2026-07-14 team call). It is throwaway exploration, **not** the Phase-2 library — see [`explorations/README.md`](explorations/README.md) and [`roadmap.md`](roadmap.md).

## Orient yourself in this order

1. **[`memory.md`](memory.md)** — current state, locked decisions, known doc drift, open questions. **Start here.**
2. **[`tokens.json`](tokens.json)** — the canonical token values (`primitive` → `semantic`).
3. **[`README.md`](README.md)** — token-structure summary + Figma sync quick-start.
4. **[`architecture.md`](architecture.md)** — how it's built + conventions. *Read the "Current vs Planned" banner at the top.*
5. **[`brief.md`](brief.md)** — product, personas, brand direction.
6. **[`design.md`](design.md)** — design rationale. *Scaffold only — not yet written.*
7. **[`roadmap.md`](roadmap.md)** — long-term plan: phase backlogs (P1–P4, unscheduled) + just-in-time **weekly sprints** (the delivery unit).
8. **[`tasks.md`](tasks.md)** — working surface: the **entire active sprint**, tiered detail (in-focus tasks fully expanded, the rest one-liners). IDs trace back to the roadmap.
9. **[`changelog.md`](changelog.md)** — daily work log: one datestamped entry per day, newest first.

## Hard rules (the ones that bite)

- **`tokens.json` is canonical and lives at repo root — do not move it** (Tokens Studio syncs that path).
- **Single light theme only.** `$themes` is `[]`. **Do not add dark mode.**
- **`semantic` currently contains only `color`, `typography`, `radius`.** `semantic.border` / `semantic.space` do **not** exist yet — reference primitive `border`/`space` directly.
- **Brand primary is `purple`** (locked). `brief.md` was rewritten 2026-07-10 to match; if any doc still says "blue/indigo" outside a dated history note, it's stale — `tokens.json` wins.
- **Semantic tokens must reference primitives only**, using set-name-less refs (`{color.slate.900}`). Never semantic→semantic; never a raw value in a semantic token.
- **Scale names are binding:** `2xs xs sm md lg xl 2xl 3xl …`. Never `s/m/l`.
- **Strip Figma `$extensions`** (`com.figma.*`) when building CSS — they carry no W3C meaning.
- **Commits:** Conventional Commits (`feat|fix|chore|docs|refactor|style|test`, scopes `tokens|components|styles|storybook|build|docs|release`). Feature work branches off `main`; don't commit features directly to `main`.
- **When you make changes, log them in [`changelog.md`](changelog.md)** under today's entry (append — never a second entry for the same day; reference task IDs where they apply).
- **When you discover something non-obvious or a doc is wrong, update [`memory.md`](memory.md).** It's the living record.

## Do not

- Invent design rationale in `design.md` — it's genuinely unwritten; ask the user.
- Assume any Phase 2–4 tooling (components/Storybook/npm/CI) exists.
- Re-commit `graphify-out/` — it's regenerable, `.gitignore`d output.
