# Standardly Design System

This repository contains the design system for **Standardly**, an agentic compliance-intelligence platform (automated building-certification review via a RAG pipeline). 

The goal of this repository is to prove our UI pipeline: **we can go from design tokens to production-grade Storybook components without a frontend engineering team.**

## The Pipeline

See **[pipeline.md](pipeline.md)** for a detailed walkthrough of the technical pipeline (Figma → tokens.json → primitive CSS → semantic mapping → React components).

## The Deliverables

This repo contains 6 core deliverables for the Sprint S1 Review:

1. **`tokens.json`**: The canonical W3C DTCG source of truth.
2. **`pipeline.md`**: The end-to-end pipeline architecture.
3. **`directions/`**: 3 distinct design directions (o1, o2, o3) expressed as standalone HTML files consuming the exact same token primitives.
4. **`presentation.html`**: A slide deck summarizing the approach.
5. **`README.md`** (this file): Context and locked decisions.
6. **`storybook/`**: The proof. A functional Storybook instance rendering 12 production-grade components powered by the token pipeline.

## How to View

### 1. View the Design Directions
Open the files in `directions/` in your browser. 
- [Direction o1 — Soft Precision (Implemented)](directions/o1.html)
- `o2.html` and `o3.html` are scaffolds awaiting creative definition.

### 2. View the Storybook Proof
To see the components in isolation:
```bash
cd storybook
npm install
npm run storybook
```

### 3. View the Presentation
Open `presentation.html` in your browser.

## Locked Decisions & Brand Context

*From the original brief:*

- **Brand Primary:** Purple (locked). 
- **The Vibe:** Premium, agentic, confident. The AI should feel like a highly competent compliance reviewer, not a chat bot.
- **Tech Stack (Phase 2):** React + TypeScript + Radix UI.
- **Styling:** CSS variables built from tokens. No Tailwind.
- **Accessibility:** WCAG 2.1 AA minimum built into the tokens.
