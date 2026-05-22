import type { ReactNode } from "react";
import { getRouteTitle, type AppRoute } from "../routes";
import { RouteLink } from "./RouteLink";

type AppShellProps = {
  route: AppRoute;
  latestIssueId: string;
  children: ReactNode;
};

export function AppShell({ route, latestIssueId, children }: AppShellProps) {
  return (
    <div className="page-shell">
      <div className="backdrop-blot backdrop-blot-left" />
      <div className="backdrop-blot backdrop-blot-right" />

      <header className="topbar">
        <div className="brand-lockup">
          <RouteLink path={{ name: "home" }} className="brand-link">
            The Crossword Archive
          </RouteLink>
          <span className="brand-subtitle">Document-led weekly puzzles</span>
        </div>

        <nav className="topnav" aria-label="Primary">
          <RouteLink path={{ name: "home" }}>Home</RouteLink>
          <RouteLink path={{ name: "issue", issueId: latestIssueId }}>
            Issue dossier
          </RouteLink>
          <RouteLink path={{ name: "solver", issueId: latestIssueId }}>
            Solver
          </RouteLink>
          <RouteLink path={{ name: "archive" }}>Archive</RouteLink>
          <RouteLink path={{ name: "print", issueId: latestIssueId }}>
            Print
          </RouteLink>
        </nav>

        <div className="route-badge" aria-live="polite">
          {getRouteTitle(route)}
        </div>
      </header>

      <main className="main-layout">{children}</main>
    </div>
  );
}
