import { PublicShell } from "@/components/layout/PublicShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricingPlans } from "@/lib/data";

export default function PricingPage() {
  return (
    <PublicShell>
      <section className="container-page section-space">
        <SectionHeader eyebrow="Pricing" title="Choose a plan that supports consistency." text="Monthly, quarterly, and yearly memberships for yoga, Zumba, progress tracking, and nutrition support." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card className={`flex flex-col ${plan.popular ? "ring-2 ring-rosefit-300" : ""}`} key={plan.name}>
              <p className="muted-label">{plan.cadence}</p>
              <h2 className="mt-3 font-display text-2xl font-black text-ink">{plan.name}</h2>
              <strong className="mt-5 text-4xl text-ink">{plan.price}</strong>
              <ul className="mt-6 grid gap-3 text-sm font-semibold text-muted">
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              <Button href="/member/register" className="mt-8">Select Plan</Button>
            </Card>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
