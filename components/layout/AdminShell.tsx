"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileBottomNav, PanelSidebar } from "@/components/layout/PanelNav";
import { adminNav } from "@/lib/data";

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <main className="min-h-screen bg-lavender-50 px-4 py-8">{children}</main>;
  }

  return (
    <div className="flex">
      <PanelSidebar title="Admin Suite" nav={adminNav} tone="admin" />
      <main className="min-w-0 flex-1 px-4 py-6 pb-28 sm:px-6 lg:px-8 lg:pb-8">{children}</main>
      <MobileBottomNav nav={adminNav} />
    </div>
  );
}
