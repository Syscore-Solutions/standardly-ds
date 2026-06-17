# Agent Operations Manual

This is the master operations manual for all AI agents (Gemini, Claude, OpenAI, and other models) operating in this repository. Follow these guidelines strictly to maintain consistent state, prevent conflicts, and ensure code quality.

---

## Directory Structure

```
1w-ds-poc/
├── .gitignore              # Ignored files (node_modules, OS files, dist, etc.)
├── readme.md               # Project overview and layout mapping
├── agents.md               # Master operations manual (this file)
├── claude.md               # Compatibility redirect pointer to agents.md
├── design.md               # UI/UX design specs, typography, palette, and flows
├── architecture.md         # Software/pipeline architecture and guidelines
├── setup.md                # Environment setup instructions and verification
├── plan.md                 # Active proposal scratchpad
├── tasks.md                # Active project checklist
├── memory.md               # Persistent context scratchpad
├── changelog.md            # Append-only agent activity log
├── sd.config.js            # Style Dictionary configuration
├── tsconfig.json           # TypeScript compiler configuration
├── vite.config.ts          # Vite configuration
├── vitest.config.ts        # Vitest configuration
├── tokens/                 # Design token raw data source files (JSON)
├── src/                    # Codebase source files
│   ├── components/         # React design system components
│   └── styles/             # Generated CSS design token sheets
└── .storybook/             # Storybook playground config
```

---

## Standards

### 1. Code Styling & Quality
- **React & TypeScript:** Write modern, functional components using React 19 and strict TypeScript 6.
- **Styling Rules:** Reference compiled CSS custom properties (defined in `src/styles/`) when applying styling to components. Do not hardcode hex codes or local CSS properties directly in components.
- **Linting & Formatting:** Ensure code is clean and properly formatted. Run TypeScript validation (`npm run typecheck`) to verify syntax before finishing a session.

### 2. Naming Conventions
- **React Components:** Use PascalCase for React component names (e.g. `Button.tsx`, `Accordion.tsx`).
- **CSS Custom Properties:** Follow Style Dictionary's kebab-case mapping format (e.g., `var(--color-primary-default)`).
- **Files & Directories:** Use kebab-case for filenames, utility helper scripts, and directories.

### 3. Verification Criteria
- All newly added components must include standard Storybook stories mapping out all key layout configurations and variants.
- Run `npm test` and ensure all test suites pass.

---

## Planning and Execution Protocol

To avoid coordinate clashes and messy state modifications, follow this strict protocol:

1. **Proposed Changes:** Draft all implementation proposals inside the workspace root `plan.md` under the `## Current Plan` section. Document any breaking options or choices under `## User Review Required`.
2. **Review Barrier:** Wait for user feedback or approval before making structural code changes.
3. **Task Checklists:** Maintain active project progress in the workspace root `tasks.md`. Update existing checkbox states (`- [ ]`, `- [/]`, `- [x]`) as you make progress. Do not create folder-specific or task-specific task tracking markdown files.

---

## Logs Protocol

Upon completion of any workspace run, you must update the persistent memory ledger:

1. **Update `memory.md`:**
   - Under `## Current Goals & Tasks`, adjust the roadmap status.
   - Under `## Agent Run History`, append a line in the markdown table tracking the execution details:
     `| Date | Agent/Model | Action/Summary |`
   - Under `## Key Decisions & Lessons Learned`, document any new constraints, design choices, or issues solved.

2. **Append to `changelog.md`:**
   - Add a new record to `changelog.md` without modifying any historical records.
   - Format:
     ```markdown
     ### YYYY-MM-DD HH:MM:SS (Timezone)
     - **Agent / Harness:** [e.g. Antigravity IDE, Claude Code, Zed]
     - **Model:** [e.g. Gemini 3.5 Flash, Claude 3.5 Sonnet]
     - **Summary of Actions:**
       - [bullet points of actions taken]
     ```
