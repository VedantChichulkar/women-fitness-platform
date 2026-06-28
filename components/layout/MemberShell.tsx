"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileBottomNav, PanelSidebar } from "@/components/layout/PanelNav";
import { memberNav } from "@/lib/data";

export function MemberShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname === "/member/login" || pathname === "/member/register";

  if (isAuth) {
    return <main className="min-h-screen bg-peach-50 px-4 py-8">{children}</main>;
  }

  return (
    <div className="flex">
      <PanelSidebar title="Member Studio" nav={memberNav} />
      <main className="min-w-0 flex-1 px-4 py-6 pb-28 sm:px-6 lg:px-8 lg:pb-8">{children}</main>
      <MobileBottomNav nav={memberNav} />
    </div>
  );
}
