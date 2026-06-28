import Link from "next/link";
import { publicNav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-lavender-100 bg-white/70">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-black text-ink">AuraFit Women</h2>
          <p className="mt-3 max-w-md text-sm leading-7 text-muted">
            A women-only yoga, Zumba, nutrition, and progress platform built for confidence, consistency, and care.
          </p>
        </div>
        <div>
          <p className="font-bold text-ink">Explore</p>
          <div className="mt-3 grid gap-2">
            {publicNav.slice(1, 5).map((item) => (
              <Link className="text-sm font-semibold text-muted hover:text-rosefit-700" href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-ink">Panels</p>
          <div className="mt-3 grid gap-2 text-sm font-semibold text-muted">
            <Link href="/member/dashboard">Member Panel</Link>
            <Link href="/admin/dashboard">Admin Panel</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
