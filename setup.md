# Local Setup Guide

This guide describes how to set up the design system workspace locally for development, testing, and deployment verification.

---

## Prerequisites

Ensure you have the following tools installed:
- **Node.js:** v18 or higher (v20+ recommended).
- **npm:** v9 or higher.
- **Git:** Active version control.

---

## Environment Setup Steps

Follow these instructions to clone, configure, and boot up your local instance:

1. **Install Dependencies:**
   Install required node modules (Vite, React 19, Storybook 10, Style Dictionary, Vitest, Playwright):
   ```bash
   npm install
   ```

2. **Build Design Tokens:**
   Compile the token dictionary in `tokens/` down to CSS variables inside `src/styles/`:
   ```bash
   npm run build:tokens
   ```

3. **Start Storybook:**
   Launch the isolated component environment locally on port 6006:
   ```bash
   npm run storybook
   ```

4. **Start Vite Dev Server (Optional):**
   To test inside a local page runner, start the application sandbox:
   ```bash
   npm run dev
   ```

---

## Verification Commands

Use these validation tools to test codebase stability:

- **Run Automated Tests:**
  Run Vitest execution runners to execute test suites and story validation:
  ```bash
  npm test
  ```

- **Run TypeScript Compiler Checks:**
  Ensure strict typing passes compilation checks without emitting files:
  ```bash
  npm run typecheck
  ```

- **Build Production Bundles:**
  Ensure the React components and Storybook are buildable:
  ```bash
  npm run build
  npm run build-storybook
  ```
