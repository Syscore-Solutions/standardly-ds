# Standardly — Design System Brief

A brief for building a unified design system spanning the Standardly **product (web app)** and **marketing site**. The system must read as *serious compliance infrastructure* while remaining warm and approachable, and must scale across multiple user personas and white-labeled tenants.

---

## 1\. What Standardly is

Standardly is an agentic compliance-intelligence platform that automates building-certification reviews (WELL, LEED, BREEAM, and arbitrary future standards). Consultants upload unstructured evidence; an AI/RAG pipeline analyzes it against requirement criteria and returns compliance scores, reasoning, citations, and gap recommendations; human reviewers make the final call. The strategic positioning is **compliance infrastructure** — a durable structured-knowledge layer, not a disposable workflow tool. The design must signal that this is foundational, trustworthy, technically serious software.

The product is a mature MVP: React SPA, Python API, PostgreSQL, AWS, RAG pipeline live. This is **not** a greenfield concept exercise — design choices should be implementable now.

---

## 2\. North-star inspiration

- **Primary reference: Stripe** — for both product and marketing. The reasons: information-rich screens that stay legible, precise grids, a restrained palette anchored by one confident primary, and an overall impression of "we are serious infrastructure."  
- **Component philosophy: shadcn/ui** — we like the *philosophy* (composable, accessible, restrained primitives), **not** the brand and **not** the library itself. We are **not** using shadcn/ui in the codebase. Build bespoke components on React \+ TypeScript \+ Radix UI, styled with CSS variables (no Tailwind in the library — see `architecture.md §12.4`); borrow the composition/accessibility patterns, not the package.  
- **Explicitly out of scope:** Apple (no photography-led, airy marketing — we are data-dense). The existing pitch deck (purple-on-charcoal) — **ignore it entirely**; it was a throwaway draft and carries no brand equity.

---

## 3\. Governing principles

1. **Information-rich, never sparse — but never cluttered.** Resolve the density-vs-calm tension the Stripe way: generous spatial rhythm, strong hierarchy, and progressive disclosure are what *make* density legible. Reviewers see everything they need; consultants are guided through the same underlying system step by step.  
2. **The human reviewer is the protagonist; AI is the assistant.** Every AI output (scores, reasoning, citations) is visually subordinate to the human decision. AI is advisory and clearly framed as such — it never looks like it is making the certification call.  
3. **Warm, approachable infrastructure — not cold API-doc.** The primary persona is consultants, not developers. Signal rigor and seriousness through precision and structure, but keep the temperature human. Avoid going so "systems/technical" that a non-engineer feels alienated.  
4. **Restraint with color.** Near-neutral gray foundation, one confident primary used sparingly for actions and brand moments. Color earns its place; it is not decoration.  
5. **Accessibility-first.** Target **WCAG 2.1 AA** from the foundations up. Status must never rely on color alone (colorblind-safe). Contrast, focus states, and keyboard navigation are non-negotiable.  
6. **Light by default.** The product ships light-first (reviewers work in it for hours). Design tokens should leave room for a future dark mode but do not optimize for it now.

---

## 4\. Personas (in priority order)

1. **Consultants (primary).** Upload evidence, request analysis, refine submissions. Need guidance, clarity, and confidence that they're submitting the right things. Design optimizes for *them*.  
2. **Reviewers (secondary).** Internal/expert reviewers (Reviewer Services segment) who examine AI analysis alongside source evidence and approve/reject. Need information density, source traceability, and efficient scanning.  
3. **Certification-body admins (third).** Manage standards, requirements, versions.  
4. **Investors (last).** Encounter the always-on demo and marketing site. Served by the same system, not a separate aesthetic.

---

## 5\. Emotional job (ranked, no ties)

1. **Intelligent** — feels modern, capable, alive. With gradients minimized, *motion* and *precision* carry this.  
2. **Trustworthy** — audit-grade, defensible, institutional.  
3. **Fast** — efficient, low-friction, responsive.

---

## 6\. Brand direction

