# AI Working Memory — standardly-ds

Durable, AI-facing memory for this repo. Read this first. It records **what is actually true right now**, the **decisions that are locked**, the **drift between docs and reality**, and the **open questions** — the things you cannot reliably infer from the files alone. When any of these change, update this file.

_Last verified against the tree: 2026-07-10 evening (HEAD `dcdc906`)._

---

## 1. What this repo is (in one breath)

`standardly-ds` is the **design system** for **Standardly**, an agentic **compliance-intelligence platform** (automates building-certification review — WELL/LEED/BREEAM — via a RAG pipeline that scores uploaded evidence; a human reviewer makes the final call). The repo is the **single source of truth for design tokens**, authored in **W3C DTCG** format and synced to **Figma** via the **Tokens Studio** plugin.

It is at **Phase 1: tokens only.** There is **no code** — no `package.json`, no build step, no components, no Storybook, no npm package. `src/` and `.storybook/` exist but only as **placeholder scaffolds** (a README in each saying what lands there in Phase 2+ — added 2026-07-10). Anything describing actual tooling in those directories is *planned* architecture, not reality.

## 2. Repository map (current, post-reorg)

**Flat doc layout — every doc at repo root, no `docs/`/`ai/` folders** (deliberate, to avoid path ambiguity for AI + humans). Naming rule: convention files uppercase (`README.md`, `AGENTS.md`, `CLAUDE.md`), everything else lowercase. The Phase 2+ code dirs exist only as **placeholder scaffolds** (READMEs, no code).

```
standardly-ds/
├── tokens.json      # THE canonical token source. W3C DTCG. Root because Tokens Studio syncs this path. Do not move.
├── README.md        # Token-structure summary + Figma sync quick-start. Repo entry point.
├── index.html       # Self-contained project dashboard (own visual identity, deliberately NOT the system tokens).
│                    # Fetches tasks/roadmap/changelog/tokens live over HTTP; embedded snapshot fallback on file://.
├── AGENTS.md        # Agent guide (auto-discovered). Thin — points here.
├── CLAUDE.md        # Claude Code pointer → AGENTS.md.
├── memory.md        # ← this file. Durable AI working memory.
├── brief.md         # Product + design brief (personas, brand, signature screens).
├── architecture.md  # Technical architecture. NOTE: ~2/3 is planned Phase 2–4, not built.
├── design.md        # Design rationale. SCAFFOLD ONLY — not yet written.
├── roadmap.md       # Long-term plan: phase backlogs (P1–P4) + just-in-time weekly sprints.
├── tasks.md         # Working surface: the ENTIRE active sprint, tiered detail.
├── changelog.md     # Daily work log — one datestamped entry per day, newest first.
├── src/             # PLACEHOLDER SCAFFOLD (2026-07-10) — READMEs only, no code until Phase 2
│   ├── tokens/      #   → future token transform scripts (architecture §6)
│   ├── components/  #   → future React + TS + Radix components (architecture §5)
│   └── styles/      #   → future GENERATED tokens.css (architecture §6.2)
├── .storybook/      # PLACEHOLDER SCAFFOLD — future Storybook config (architecture §7)
└── explorations/    # SPRINT S1 workspace (time-boxed, 2026-07-10 → 07-14): 3 design directions
                     # o1/o2/o3 — one Vite+React app, NOT the Phase-2 library. See explorations/README.md.
```

**Current focus (as of 2026-07-10): Sprint S1** — 4 days to a team call on **Tue 2026-07-14**. Three design directions on the locked tokens (per-direction styleguide + starter components from a dashboard screenshot + demo page), one combined HTML deck, deployed to a shareable URL. Full plan in `roadmap.md → Sprint S1`; the 3 active tasks are in `tasks.md`. Remaining P1 work (design.md, motion/elevation tokens) is parked until after the call.

