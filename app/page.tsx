import { MotionSection } from "@/components/MotionSection";
import { PublicShell } from "@/components/layout/PublicShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pricingPlans, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <PublicShell>
      <main>
        <section className="container-page section-space">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="muted-label">Women-only yoga + Zumba</p>
              <h1 className="mt-4 font-display text-5xl font-black leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
                Feel strong, graceful, and supported.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                A premium fitness platform for women with live classes, attendance, progress, payments, nutrition guidance, and AI wellness support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/member/register">Start Membership</Button>
                <Button href="/about-trainer" variant="secondary">Meet Trainer</Button>
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-3 shadow-soft">
              <div className="min-h-[440px] rounded-[1.5rem] bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
            </div>
          </div>
        </section>

        <MotionSection className="container-page grid gap-5 md:grid-cols-3">
          {["Certified women-focused coaching", "Yoga and Zumba tracks", "Progress and payment dashboard"].map((item) => (
            <Card key={item}>
              <h2 className="font-display text-xl font-black text-ink">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">Designed for consistency, privacy, and measurable transformation.</p>
            </Card>
          ))}
        </MotionSection>

        <MotionSection className="container-page section-space">
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-lavender-100 to-white">
              <p className="muted-label">Yoga</p>
              <h2 className="mt-3 font-display text-3xl font-black text-ink">Flexibility, posture, calm</h2>
              <p className="mt-3 text-muted">Beginner to intermediate classes with breath-led progress.</p>
              <Button href="/yoga" className="mt-6" variant="secondary">Explore Yoga</Button>
            </Card>
            <Card className="bg-gradient-to-br from-rosefit-100 to-peach-50">
              <p className="muted-label">Zumba</p>
              <h2 className="mt-3 font-display text-3xl font-black text-ink">Energy, cardio, joy</h2>
              <p className="mt-3 text-muted">Dance fitness sessions that make calorie burn feel celebratory.</p>
              <Button href="/zumba" className="mt-6" variant="secondary">Explore Zumba</Button>
            </Card>
          </div>
        </MotionSection>

        <MotionSection className="container-page section-space">
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((quote) => (
              <Card key={quote}>
                <p className="text-lg font-bold leading-8 text-ink">“{quote}”</p>
              </Card>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="container-page section-space">
          <div className="grid gap-5 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card className={plan.popular ? "ring-2 ring-rosefit-300" : ""} key={plan.name}>
                <p className="muted-label">{plan.cadence}</p>
                <h2 className="mt-3 font-display text-2xl font-black text-ink">{plan.name}</h2>
                <strong className="mt-5 block text-4xl text-ink">{plan.price}</strong>
              </Card>
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] bg-ink p-8 text-center text-white shadow-soft">
            <h2 className="font-display text-3xl font-black">Ready for your next chapter?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/75">Join a supportive women-only studio with clear routines, real tracking, and premium care.</p>
            <Button href="/member/register" className="mt-6 bg-white text-ink hover:bg-peach-100">Join AuraFit</Button>
          </div>
        </MotionSection>
      </main>
    </PublicShell>
  );
}
