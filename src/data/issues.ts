import type {
  CrosswordCell,
  CrosswordIssue,
  PipelineStep
} from "../types/crossword";

const numberedCells = new Map<number, string>([
  [0, "1"],
  [1, "2"],
  [3, "3"],
  [8, "4"],
  [10, "5"],
  [16, "6"],
  [18, "7"],
  [24, "8"],
  [32, "9"],
  [40, "10"]
]);

const blockedCellIndexes = new Set([
  2, 7, 9, 12, 14, 17, 22, 27, 28, 35, 36, 41, 46, 49, 51, 54, 56, 61
]);

const basePipelineSteps: PipelineStep[] = [
  {
    title: "Source document ingested",
    detail: "A weekly document enters the system as the starting point for the issue."
  },
  {
    title: "Terms and concepts extracted",
    detail: "Names, phrases, and recurring ideas are surfaced as candidate answers."
  },
  {
    title: "Clues drafted and reviewed",
    detail: "The clue set is generated, then checked by an editor before publication."
  },
  {
    title: "Grid built and validated",
    detail: "The crossword layout is constructed, checked, and prepared for release."
  },
  {
    title: "Published to web and print",
    detail: "The issue ships to the homepage, solver, archive, and printable edition."
  }
];

function createGrid(): CrosswordCell[] {
  return Array.from({ length: 64 }, (_, index) => ({
    index,
    blocked: blockedCellIndexes.has(index),
    clueNumber: numberedCells.get(index)
  }));
}