**S1 state after 2026-07-10 (autonomous session while Naman AFK):** direction **o1 — "Soft Precision"** is built end-to-end (S1-T01 ✅, T02/T03 partial, T04 o1-only, T05 ✅, T06 ✅): scaffold + token pipeline + inventory + o1 remap + 12 components + `/o1/styleguide` + `/o1` demo, all committed in 7 chunks on **`feat/project-dashboard`** (Naman's pre-AFK call — overrides the planned `feat/explorations-scaffold` branch). o2/o3 are router placeholders awaiting Naman's direction research. Same evening, the root `index.html` dashboard was rewired to o1: the SD-07 o1 card now carries DEMO/STYLEGUIDE links into the explorations app with a localhost probe (`:5173`/`:4173`), and `npm run demo` in `explorations/` is the one-command pre-call launch (build + preview + open `/o1`). The dashboard's old direction preview swatches and SYS/O1/O2/O3 rail switcher were then **removed** (Naman's call — redundant once the real demo is one click away; comparison happens in the explorations app). Next up: o2/o3 definitions → S1-T07/T08, then polish/deploy/deck (T09–T12).

`graphify-out/` was **removed** and `.gitignore`d (stale auto-generated code-graph output that indexed an old file layout — see §5).

## 3. Token architecture (the real, current state)

- Two token sets in `tokens.json`, ordered in `$metadata.tokenSetOrder`: **`primitive`** (raw values, no references) → **`semantic`** (role aliases → primitives only).
- `$themes` is intentionally `[]`. **Single light theme. Dark mode is out of scope for v1.**
- **`semantic` currently contains only `color`, `typography`, `radius`.** That's it.
- Reference syntax omits the set name: `{color.slate.900}`, never `{primitive.color.slate.900}`.
- 90 Figma `$extensions` blocks (`com.figma.scopes`, `com.figma.hiddenFromPublishing`) live on tokens — **strip these when building CSS**; they're Figma-layer metadata with no W3C meaning.
- Semantic → primitive is the **only** allowed reference direction. No semantic→semantic, no primitive→anything.
- Scale abbreviations are **binding**: `2xs xs sm md lg xl 2xl 3xl …`. Never `s/m/l/small/medium/large`.
- Color ramps: `neutral` (white/black only), `slate` (neutral UI, ~90% of UI), `purple` (brand/primary), `mint` (success), `red` (error), `yellow` (warning), `blue` (info/links), `teal` + `pink` (reserved, unused). Each colored ramp is `50`–`950` (11 steps).

## 4. Locked decisions (do not re-litigate without the user)

- **Brand primary is `purple`, not blue/indigo.** ✅ Confirmed by the user 2026-07-10. `tokens.json` is the source of truth: `action.primary`→`purple.600`, `border.focus`→`purple.500`, `text.brand`→`purple.700`, `bg.brand`→`purple.50`. `brief.md` was rewritten 2026-07-10 to match (§6, §9, §15, §16, quick-ref) — the original "deep blue or indigo" recommendation survives only as dated history notes. The full color rationale still belongs in `design.md` when it's authored.
- **W3C DTCG** is the canonical token format (over Tokens Studio native). — `architecture.md §12.1`
- **Bidirectional Figma↔GitHub sync** against the **`main`** branch (an earlier `tokens-studio` branch was retired). — `architecture.md §12.2`
- **Tokens delivered as CSS custom properties** (not a Tailwind preset, not JS constants) — universal + enables future white-label overrides. — `architecture.md §12.3`
- **Planned component stack: React + TypeScript + Radix UI, CSS variables.** Explicitly **no Tailwind in the library**, **no shadcn/ui** (philosophy only), **no CSS-in-JS**. — `architecture.md §5.1, §12.4`
- **Single package (monorepo-lite)**, **semver** versioning. — `architecture.md §12.5, §12.6`
- **Accessibility target: WCAG 2.1 AA minimum**, AAA where feasible. Status never by color alone (needs icon/shape). Focus rings mandatory.

## 5. Known drift / gotchas (verify before trusting a doc)

