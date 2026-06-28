"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string; icon: string };

export function PanelSidebar({ title, nav, tone = "member" }: { title: string; nav: NavItem[]; tone?: "member" | "admin" }) {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-white/70 bg-white/82 p-5 shadow-card backdrop-blur lg:block">
      <Link href={tone === "admin" ? "/admin/dashboard" : "/member/dashboard"} className="block rounded-3xl bg-gradient-to-br from-lavender-100 to-rosefit-100 p-5 font-display text-2xl font-black text-ink">
        {title}
      </Link>
      <nav className="mt-7 grid gap-2">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold transition ${active ? "bg-ink text-white shadow-soft" : "text-muted hover:bg-lavender-50 hover:text-ink"}`}
              href={item.href}
              key={item.href}
            >
              <span>{item.label}</span>
              <span className="text-xs">{item.icon}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function MobileBottomNav({ nav }: { nav: NavItem[] }) {
  const pathname = usePathname();
  const visibleNav = nav.slice(0, 5);

  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-3xl border border-white/80 bg-white/92 p-2 shadow-soft backdrop-blur lg:hidden">
      {visibleNav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link className={`rounded-2xl px-2 py-2 text-center text-[0.68rem] font-black ${active ? "bg-ink text-white" : "text-muted"}`} href={item.href} key={item.href}>
            <span className="block text-xs">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
