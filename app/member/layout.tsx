import type { ReactNode } from "react";
import { MemberShell } from "@/components/layout/MemberShell";

export default function MemberLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-peach-50">
      <MemberShell>{children}</MemberShell>
    </div>
  );
}
