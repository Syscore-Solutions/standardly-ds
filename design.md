# Design Decisions — Standardly Design System

> **🚧 Status: not yet written.** This file is the designated home for *why* every token has the value it does — color philosophy, typography rationale, spacing logic, the status-vs-confidence visual language. `architecture.md` routes all "why we chose value X" questions here, but the rationale has not been authored yet. Until it is, the token *values* live in `tokens.json` and their *structure* is catalogued in `architecture.md §3.4`; the reasoning behind them is still in people's heads.
>
> This scaffold exists so the dependency from `architecture.md` and `README.md` resolves to a real document with a clear "to be written" signal, rather than an empty file.

---

## What belongs here (outline to fill in)

1. **Color philosophy**
   - Why `purple` is the locked brand/primary ramp (`brief.md §6` originally recommended "deep blue or indigo"; it was rewritten 2026-07-10 to the locked purple, with a dated history note in place — capture the actual reasoning here).
   - Neutral (`slate`) strategy — why it carries ~90% of the UI.
   - The **status (discrete) vs. confidence (continuous)** distinction from `brief.md §7`, and the tokens/visual language for each. Status must carry a non-color signal (icon/shape); confidence is a meter, never a stoplight.
   - Feedback ramp choices (`mint`/`yellow`/`red`/`blue`) and their AA-contrast pairings on light surfaces.
2. **Typography rationale**
   - Why Cal Sans (heading) + Geist (body); the readability-at-density requirement; the CJK companion plan; tabular numerals; monospace-accent discipline.
   - The type scale and hierarchy logic.
3. **Spacing & radius logic** — why the scale steps are what they are; role mappings (`radius.control/container/overlay/badge`).
4. **Accessibility rationale** — the AA-minimum/AAA-where-feasible targets and the specific contrast pairs that were verified.
5. **Decisions that are value-choices, not structure** (structure/how-to lives in `architecture.md`; keep the split clean).

## Cross-references

- Token **structure & catalog**: `architecture.md §3`
- Token **values**: `tokens.json`
- Product/brand **brief**: `brief.md`
- AI working memory & known drift: `memory.md`