- **Primary color: the locked `purple` ramp.** A deep, trustworthy purple that reads serious, institutional, technical (the Stripe / Linear / gov-tech register) rather than consumer/creative. Implemented in `tokens.json` — the source of truth: `action.primary` → `purple.600`, `border.focus` → `purple.500`, `text.brand` → `purple.700`, `bg.brand` → `purple.50`. Used sparingly: primary actions, key brand moments, selected/active states. *(Updated 2026-07-10 — this brief originally recommended "deep blue or indigo"; purple was confirmed and locked with the token implementation.)*  
- **Neutrals:** a refined, slightly cool gray scale doing most of the work — surfaces, borders, text. This is where 90% of the UI lives.  
- **Gradients:** very sparingly, if at all. Default to flat, precise surfaces.  
- **Texture:** warm, not cold. Some illustration and iconography are welcome (used with restraint); avoid heavy "API-doc" coldness.

---

## 7\. Color system

Two distinct problems — do **not** conflate them:

**A. Status (discrete).** Compliance states: e.g. **Pass / Partial / Fail / Needs evidence**. A small, fixed semantic set. Each status must carry a **non-color signal** (icon and/or shape) in addition to color, for accessibility and colorblind safety. Keep these calm and legible — not loud stoplight colors fighting the neutral palette.

**B. Confidence (continuous).** The AI's 0–100% confidence is its **own visual language** — a meter/bar/scale, *not* a green→red stoplight. It must be impossible to confuse "the AI is 60% confident this passes" with "this partially passes." Visually distinct from the status set.

Define semantic tokens for both, plus standard feedback colors (success/warning/error/info) for system messaging, all AA-contrast-compliant on light surfaces.

---

## 8\. Typography

