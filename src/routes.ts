export type AppRoute =
  | {
      name: "home";
    }
  | {
      name: "issue";
      issueId: string;
    }
  | {
      name: "solver";
      issueId: string;
    }
  | {
      name: "archive";
    }
  | {
      name: "print";
      issueId: string;
    };

export function getRouteTitle(route: AppRoute): string {
  switch (route.name) {
    case "home":
      return "Homepage";
    case "issue":
      return "Issue dossier";
    case "solver":
      return "Online solver";
    case "archive":
      return "Archive";
    case "print":
      return "Print preview";
  }
}

export function getRouteHash(route: AppRoute): string {
  switch (route.name) {
    case "home":
      return "#/";
    case "issue":
      return `#/issue/${route.issueId}`;
    case "solver":
      return `#/solver/${route.issueId}`;
    case "archive":
      return "#/archive";
    case "print":
      return `#/print/${route.issueId}`;
  }
}

export function getRouteFromHash(
  hash: string,
  fallbackIssueId: string
): AppRoute {
  const normalizedHash = hash.replace(/^#/, "") || "/";
  const segments = normalizedHash.split("/").filter(Boolean);

  if (normalizedHash === "/") {
    return {
      name: "home"
    };
  }

  if (normalizedHash === "/archive") {
    return {
      name: "archive"
    };
  }

  if (segments[0] === "issue") {
    return {
      name: "issue",
      issueId: segments[1] ?? fallbackIssueId
    };
  }

  if (segments[0] === "solver") {
    return {
      name: "solver",
      issueId: segments[1] ?? fallbackIssueId
    };
  }

  if (segments[0] === "print") {
    return {
      name: "print",
      issueId: segments[1] ?? fallbackIssueId
    };
  }

  return {
    name: "home"
  };
}
