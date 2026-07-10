# Changelog — Standardly Design System

Daily work log. **One entry per day** (only days with changes), **newest first**, bullet points inside each entry. Reference [`roadmap.md`](roadmap.md)/[`tasks.md`](tasks.md) IDs (`S1-T01`, `P1-T02`, …) where a bullet maps to a planned task; generic bullets are fine otherwise. When making changes on a day that already has an entry, **append to that entry** — don't create a second one.

Entries before 2026-07-10 are backfilled from git history.

---

## 2026-07-10 (Fri)

- Added `brief.md` — full product + design-system brief for the Standardly platform and marketing site.
- Doc reorg: `readme.md` → `README.md`; `ARCHITECTURE.md`/`BRIEF.md`/`DESIGN.md` → lowercase (naming rule: convention files uppercase, everything else lowercase). Removed stale `graphify-out/` and `.gitignore`d it.
- Added the AI-guidance + planning doc suite: `AGENTS.md`, `CLAUDE.md`, `memory.md`, `roadmap.md`, `tasks.md`. `design.md` rebuilt as an explicit "not yet written" scaffold.
- Pre-scaffolded the Phase 2+ layout: `src/tokens/`, `src/components/`, `src/styles/`, `.storybook/` — placeholder READMEs only, no code.
- Drift fixes: `brief.md` rewritten to the locked **purple** primary (was "blue/indigo"), stack corrected to React + TS + Radix + CSS variables (was "React + Tailwind"), implemented fonts noted (Cal Sans + Geist); stale `tokens/primitive.json` permission removed from `.claude/settings.local.json`; `architecture.md §2.2` planned layout completed with all current files.
- Planned **Sprint S1 — Design-Direction Explorations** (S1-T01 … S1-T13, Fri 07-10 → Tue 07-14 team call): 3 directions (o1/o2/o3) on the locked tokens, each with styleguide + starter components + demo page, plus a combined HTML deck, deployed to a shareable URL. Defined the `explorations/` workspace (one Vite + React app, shared token pipeline, per-direction `semantic.css` remap).
- Planning model updated: roadmap = long-term phase backlogs + just-in-time weekly sprints; `tasks.md` = the entire active sprint with tiered detail (max-3 rule retired); introduced this `changelog.md` (backfilled).
- Added `index.html` — self-contained project dashboard at repo root (own "drawing set" visual identity, deliberately not the system's tokens). Seven sheets: sprint tasks, roadmap, architecture, changelog, tokens styleguide (parsed live from `tokens.json`), planned component inventory (honest 0/13 Phase-2 placeholder), and the o1/o2/o3 directions (switcher wired via `--dir-*` variables, remaps pending S1-T03). Fetches the live planning docs when served over HTTP and falls back to an embedded snapshot (dated 2026-07-10) on `file://`; regenerate the snapshot by asking Claude to re-sync it from the source files.

## 2026-07-07 (Mon)

- Added `fontSize` primitive tokens (`xs`–`6xl`).
- Implemented the **semantic token layer**: `semantic.color` (bg/text/border/action/feedback), `semantic.typography` composites (H1–H6, body, label, caption), `semantic.radius` roles; README updated to match.
- Consolidated token structure and enhanced typography definitions in README + `tokens.json`; assorted token value updates.
- Tokens Studio plugin sync re-pointed at **`main`** (retiring the `tokens-studio` branch flow).

## 2026-07-06 (Sun)

- **Consolidated the split `tokens/*.json` files into a single root `tokens.json`** (PR #1 merged).
- Added primitive tokens: border-width, opacity, `fontFamily` (Cal Sans / Geist) + `fontWeight`, `lineHeight` (tight/normal/relaxed), `letterSpacing` (none/wide/wider).
- Normalized property order (`$value` before `$type`) and renamed sets for consistency.
- Added `.gitignore` (macOS cruft); regenerated graphify knowledge-graph output (later removed on 07-10).

## 2026-07-03 (Thu)

- **Reset: cleared the repo to restart the design system from scratch** (the June prototype era ends here).
- Added the new design tokens in **Tokens Studio / W3C DTCG** format; added border-radius primitives.
- README documenting token structure + Figma sync workflow.

## 2026-06-24 (Wed)

- Graphify knowledge-graph update.

## 2026-06-22 (Mon)

- Added a library build for GitHub-based package installation (prototype-era packaging).

## 2026-06-21 (Sat)

- Updated graph structure; populated semantic + AST cache files.

## 2026-06-19 (Fri)

- Added graphify output artifacts and a Graphify knowledge-retrieval protocol to `agents.md`.

## 2026-06-17 (Wed)

- Repo audit: depersonalized configurations, standardized filenames to lowercase; added the first doc suite (`agents.md`, `architecture.md`, `changelog.md`, `claude.md`, `design.md`, `memory.md`, `plan.md`, `setup.md`, `tasks.md`).

## 2026-06-16 (Tue)

- Added a comprehensive README.

## 2026-06-15 (Mon)

- First prototype build: Storybook, Style Dictionary token pipeline (`sd.config.js`), split multi-set `tokens/` (light + dark), `Accordion` + `Button` components, Vite/TS tooling.

## 2026-06-08 (Mon)

- Initial commit: `.gitattributes`, `poc-plan.md`.
