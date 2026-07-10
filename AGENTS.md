# AGENTS.md — standardly-ds

Guide for AI agents working in this repo.

## Hard Rules
- **`tokens.json` is canonical and lives at repo root — do not move it.** (Tokens Studio syncs that path).
- **Single light theme only.** `$themes` is `[]`. Do not add dark mode.
- **`semantic` currently contains only `color`, `typography`, `radius`.**
- **Semantic tokens must reference primitives only**, using set-name-less refs (`{color.slate.900}`). Never semantic→semantic; never a raw value in a semantic token.
- **Brand primary is `purple`** (locked).

For the rest of the project context (the design directions, Storybook pipeline, etc.), please read **`README.md`** and **`pipeline.md`**.