- **`README.md` claimed `semantic.border` and `semantic.space` tokens that do not exist.** Fixed 2026-07-10 (replaced with a "not yet defined" note). If you see references to those semantic roles elsewhere, they're aspirational.
- **`architecture.md §4.3` listed `semantic.space.*` as a Figma export target** — corrected to `primitive.space.*` (semantic space doesn't exist yet).
- **`architecture.md` is mostly forward-looking.** Sections 5–8 (components, CSS build pipeline, Storybook/Chromatic, npm package) describe **planned** Phase 2–4 work. A "Current vs Planned" banner was added at the top. Do not assume any of that tooling exists.
- **`design.md` was a 0-byte file** despite being the routed home for all design rationale. Replaced with a scaffold + "not yet written" status. The actual rationale still needs authoring.
- **`graphify-out/` was stale and misleading** — its `manifest.json` indexed `tokens/primitive.json` + `tokens/semantic.json` (a split layout consolidated into a single `tokens.json`) and centered on the retired `tokens-studio` branch. Removed from the tree and `.gitignore`d. Regenerate on demand with `graphify update .` if ever wanted; don't commit it.
- **Phase 2 dirs pre-scaffolded (2026-07-10):** `src/tokens/`, `src/components/`, `src/styles/`, `.storybook/` each contain a single placeholder `README.md` and nothing else. If a doc says "no `src/` exists," it predates this scaffold. Still true: no `package.json`, no tsconfig, no build, no components. Also fixed the same day: `.claude/settings.local.json` had a stale permission for `tokens/primitive.json` (old split layout) — removed; `brief.md` blue/indigo + "React + Tailwind" + Inter language rewritten in place to match the locked purple/Radix/Cal Sans+Geist decisions (dated notes kept inline).
- **`explorations/` app facts (2026-07-10, bite if ignored):**
  - `src/shared/primitives.css` is **generated and `.gitignore`d** — regenerated automatically by `predev`/`prebuild` (`scripts/build-tokens.mjs`). A fresh clone must `npm install` then any `npm run dev/build`; never hand-edit or commit it.
  - Direction remaps are **scoped to a wrapper class** (`.dir-o1` in `src/o1/semantic.css`), not `:root`, so all three directions can coexist in one SPA. o2/o3 must follow the same pattern.
  - `@fontsource/geist-sans` registers the family as **"Geist Sans"**, not "Geist" (the token value). The build script appends documented fallback stacks to `fontFamily` tokens — that's the one place non-token values enter the generated CSS. Cal Sans comes from the `cal-sans` npm package (`import 'cal-sans/index.css'`).
  - o1's AA reality check: canonical `feedback.*.text` → `*.700` pairs **fail 4.5:1 for small chip text** (mint.700/mint.50 = 3.83, blue.700/blue.50 = 3.02, yellow.800/yellow.50 = 3.50). o1 uses mint.800 / red.800 / blue.900 / yellow.900 on the 50 bgs (ratios in the `semantic.css` header). Also `slate.500` on white = 4.49 — large-text/icons only; `slate.400` = 2.63, never text. **Worth folding into `design.md`/tokens later — the canonical semantic feedback pairs have the same problem.**
  - Icons: `lucide-react`. Status icons are shape-distinct (CircleCheck / CircleMinus / CircleX / CircleDashed) per the never-color-alone rule.
  - The `/o1` demo has a **demo-only "New user / Active project" toggle** (not product UI) to flip empty vs populated states on the team call.
- **Filename convention:** as of 2026-07-10 all docs live at repo **root** (no `ai/`/`docs/` folders). Convention files are **uppercase** (`README.md`, `AGENTS.md`, `CLAUDE.md`); everything else is **lowercase** (`architecture.md`, `brief.md`, `design.md`, `memory.md`, `roadmap.md`, `tasks.md`, `tokens.json`). The readme was flipped from `readme.md` → `README.md`. Keep new files consistent with this rule.

## 6. Conventions that bite if ignored

- **Commits:** Conventional Commits. Types: `feat|fix|chore|docs|refactor|style|test`. Scopes: `tokens|components|styles|storybook|build|docs|release`. — `architecture.md §9.3`
- **Branches:** `type/kebab-description`. Never commit directly to `main` for feature work.
- **Semver discipline:** token rename/delete or CSS-var rename = **MAJOR**. New token/component/variant = **MINOR**. Value/bug/a11y fix = **PATCH**. — `architecture.md §8.5`
- **When adding tokens:** decide layer first (primitive vs semantic), follow scale abbreviations exactly, semantic `$value` must always be a `{reference}` (never a raw value), omit set-name in refs, verify AA contrast manually, update `README.md` if adding a new category, then push to `main` and Pull from GitHub in Tokens Studio.
- **The doc split rule:** "why we chose value X" → `design.md`. "how the system is structured / how to do X" → `architecture.md`. Product/persona/brand → `brief.md`. Quick-start/token-structure → `README.md`.

## 7. Open questions (unresolved — ask the user, don't guess)

- **`design.md` is unwritten.** All color/typography/spacing rationale is undocumented. Highest-value doc gap.
- **Motion and elevation/shadow tokens are named as planned but not defined** in `tokens.json` (`architecture.md §10`). BRIEF §10 wants restrained motion with AI-streaming as the one expressive moment.
- **Confidence-meter visual language** (BRIEF §7B — the continuous 0–100% AI confidence scale) has **no tokens yet** and is a signature element.
- **White-labeling** (BRIEF §14): planned basic tier = per-tenant `--brand-logo` + `--primary` override only. Token architecture should expose that hook cleanly; not built.
- **Package name** `@syscore-solutions/standardly-ds` is marked TBD; private registry not chosen.
- **Sprint S1 inputs still pending from Naman (updated 2026-07-10 evening):** (a) ~~which prototype dashboard page~~ — picked (the "Welcome back" dashboard, via chat screenshot); still owed: the **screenshot files** into `explorations/reference/` (see its README) + confirmation of the 12-component inventory; (b) **o2/o3 direction definitions** from his research (o1 was defined by Claude from Naman's Link AI reference — needs his react/adjust). Deploy target still unpicked — decide at S1-T11. **Cloudflare Pages** entered the running 2026-07-10 (Naman asked about readiness): the repo-root dashboard is zero-config static (its four fetched files are all tracked), but (1) `main` has no `index.html` until `feat/project-dashboard` merges, (2) deploying the repo root makes **every tracked doc public** — memory.md/brief.md/architecture.md included — so gate with Cloudflare Access or accept knowingly, (3) the explorations app needs its own build step (`explorations/` root, output `dist/`; `public/_redirects` for SPA fallback already exists).
- **Sprint S1 constraint decisions (locked with Naman 2026-07-10):** directions differ by **semantic remap + component styling only** (primitives fixed, purple stays primary); one shared Vite app (not 3 standalone apps); deck is an HTML page in `explorations/presentation/`; demos shown via deployed URL; styleguides include token viz + component gallery + rationale + brief do/don'ts.

## 8. Pointers

- Product/brand brief → `brief.md`
- Technical architecture & conventions → `architecture.md`
- Design rationale (unwritten) → `design.md`
- **Long-term plan (phase backlogs + weekly sprints)** → `roadmap.md`
- **Active work (the whole current sprint, tiered detail)** → `tasks.md`
- **Daily work log** → `changelog.md`
- Token quick-start → `README.md`
- Canonical token values → `tokens.json`

### Planning-file contract (roadmap.md ↔ tasks.md ↔ changelog.md) — revised 2026-07-10

- `roadmap.md` is **long-term focused**, two layers: **phase backlogs** (P1–P4 from `architecture.md §11` — unscheduled goals/tasks/milestones, IDs `P{n}-T{nn}` / `P{n}-M{nn}`) and **weekly sprints** (`S{n}`, IDs `S{n}-T{nn}`) carved **just-in-time**, only 1–2 weeks ahead. Sprints pull backlog tasks (which keep their `P` IDs) and add sprint-specific `S` tasks. Sprint days are dated; backlogs are not.
- When a sprint becomes **active**, its **entire task list is copied into `tasks.md`** with **tiered detail**: in-focus tasks get the full template (context, sub-tasks, acceptance criteria); the rest stay one-liners until promoted. The old "max 3 tasks" rule is **retired**. Between sprints, `tasks.md` is emptied and refilled.
- Completion is recorded in **both** files (`[x]` in roadmap = history, in tasks.md = working state).
- `changelog.md` is the **daily work log**: one entry per day (newest first, bullets, reference task IDs where useful; append to today's entry rather than creating a second one). Backfilled to 2026-06-08 from git history. **Update it whenever you make changes.**
- Sprint S1 (13 tasks, Fri 07-10 → Tue 07-14) is the first sprint under this contract; Sprint S2 is a draft to be defined after the 07-14 call.
