type PanelHeaderProps = {
  eyebrow: string;
  title: string;
};

export function PanelHeader({ eyebrow, title }: PanelHeaderProps) {
  return (
    <div className="panel-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
