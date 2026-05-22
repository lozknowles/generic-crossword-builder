import { PanelHeader } from "../components/PanelHeader";
import { RouteLink } from "../components/RouteLink";
import type { CrosswordIssue } from "../types/crossword";

type ArchivePageProps = {
  currentIssue: CrosswordIssue;
  archiveIssues: CrosswordIssue[];
};

export function ArchivePage({
  currentIssue,
  archiveIssues
}: ArchivePageProps) {
  return (
    <section className="stacked-layout">
      <PanelHeader eyebrow="Issue records" title="Weekly archive" />

      <div className="archive-list">
        <article className="archive-record archive-record-featured">
          <div>
            <span className="archive-issue">{currentIssue.issueLabel}</span>
            <h3>{currentIssue.puzzleTitle}</h3>
            <p>
              Built from {currentIssue.sourceLabel} and published as this
              week&apos;s featured crossword.
            </p>
          </div>
          <div className="inline-actions">
            <RouteLink
              className="primary-action"
              path={{ name: "solver", issueId: currentIssue.id }}
            >
              Solve online
            </RouteLink>
            <RouteLink
              className="secondary-action"
              path={{ name: "print", issueId: currentIssue.id }}
            >
              Print issue
            </RouteLink>
          </div>
        </article>

        {archiveIssues.map((issue) => (
          <article className="archive-record" key={issue.id}>
            <div>
              <span className="archive-issue">{issue.issueLabel}</span>
              <h3>{issue.puzzleTitle}</h3>
              <p>{issue.sourceLabel}</p>
              <p className="archive-summary">{issue.summary}</p>
            </div>
            <div className="record-meta">
              <span>{issue.sourceDocument.kind}</span>
              <span>Printable + online</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
