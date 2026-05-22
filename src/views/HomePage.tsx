import { PanelHeader } from "../components/PanelHeader";
import { PuzzleSheet } from "../components/PuzzleSheet";
import { RouteLink } from "../components/RouteLink";
import type { CrosswordIssue } from "../types/crossword";

type HomePageProps = {
  currentIssue: CrosswordIssue;
  archiveIssues: CrosswordIssue[];
};

export function HomePage({ currentIssue, archiveIssues }: HomePageProps) {
  return (
    <>
      <section className="hero-card">
        <div className="hero-copy">
          <p className="section-chip">
            Filed this week / {currentIssue.issueLabel}
          </p>
          <h1>{currentIssue.marketingTitle}</h1>
          <p className="hero-intro">
            Each week, a source document is reviewed, distilled into key terms,
            and transformed into a crossword designed for print and online
            solving.
          </p>

          <div className="hero-actions">
            <RouteLink
              className="primary-action"
              path={{ name: "solver", issueId: currentIssue.id }}
            >
              Play this week&apos;s puzzle
            </RouteLink>
            <RouteLink
              className="secondary-action"
              path={{ name: "print", issueId: currentIssue.id }}
            >
              Print edition
            </RouteLink>
            <RouteLink
              className="text-action"
              path={{ name: "issue", issueId: currentIssue.id }}
            >
              Review source dossier
            </RouteLink>
          </div>

          <ul className="hero-highlights">
            {currentIssue.clueHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="hero-preview" aria-label="Puzzle preview">
          <div className="folio-tab">Latest crossword</div>
          <PuzzleSheet
            grid={currentIssue.grid}
            clueCount={currentIssue.cluePreviews.length}
          />
        </aside>
      </section>

      <section className="content-row">
        <article className="latest-panel">
          <PanelHeader
            eyebrow="This week's puzzle"
            title={currentIssue.puzzleTitle}
          />
          <p className="body-copy">{currentIssue.summary}</p>
          <dl className="puzzle-facts">
            {currentIssue.puzzleFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="status-panel">
          <p className="eyebrow">Your desk</p>
          <h2>Resume from clue {currentIssue.clueFocus}</h2>
          <p className="body-copy">
            Pick up where you left off with synced progress, active clue focus,
            and a final submission check when the grid is complete.
          </p>
          <div className="resume-strip">
            <span>{currentIssue.progressPercent}% complete</span>
            <div className="resume-meter" aria-hidden="true">
              <span style={{ width: `${currentIssue.progressPercent}%` }} />
            </div>
            <span>{currentIssue.lastSaved}</span>
          </div>
          <div className="inline-actions">
            <RouteLink
              className="secondary-action"
              path={{ name: "solver", issueId: currentIssue.id }}
            >
              Resume solving
            </RouteLink>
          </div>
        </article>
      </section>

      <section className="archive-section">
        <PanelHeader eyebrow="Previous issues" title="Puzzle archive" />
        <div className="archive-grid">
          {archiveIssues.map((issue) => (
            <article className="archive-card" key={issue.id}>
              <span className="archive-issue">{issue.issueLabel}</span>
              <h3>{issue.puzzleTitle}</h3>
              <p>{issue.sourceLabel}</p>
              <p className="archive-summary">{issue.summary}</p>
              <RouteLink path={{ name: "issue", issueId: issue.id }}>
                Open record
              </RouteLink>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <PanelHeader
          eyebrow="How it works"
          title="From source material to published crossword"
        />
        <div className="process-grid">
          {currentIssue.pipelineSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
