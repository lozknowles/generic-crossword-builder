# Crossword Archive

Archive Desk is a prototype for a weekly crossword builder and publisher. Each issue begins with a source document, moves through clue and grid generation, and ends as a published crossword that can be solved online or printed.

## Current Prototype

- `Homepage`: feature the current issue, saved progress state, and archive teaser
- `Issue dossier`: show the source document context and clue selection workflow
- `Solver`: present the interactive crossword surface and clue panel
- `Archive`: list current and previous issues
- `Print preview`: show the paper-oriented issue layout

The app currently uses a lightweight hash-based navigation layer instead of a full router so the structure is easy to evolve.

## Architecture

See [docs/architecture.md](C:\Users\Loz\OneDrive\Documents\New project\docs\architecture.md) for:

- the document-to-crossword pipeline
- the publishing and solver flow
- the current route map
- near-term implementation boundaries

## Commands

```bash
pnpm build
pnpm test
pnpm lint
```

Dependencies are now installable with `npm install`, and the production build has been verified with `npm run build`.
