export type DocumentKind =
  | "survey-ledger"
  | "pamphlet"
  | "circular"
  | "annotations";

export type PipelineStep = {
  title: string;
  detail: string;
};

export type CluePreview = {
  number: string;
  direction: "Across" | "Down";
  clue: string;
  answerLength: number;
};

export type CrosswordCell = {
  index: number;
  blocked: boolean;
  clueNumber?: string;
};

export type SourceDocument = {
  kind: DocumentKind;
  title: string;
  origin: string;
  summary: string;
  excerpt: string;
  candidateTerms: number;
  selectedEntries: number;
};

export type CrosswordIssue = {
  id: string;
  issueLabel: string;
  puzzleTitle: string;
  marketingTitle: string;
  summary: string;
  difficulty: string;
  estimatedMinutes: string;
  sourceLabel: string;
  progressPercent: number;
  lastSaved: string;
  clueFocus: string;
  sourceDocument: SourceDocument;
  clueHighlights: string[];
  cluePreviews: CluePreview[];
  puzzleFacts: Array<{
    label: string;
    value: string;
  }>;
  pipelineSteps: PipelineStep[];
  grid: CrosswordCell[];
};
