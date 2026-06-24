# Graph Report - .  (2026-06-24)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 201 nodes · 301 edges · 16 communities (14 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `47597a63`
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 10 edges
3. `tokens/` - 9 edges
4. `compilerOptions` - 7 edges
5. `src/styles/` - 7 edges
6. `src/components/` - 6 edges
7. `buildTokens()` - 5 edges
8. `AccordionTrigger()` - 5 edges
9. `Figma` - 5 edges
10. `Storybook` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Figma` --references--> `tokens/`  [EXTRACTED]
  architecture.md → readme.md
- `src/components/` --references--> `Vitest`  [EXTRACTED]
  readme.md → architecture.md

## Import Cycles
- None detected.

## Communities (16 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (39): Accordion, alpha, Antigravity IDE, border-radii, border-radii-absolute, brand-colors, Button, Card (+31 more)

### Community 1 - "Community 1"
Cohesion: 0.12
Nodes (21): Accordion(), AccordionContent(), AccordionContentProps, AccordionContext, AccordionContextValue, AccordionItem(), AccordionItemProps, AccordionProps (+13 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (24): author, bugs, url, dependencies, description, exports, files, homepage (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (17): Button(), ButtonProps, Roundness, Size, AllSizes, AllVariants, col, DarkTheme (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.09
Nodes (22): devDependencies, @chromatic-com/storybook, playwright, react, react-dom, storybook, @storybook/addon-a11y, @storybook/addon-docs (+14 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+9 more)

### Community 6 - "Community 6"
Cohesion: 0.18
Nodes (10): compilerOptions, allowImportingTsExtensions, declaration, declarationDir, noEmit, outDir, rootDir, exclude (+2 more)

### Community 7 - "Community 7"
Cohesion: 0.20
Nodes (10): scripts, build, build:lib, build-storybook, build:tokens, dev, prepublishOnly, storybook (+2 more)

### Community 8 - "Community 8"
Cohesion: 0.42
Nodes (7): build(), buildPrimitives(), buildTheme(), buildTokens(), loadJson(), primitiveFiles, rewriteRefs()

## Knowledge Gaps
- **114 isolated node(s):** `config`, `preview`, `primitiveFiles`, `meta`, `LineDefault` (+109 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `scripts` connect `Community 7` to `Community 2`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **What connects `config`, `preview`, `primitiveFiles` to the rest of the system?**
  _114 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.11428571428571428 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1038961038961039 - nodes in this community are weakly interconnected._