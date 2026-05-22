import { PuzzleSheet } from "../components/PuzzleSheet";
import type { CrosswordIssue } from "../types/crossword";

type PrintPreviewPageProps = {
  issue: CrosswordIssue;
};

export function PrintPreviewPage({ issue }: PrintPreviewPageProps) {
  return (
    <section className="print-preview-layout">
      <article className="print-preview-sheet">
        <div className="print-preview-header">
          <div>
            <p className="eyebrow">Print edition</p>
            <h2>{issue.puzzleTitle}</h2>
          </div>
          <span className="print-stamp">{issue.issueLabel} / Press proof</span>
        </div>

        <div className="print-grid-layout">
          <PuzzleSheet
            grid={issue.grid}
            clueCount={issue.cluePreviews.length}
            compact={false}
            flat
          />
          <div className="print-clues">
            <h3>Selected clues</h3>
            <ol>
              {issue.cluePreviews.map((clue) => (
                <li key={`${clue.number}-${clue.direction}`}>
                  {clue.number} {clue.direction}: {clue.clue}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
}
