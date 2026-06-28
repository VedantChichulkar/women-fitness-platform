export function PanelHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="muted-label">{eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">{title}</h1>
      </div>
      <div className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-muted shadow-card">Women-only wellness platform</div>
    </div>
  );
}