export const issues: CrosswordIssue[] = [
  {
    id: "issue-12",
    issueLabel: "Issue 12",
    puzzleTitle: "The Cabinet of Tidal Records",
    marketingTitle: "Archive Desk",
    summary:
      "A weekly crossword assembled from an 1898 coastal survey ledger, combining place names, maritime terminology, and recurring notes from the margins into a compact, elegant solve.",
    difficulty: "Thoughtful weekend",
    estimatedMinutes: "18 to 25 minutes",
    sourceLabel: "North Shore tidal office ledger",
    progressPercent: 68,
    lastSaved: "Saved 4 mins ago",
    clueFocus: "17 Across",
    sourceDocument: {
      kind: "survey-ledger",
      title: "Survey Ledger No. 4, North Shore Tidal Office",
      origin: "Harbor survey register",
      summary:
        "The source text is reviewed for notable names, unusual vocabulary, repeated motifs, and clue-worthy references. Editors can refine the answer list before the final grid is generated and published.",
      excerpt:
        "Tide observed against western posts at half-light. Marker stones remain visible after rain. Soundings amended in the margin and copied again beneath the seal.",
      candidateTerms: 49,
      selectedEntries: 12
    },
    clueHighlights: [
      "Generated from a selected source document each week",
      "Playable online with saved progress and return-anytime access",
      "Printable in a clean paper layout for classrooms and weekend editions"
    ],
    cluePreviews: [
      {
        number: "1",
        direction: "Across",
        clue: "Ledger annotation repeated after the seal",
        answerLength: 6
      },
      {
        number: "4",
        direction: "Down",
        clue: "Measured depth recorded by the survey office",
        answerLength: 8
      },
      {
        number: "8",
        direction: "Across",
        clue: "Harbor structure noted at half-light",
        answerLength: 4
      },
      {
        number: "10",
        direction: "Down",
        clue: "Tidal marker visible after rain",
        answerLength: 5
      }
    ],
    puzzleFacts: [
      {
        label: "Difficulty",
        value: "Thoughtful weekend"
      },
      {
        label: "Estimated time",
        value: "18 to 25 minutes"
      },
      {
        label: "Format",
        value: "Online or print"
      }
    ],
    pipelineSteps: basePipelineSteps,
    grid: createGrid()
  },
  {
    id: "issue-11",
    issueLabel: "Issue 11",
    puzzleTitle: "Harbor Letters",
    marketingTitle: "Harbor Letters",
    summary: "A signal-heavy puzzle built from annotated shipping notices.",
    difficulty: "Quick study",
    estimatedMinutes: "14 to 18 minutes",
    sourceLabel: "Port authority circular",
    progressPercent: 0,
    lastSaved: "Not started",
    clueFocus: "1 Across",
    sourceDocument: {
      kind: "circular",
      title: "Port Authority Circular / Winter Signals",
      origin: "Port authority circular",
      summary:
        "Short-form operational writing produces sharper clueable phrases and compact factual entries ideal for a faster puzzle.",
      excerpt:
        "Flags were raised in sequence before noon. Corrections to berthing instructions appear in the lower hand and supersede prior notice.",
      candidateTerms: 34,
      selectedEntries: 11
    },
    clueHighlights: [
      "Compact, notice-based source material",
      "Built for a faster solving session",
      "Optimized for both screen and print release"
    ],
    cluePreviews: [
      {
        number: "2",
        direction: "Across",
        clue: "Raised in sequence before noon",
        answerLength: 5
      },
      {
        number: "5",
        direction: "Down",
        clue: "Instruction amended in the lower hand",
        answerLength: 7
      }
    ],
    puzzleFacts: [
      {
        label: "Difficulty",
        value: "Quick study"
      },
      {
        label: "Estimated time",
        value: "14 to 18 minutes"
      },
      {
        label: "Format",
        value: "Online or print"
      }
    ],
    pipelineSteps: basePipelineSteps,
    grid: createGrid()
  },
  {
    id: "issue-10",
    issueLabel: "Issue 10",
    puzzleTitle: "The Glasshouse Notes",
    marketingTitle: "The Glasshouse Notes",
    summary: "A softer, language-rich issue drawn from seasonal care notes.",
    difficulty: "Reflective",
    estimatedMinutes: "20 to 28 minutes",
    sourceLabel: "Victorian gardening pamphlet",
    progressPercent: 0,
    lastSaved: "Not started",
    clueFocus: "1 Across",
    sourceDocument: {
      kind: "pamphlet",
      title: "Seasonal Notes for the Temperate Glasshouse",
      origin: "Victorian gardening pamphlet",
      summary:
        "Longer prose with descriptive vocabulary creates a more literary puzzle tone and a different answer mix from ledgers or notices.",
      excerpt:
        "Warm the soil with patience. Do not crowd the stems where the morning damp still lingers, nor hurry the turning of pots beneath weak sun.",
      candidateTerms: 57,
      selectedEntries: 13
    },
    clueHighlights: [
      "Literary source language",
      "Higher vocabulary variety",
      "Suitable for a richer editorial presentation"
    ],
    cluePreviews: [
      {
        number: "3",
        direction: "Across",
        clue: "Lingers in the morning damp",
        answerLength: 6
      },
      {
        number: "7",
        direction: "Down",
        clue: "Action not to hurry beneath weak sun",
        answerLength: 7
      }
    ],
    puzzleFacts: [
      {
        label: "Difficulty",
        value: "Reflective"
      },
      {
        label: "Estimated time",
        value: "20 to 28 minutes"
      },
      {
        label: "Format",
        value: "Online or print"
      }
    ],
    pipelineSteps: basePipelineSteps,
    grid: createGrid()
  },
  {
    id: "issue-09",
    issueLabel: "Issue 09",
    puzzleTitle: "Signals at Dusk",
    marketingTitle: "Signals at Dusk",
    summary:
      "Dense terminology and place names adapted into a commuter-themed grid.",
    difficulty: "Technical",
    estimatedMinutes: "22 to 30 minutes",
    sourceLabel: "Rail timetable annotations",
    progressPercent: 0,
    lastSaved: "Not started",
    clueFocus: "1 Across",
    sourceDocument: {
      kind: "annotations",
      title: "Annotated Evening Rail Timetable",
      origin: "Rail timetable annotations",
      summary:
        "Margin-heavy annotation sets create compressed but highly specific answer pools that need stronger editorial curation.",
      excerpt:
        "Signal delays marked at the final platform. Numbers circled twice appear to reflect substitutions made after the public issue was set.",
      candidateTerms: 44,
      selectedEntries: 12
    },
    clueHighlights: [
      "Highly specific terminologies",
      "Dense proper nouns and substitutions",
      "Requires firmer editorial balancing"
    ],
    cluePreviews: [
      {
        number: "6",
        direction: "Across",
        clue: "Marked at the final platform",
        answerLength: 6
      },
      {
        number: "9",
        direction: "Down",
        clue: "Circled twice after publication",
        answerLength: 5
      }
    ],
    puzzleFacts: [
      {
        label: "Difficulty",
        value: "Technical"
      },
      {
        label: "Estimated time",
        value: "22 to 30 minutes"
      },
      {
        label: "Format",
        value: "Online or print"
      }
    ],
    pipelineSteps: basePipelineSteps,
    grid: createGrid()
  }
];

export const latestIssue = issues[0];

export const archiveIssues = issues.slice(1);

export const issuesById = Object.fromEntries(
  issues.map((issue) => [issue.id, issue])
) as Record<string, CrosswordIssue>;
