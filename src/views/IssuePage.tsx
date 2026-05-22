import { PanelHeader } from "../components/PanelHeader";
import { RouteLink } from "../components/RouteLink";
import type { CrosswordIssue } from "../types/crossword";

type IssuePageProps = {
  issue: CrosswordIssue;
};

export function IssuePage({ issue }: IssuePageProps) {
  return (
    <section className="stacked-layout">
      <div className="document-section">
        <div className="document-card">
          <div className="document-heading">
            <p className="eyebrow">This week&apos;s source</p>
            <h2>{issue.sourceDocument.title}</h2>
          </div>
          <p className="body-copy">{issue.sourceDocument.summary}</p>
          <div className="document-notes">
            <div className="note-card">
              <span className="note-label">Document type</span>
              <strong>{issue.sourceDocument.kind}</strong>
            </div>
            <div className="note-card">
              <span className="note-label">Origin</span>
              <strong>{issue.sourceDocument.origin}</strong>
            </div>
            <div className="note-card">
              <span className="note-label">Signals found</span>
              <strong>{issue.sourceDocument.candidateTerms} candidate terms</strong>
            </div>
            <div className="note-card">
              <span className="note-label">Editor review</span>
              <strong>{issue.sourceDocument.selectedEntries} final entries selected</strong>
            </div>
          </div>
        </div>

        <div className="document-excerpt">
          <div className="excerpt-tab">Recovered page fragment</div>
          <blockquote>{issue.sourceDocument.excerpt}</blockquote>
          <p>
            Different document types can bring different rhythms, densities, and
            editorial needs. The source dossier gives the generation pipeline a
            stable place to explain those differences before publication.
          </p>
        </div>
      </div>

      <div className="content-row">
        <article className="latest-panel">
          <PanelHeader
            eyebrow="Clue draft preview"
            title="Selected entries for the final grid"
          />
          <div className="clue-list">
            {issue.cluePreviews.map((clue) => (
              <div className="clue-row" key={`${clue.number}-${clue.direction}`}>
                <span className="clue-tag">
                  {clue.number} {clue.direction}
                </span>
                <p>{clue.clue}</p>
                <span className="clue-length">{clue.answerLength} letters</span>
              </div>
            ))}
          </div>
        </article>

        <article className="status-panel">
          <p className="eyebrow">Next actions</p>
          <h2>Publishable issue package</h2>
          <p className="body-copy">
            Editors should be able to compare clues against the source style,
            confirm fairness, and send the final package into the solver and
            print outputs without rewriting the issue page for each new document
            shape.
          </p>
          <div className="hero-actions">
            <RouteLink
              className="primary-action"
              path={{ name: "solver", issueId: issue.id }}
            >
              Open solver
            </RouteLink>
            <RouteLink
              className="secondary-action"
              path={{ name: "print", issueId: issue.id }}
            >
              Review print layout
            </RouteLink>
          </div>
        </article>
      </div>
    </section>
  );
}
