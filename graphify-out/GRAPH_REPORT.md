# Graph Report - .  (2026-06-19)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 177 nodes · 278 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ea6b6f55`
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
- [[_COMMUNITY_Community 11|Community 11]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `tokens/` - 9 edges
3. `scripts` - 8 edges
4. `src/styles/` - 7 edges
5. `src/components/` - 6 edges
6. `buildTokens()` - 5 edges
7. `AccordionTrigger()` - 5 edges
8. `.storybook/` - 5 edges
9. `Figma` - 5 edges
10. `Storybook` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Figma` --references--> `tokens/`  [EXTRACTED]
  architecture.md → readme.md
- `src/components/` --references--> `Vitest`  [EXTRACTED]
  readme.md → architecture.md

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (21): Accordion(), AccordionContent(), AccordionContentProps, AccordionContext, AccordionContextValue, AccordionItem(), AccordionItemProps, AccordionProps (+13 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (24): author, bugs, url, dependencies, react, react-dom, description, homepage (+16 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (17): Button(), ButtonProps, Roundness, Size, AllSizes, AllVariants, col, DarkTheme (+9 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (20): devDependencies, @chromatic-com/storybook, playwright, storybook, @storybook/addon-a11y, @storybook/addon-docs, @storybook/addon-mcp, @storybook/addon-vitest (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.20
Nodes (16): .gitattributes, graphify, package.json, Playwright, sd.config.js, src/, src/components/, src/styles/ (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 6 - "Community 6"
Cohesion: 0.25
Nodes (14): Accordion, alpha, border-radii, border-radii-absolute, brand-colors, chart-colors, Figma, raw-colors (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.42
Nodes (7): build(), buildPrimitives(), buildTheme(), buildTokens(), loadJson(), primitiveFiles, rewriteRefs()

### Community 8 - "Community 8"
Cohesion: 0.25
Nodes (7): Button, Card, Claude Code, Claude Design, Form Input, Navigation Bar, Tokens Studio

## Knowledge Gaps
- **95 isolated node(s):** `config`, `preview`, `name`, `version`, `description` (+90 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.042) - this node is a cross-community bridge._
- **What connects `config`, `preview`, `name` to the rest of the system?**
  _95 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1038961038961039 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Community 5` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._