import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PageHero({ eyebrow, title, text, cta }: { eyebrow: string; title: string; text: string; cta?: string }) {
  return (
    <section className="container-page section-space">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="muted-label">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[0.98] text-ink sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{text}</p>
          {cta ? <Button href="/pricing" className="mt-7">{cta}</Button> : null}
        </div>
        <div className="min-h-[360px] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center shadow-soft" />
      </div>
    </section>
  );
}

export function FeatureGrid({ eyebrow, title, text, items }: { eyebrow: string; title: string; text: string; items: string[] }) {
  return (
    <section className="container-page section-space">
      <SectionHeader eyebrow={eyebrow} title={title} text={text} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item}>
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-rosefit-100 font-black text-rosefit-700">+</div>
            <h3 className="font-display text-xl font-black text-ink">{item}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">Structured, beginner-safe, and progress-aware for real women with real schedules.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
