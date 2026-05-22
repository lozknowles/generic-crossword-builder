import { PuzzleSheet } from "../components/PuzzleSheet";
import { RouteLink } from "../components/RouteLink";
import type { CrosswordIssue } from "../types/crossword";

type SolverPageProps = {
  issue: CrosswordIssue;
};

export function SolverPage({ issue }: SolverPageProps) {
  const activeClue = issue.cluePreviews[2] ?? issue.cluePreviews[0];

  return (
    <section className="solver-layout">
      <article className="solver-stage">
        <div className="solver-header">
          <div>
            <p className="eyebrow">Online solve</p>
            <h2>{issue.puzzleTitle}</h2>
          </div>
          <div className="solver-status">
            <span>Autosave on</span>
            <span>{issue.progressPercent}% complete</span>
          </div>
        </div>
        <PuzzleSheet
          grid={issue.grid}
          clueCount={issue.cluePreviews.length}
          compact={false}
        />
      </article>

      <aside className="solver-sidebar">
        <div className="solver-panel">
          <p className="eyebrow">Active clue</p>
          <h3>{issue.clueFocus}</h3>
          <p className="solver-clue">{activeClue.clue}</p>
          <div
            className="solver-answer-slots"
            aria-label={`Answer slots for ${activeClue.answerLength} letters`}
          >
            {Array.from({ length: activeClue.answerLength }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>

        <div className="solver-panel">
          <p className="eyebrow">Clue list</p>
          <div className="clue-list">
            {issue.cluePreviews.map((clue) => (
              <div className="clue-row" key={`${clue.number}-${clue.direction}`}>
                <span className="clue-tag">
                  {clue.number} {clue.direction}
                </span>
                <p>{clue.clue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solver-panel">
          <p className="eyebrow">Actions</p>
          <div className="hero-actions vertical-actions">
            <RouteLink
              className="secondary-action"
              path={{ name: "print", issueId: issue.id }}
            >
              Open print view
            </RouteLink>
            <RouteLink
              className="secondary-action"
              path={{ name: "issue", issueId: issue.id }}
            >
              View source dossier
            </RouteLink>
          </div>
        </div>
      </aside>
    </section>
  );
}
