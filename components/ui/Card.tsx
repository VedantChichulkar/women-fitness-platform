import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`panel-surface p-5 sm:p-6 ${className}`}>{children}</div>;
}

export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <Card>
      <p className="text-sm font-semibold text-muted">{label}</p>
      <strong className="mt-3 block font-display text-3xl text-ink">{value}</strong>
      <span className="mt-2 block text-sm text-muted">{detail}</span>
    </Card>
  );
}
