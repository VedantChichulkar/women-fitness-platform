import Link from "next/link";
import { publicNav } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-peach-50/85 backdrop-blur-xl">
      <nav className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-black text-ink">
          AuraFit Women
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {publicNav.map((item) => (
            <Link className="text-sm font-bold text-muted transition hover:text-rosefit-700" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button href="/member/login" variant="secondary" className="hidden sm:inline-flex">Member Login</Button>
          <Button href="/pricing">Join Now</Button>
        </div>
      </nav>
    </header>
  );
}
