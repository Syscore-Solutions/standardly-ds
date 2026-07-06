# Graph Report - .  (2026-07-06)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 12 nodes · 15 edges · 3 communities
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.73)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `acdcc343`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Design Token Storage|Design Token Storage]]
- [[_COMMUNITY_Token Sync Workflow|Token Sync Workflow]]
- [[_COMMUNITY_Design System Tokens|Design System Tokens]]

## God Nodes (most connected - your core abstractions)
1. `Standardly Design System` - 3 edges
2. `Primitive Tokens` - 3 edges
3. `Semantic Tokens` - 3 edges
4. `Git Sync Workflow` - 3 edges
5. `Tokens Studio Plugin` - 2 edges
6. `tokens-studio branch` - 2 edges
7. `Tokens $metadata.json` - 1 edges
8. `Tokens $themes.json` - 1 edges
9. `Figma` - 1 edges
10. `GitHub` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Standardly Design System` --conceptually_related_to--> `Primitive Tokens`  [INFERRED]
  README.md → tokens/primitive.json
- `Standardly Design System` --conceptually_related_to--> `Semantic Tokens`  [INFERRED]
  README.md → tokens/semantic.json
- `Semantic Tokens` --references--> `Primitive Tokens`  [EXTRACTED]
  tokens/semantic.json → tokens/primitive.json

## Hyperedges (group relationships)
- **Git Sync Workflow Participants** — main_branch, tokens_studio_branch, tokens_studio_plugin, github [EXTRACTED 1.00]

## Communities (3 total, 0 thin omitted)

### Community 0 - "Design Token Storage"
Cohesion: 0.40
Nodes (4): Figma, GitHub, Tokens $metadata.json, Tokens $themes.json

### Community 1 - "Token Sync Workflow"
Cohesion: 0.50
Nodes (4): Git Sync Workflow, main branch, tokens-studio branch, Tokens Studio Plugin

### Community 2 - "Design System Tokens"
Cohesion: 1.00
Nodes (3): Standardly Design System, Primitive Tokens, Semantic Tokens

## Knowledge Gaps
- **5 isolated node(s):** `Tokens $metadata.json`, `Tokens $themes.json`, `Figma`, `GitHub`, `main branch`
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Git Sync Workflow` connect `Token Sync Workflow` to `Design Token Storage`?**
  _High betweenness centrality (0.255) - this node is a cross-community bridge._
- **Why does `Tokens Studio Plugin` connect `Token Sync Workflow` to `Design Token Storage`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Standardly Design System` (e.g. with `Primitive Tokens` and `Semantic Tokens`) actually correct?**
  _`Standardly Design System` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Tokens $metadata.json`, `Tokens $themes.json`, `Figma` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._