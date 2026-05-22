import { useEffect, useState } from "react";
import { AppShell } from "./components/AppShell";
import { archiveIssues, issuesById, latestIssue } from "./data/issues";
import { getRouteFromHash, getRouteHash, type AppRoute } from "./routes";
import { ArchivePage } from "./views/ArchivePage";
import { HomePage } from "./views/HomePage";
import { IssuePage } from "./views/IssuePage";
import { PrintPreviewPage } from "./views/PrintPreviewPage";
import { SolverPage } from "./views/SolverPage";

function resolveRoute(route: AppRoute): AppRoute {
  if ("issueId" in route && !issuesById[route.issueId]) {
    return {
      name: "issue",
      issueId: latestIssue.id
    };
  }

  return route;
}

function App() {
  const [route, setRoute] = useState<AppRoute>(() =>
    resolveRoute(getRouteFromHash(window.location.hash, latestIssue.id))
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute(resolveRoute(getRouteFromHash(window.location.hash, latestIssue.id)));
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = getRouteHash({
        name: "home"
      });
    }

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const currentIssue =
    "issueId" in route ? issuesById[route.issueId] ?? latestIssue : latestIssue;

  return (
    <AppShell route={route} latestIssueId={latestIssue.id}>
      {route.name === "home" ? (
        <HomePage currentIssue={latestIssue} archiveIssues={archiveIssues} />
      ) : null}
      {route.name === "issue" ? <IssuePage issue={currentIssue} /> : null}
      {route.name === "solver" ? <SolverPage issue={currentIssue} /> : null}
      {route.name === "archive" ? (
        <ArchivePage currentIssue={latestIssue} archiveIssues={archiveIssues} />
      ) : null}
      {route.name === "print" ? <PrintPreviewPage issue={currentIssue} /> : null}
    </AppShell>
  );
}

export default App;
