import type { CrosswordCell } from "../types/crossword";

type PuzzleSheetProps = {
  grid: CrosswordCell[];
  clueCount: number;
  compact?: boolean;
  flat?: boolean;
};

export function PuzzleSheet({
  grid,
  clueCount,
  compact = true,
  flat = false
}: PuzzleSheetProps) {
  return (
    <div
      className={[
        "crossword-sheet",
        compact ? "crossword-sheet-compact" : "crossword-sheet-full",
        flat ? "crossword-sheet-flat" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="crossword-meta">
        <span>Field copy</span>
        <span>{clueCount} clues</span>
      </div>
      <div className="crossword-grid" aria-hidden="true">
        {grid.map((cell) => (
          <div
            key={cell.index}
            className={cell.blocked ? "grid-cell blocked" : "grid-cell"}
          >
            {!cell.blocked && cell.clueNumber ? (
              <span className="cell-number">{cell.clueNumber}</span>
            ) : null}
          </div>
        ))}
      </div>
      <div className="crossword-footer">
        <span>Print-ready</span>
        <span>Resume online</span>
      </div>
    </div>
  );
}
