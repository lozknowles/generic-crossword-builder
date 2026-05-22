# AGENTS.md

## Purpose

This repository is optimized for AI-assisted development.

Agents should:
- understand architecture before editing
- prefer semantic/codebase-aware navigation
- make minimal high-confidence changes
- preserve architectural intent
- avoid unnecessary refactors

---

## Repository Intelligence

If a knowledge graph exists, prefer it over random file browsing.

Common locations:

```txt
graphify-out/
codex.build/
.graph/
semantic/
```

Use graph tools for:
- architecture understanding
- dependency tracing
- finding related systems
- semantic navigation

Examples:

```bash
graphify query "how does auth work"
graphify path "api.ts" "db.ts"
```

Use raw source inspection for:
- implementation details
- debugging
- type verification
- algorithm inspection

If graph artifacts are missing, stale, or incomplete:
- fall back to selective source inspection
- avoid assuming the graph is authoritative
- update graph artifacts after major structural changes when applicable

---

## Preferred Workflow

For unfamiliar systems:

1. inspect graph, wiki, or docs first
2. identify related modules and boundaries
3. inspect source selectively
4. make minimal changes
5. update graph artifacts if applicable

Before editing:
- understand the local architecture and surrounding module boundaries
- trace the direct dependencies of the files being modified
- inspect adjacent modules for existing patterns
- follow established conventions before introducing new ones

After major code changes:

```bash
graphify update .
```

---

## Engineering Principles

Prefer:
- clarity over cleverness
- maintainability over micro-optimization
- explicitness over hidden behavior
- isolated modules over tight coupling
- composition over inheritance
- consistency with existing patterns over novelty

Avoid:
- broad refactors without reason
- editing generated artifacts manually
- introducing hidden dependencies
- bypassing architectural boundaries
- changing public interfaces unless required

---

## Change Strategy

When implementing:
- prefer the smallest change that fully solves the problem
- preserve existing architecture unless change is necessary
- reuse existing utilities and patterns where possible
- avoid introducing abstractions prematurely
- keep changes easy to review and reason about

When refactoring:
- separate refactors from behavioral changes when possible
- avoid touching unrelated code
- preserve backward compatibility unless intentionally changing interfaces

---

## Safety Rules

Use extra caution when modifying:
- persistence formats
- migrations
- graph/schema contracts
- concurrency logic
- shared infrastructure
- public APIs

For risky changes:
- inspect dependencies first
- trace downstream impact
- minimize interface churn

---

## Known Truths

- generated artifacts should not be manually edited
- semantic graphs may be stale until regenerated
- architecture consistency is preferred over local optimization
- existing project patterns usually exist for a reason

---

## When Unsure

If implementation details are unclear:
- inspect adjacent modules
- trace existing usage patterns
- prefer consistency with nearby code
- avoid speculative architectural changes

---

## Project Concepts

Add project-specific terminology here.

Example:
- Workspace = tenant isolation boundary
- Node = semantic graph entity
- Community = cluster of related modules
- Resolver = dependency traversal layer

---

## Standard Commands

Build:

```bash
pnpm build
```

Test:

```bash
pnpm test
```

Lint:

```bash
pnpm lint
```

Graph update:

```bash
graphify update .
```

---

## Repository Goals

Priority order:
1. correctness
2. maintainability
3. debuggability
4. developer ergonomics
5. performance

Do not sacrifice clarity for abstraction.