- **Readability at density is the top requirement** — large volumes of compliance text, dense tables, long reasoning blocks.  
- Use a **highly legible neutral sans** for UI and body, paired with a **CJK companion** in the stack so multilingual content (Chinese evidence documents are already real in the product) renders cleanly. Multilingual is a strong nice-to-have, not a blocker. *(Implemented in `tokens.json` as **Cal Sans** for headings \+ **Geist** for body — Inter \+ Noto Sans CJK was this brief's pre-token recommendation; the CJK companion is still an open question, see `memory.md §7`.)*  
- **Tabular (monospaced) numerals** everywhere data appears — scores, percentages, counts, dates — so columns align.  
- **Monospace accents:** allowed but minimal and warm — e.g. requirement codes (`A02.1`), IDs. Don't let monospace make the consultant-facing surfaces feel like a terminal.  
- Define a clear type scale with deliberate hierarchy (display → headings → body → caption → data/mono).

---

## 9\. Iconography & illustration

- **Icons:** clean line icons, consistent weight. (Lucide-style works well with React and matches the restrained aesthetic.) Status icons should be instantly distinguishable by shape, not just color.  
- **Illustration:** welcome but used sparingly — empty states, onboarding, marketing moments. Keep it warm and on-brand (the locked `purple` family), never decorative noise.

---

## 10\. Motion

- **Restrained, purposeful, fast, eased** — Stripe-grade. Motion communicates state and causality, never decorates.  
- **The one place motion may be expressive: AI processing / streaming.** Since gradients are minimized and "intelligent" is the \#1 emotional job, analysis-in-progress, streaming reasoning, and score reveals are where the product gets to feel alive and intelligent. Keep even this disciplined.

---

## 11\. Layout & density

- Strong, consistent grid. Generous spacing rhythm that lets dense screens breathe.  
- Progressive disclosure: surface the decision-critical layer first; let users expand into detail (full reasoning, all citations, raw evidence) on demand.  
- Beautifully handled dense tables are a signature element — alignment, tabular numerals, clear row/column hierarchy, scannable status columns.

---

## 12\. Signature screens

These four make or break the product. All follow the *information-rich \+ spacious \+ guided* principle, and all visually subordinate AI to the human.

1. **Analysis view** — the core moment. Requirement criteria \+ AI compliance assessment: status, **confidence meter**, reasoning, citations to specific source pages, and improvement recommendations. The human reviewer's approve/reject decision is the visual protagonist; AI output supports it. Can lean denser since reviewers live here, but guided enough for consultants refining a submission.  
2. **Evidence collection view** — where consultants upload and organize evidence against requirements. Guided, reassuring, clear about what's expected and what's missing. Strong empty/in-progress states.  
3. **Requirement reference** — the standards/requirement tree (arbitrary-depth hierarchy: categories → features → requirements → parts), criteria, acceptable evidence types, guidance. Standard-agnostic — never hardcode WELL-specific language into shared UI. Scannable, navigable, supports cross-framework context.  
4. **Progress dashboard** — project-level certification progress and readiness at a glance. The most permissibly *spacious* of the four; status rollups, completion, audit readiness. (If anything in the system is allowed to be more open/sparse, it's this; the analysis view is allowed to be the densest.)

---

## 13\. How AI shows up

- AI outputs present: **compliance score, confidence (own visual language), reasoning, source citations (linked to evidence pages), and recommendations.**  
- Every AI element is framed as **advisory** and sits visually beneath/beside the human decision surface — supporting, never deciding.  
- Citations should make source traceability effortless: a reviewer can jump from a claim to the exact evidence passage that supports it.

---

## 14\. White-labeling

- **Basic tier only.** Per-tenant override of **client logo \+ primary color**. Nothing deeper — typography, density, radius, and semantic colors stay system-controlled.  
- Token architecture should expose a clean hook for those two overrides without over-engineering a full multi-brand theming engine.

---

## 15\. Logo & wordmark (in scope — to be designed)

No logo exists yet; the system should define one.

- **Direction:** wordmark-forward, precise, geometric, confident. Should evoke *standards / measurement / structure / a benchmark or grid* without being literal. Lives naturally in the locked `purple` family.  
- Must work monochrome, scale down to a favicon/app mark, and sit comfortably in both product chrome and marketing.  
- Deliver a few distinct concepts before refining.

---

## 16\. Token architecture & tech constraints

- **Stack:** React \+ TypeScript \+ Radix UI, styled with CSS variables. **No Tailwind in the library**, **not** shadcn/ui — build bespoke, accessible components (see `architecture.md §5.1, §12.4`).  
- **Light-first** semantic token system: color (neutrals, primary ramp, status set, confidence scale, feedback), typography (scale \+ families \+ tabular numerals), spacing, radius, elevation, motion.  
- White-label hooks: `--brand-logo`, `--primary` (and derived ramp) overridable per tenant; everything else fixed.  
- **Accessibility baked into the tokens** (AA contrast pairs, focus-ring tokens, status with redundant non-color encoding).

---

## 17\. What to produce (deliverables for Claude Design)

1. **Foundations:** color (with the status-vs-confidence distinction made explicit), typography, spacing, radius, elevation, motion — as documented tokens.  
2. **Logo/wordmark concepts** per §15.  
3. **Core component library:** buttons, inputs, selects, tables (the dense, beautiful kind), cards, badges/status pills, the confidence meter, navigation, tabs, modals, toasts, file-upload, empty states.  
4. **High-fidelity mockups of the four signature screens** (§12), demonstrating the density-plus-spaciousness principle and AI subordination.  
5. **A marketing-site direction** in the same system — Stripe-grade, infrastructure-signaling, no Apple-style photography.

---

### Quick reference — locked decisions

| Dimension | Decision |
| :---- | :---- |
| Inspiration | Stripe (product \+ marketing); shadcn *philosophy* only |
| Scope | Unified product \+ marketing |
| Primary persona | Consultants (then reviewers, cert-admins, investors) |
| Emotional rank | Intelligent → Trustworthy → Fast |
| Primary color | Deep trustworthy **purple** (locked `purple` ramp in `tokens.json`), used sparingly |
| Mode | Light default |
| Status colors | Fixed semantic set \+ non-color signal |
| Confidence | Separate visual language (meter, not stoplight) |
| Density | Information-rich \+ spacious \+ guided; progressive disclosure |
| Infrastructure signal | Yes — but warm/approachable, not cold |
| AI | Visually subordinate to human reviewer; advisory |
| Gradients | Very minimal |
| Illustration/icons | Yes, restrained; line icons |
| Motion | Restrained/purposeful; AI streaming the one expressive moment |
| Typography | Readability-first sans \+ CJK companion; tabular numerals |
| White-label | Basic: logo \+ primary color only |
| Logo | In scope; wordmark-forward, to be designed |
| Stack | React \+ TypeScript \+ Radix UI, CSS variables (no Tailwind), no shadcn/ui; WCAG 2.1 AA  |

**Inspirations:**  
