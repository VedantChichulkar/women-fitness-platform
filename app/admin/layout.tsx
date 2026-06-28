import type { ReactNode } from "react";
import { AdminShell } from "@/components/layout/AdminShell";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-lavender-50">
      <AdminShell>{children}</AdminShell>
    </div>
  );
}
