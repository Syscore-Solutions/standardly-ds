# Graph Report - .  (2026-06-19)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 164 nodes · 191 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.91)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2d1b4490`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Agent Operations Manual` - 12 edges
3. `Project Overview` - 9 edges
4. `React Components Directory` - 9 edges
5. `scripts` - 8 edges
6. `UX/UI Design Specifications` - 8 edges
7. `Architecture Specifications` - 7 edges
8. `Local Setup Guide` - 6 edges
9. `Design Token Files Directory` - 6 edges
10. `buildTokens()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Figma Design Tool` --exports_to--> `Design Token Files Directory`  [INFERRED]
  poc-plan.md → agents.md
- `Accordion Component` --located_in--> `React Components Directory`  [INFERRED]
  readme.md → architecture.md
- `Button Component` --located_in--> `React Components Directory`  [INFERRED]
  readme.md → architecture.md
- `Card Component` --implemented_as--> `React Components Directory`  [INFERRED]
  poc-plan.md → architecture.md
- `Form Input Component` --implemented_as--> `React Components Directory`  [INFERRED]
  poc-plan.md → architecture.md

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (27): Accessibility Addon, Agent Operations Manual, Architecture Specifications, Activity Changelog, Claude AI Agent, Claude Redirection Pointer, Dark Theme Token Set, UX/UI Design Specifications (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (21): Accordion(), AccordionContent(), AccordionContentProps, AccordionContext, AccordionContextValue, AccordionItem(), AccordionItemProps, AccordionProps (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (17): Button(), ButtonProps, Roundness, Size, AllSizes, AllVariants, col, DarkTheme (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (20): devDependencies, @chromatic-com/storybook, playwright, storybook, @storybook/addon-a11y, @storybook/addon-docs, @storybook/addon-mcp, @storybook/addon-vitest (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (16): author, bugs, url, dependencies, react, react-dom, description, homepage (+8 more)

### Community 6 - "Community 6"
Cohesion: 0.22
Nodes (9): Accordion Component, Button Component, Card Component, Form Input Component, Navigation Component, React 19 Framework, React Components Directory, TypeScript 6 Compiler (+1 more)

### Community 7 - "Community 7"
Cohesion: 0.42
Nodes (7): build(), buildPrimitives(), buildTheme(), buildTokens(), loadJson(), primitiveFiles, rewriteRefs()

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (8): scripts, build, build-storybook, build:tokens, dev, storybook, test, typecheck

## Knowledge Gaps
- **109 isolated node(s):** `config`, `preview`, `name`, `version`, `description` (+104 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 3` to `Community 5`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `Architecture Specifications` connect `Community 0` to `Community 6`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 8` to `Community 5`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `React Components Directory` (e.g. with `Accordion Component` and `Button Component`) actually correct?**
  _`React Components Directory` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `config`, `preview`, `name` to the rest of the system?**
  _109 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.12535612535612536 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._