import type { ReactNode } from "react";
import { getRouteHash, type AppRoute } from "../routes";

type RouteLinkProps = {
  path: AppRoute;
  children: ReactNode;
  className?: string;
};

export function RouteLink({ path, children, className }: RouteLinkProps) {
  return (
    <a
      href={getRouteHash(path)}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        window.location.hash = getRouteHash(path);
      }}
    >
      {children}
    </a>
  );
}
