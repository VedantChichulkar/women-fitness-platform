import { PublicShell } from "@/components/layout/PublicShell";
import { FeatureGrid, PageHero } from "@/components/public/PageSections";

export default function NutritionPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Nutrition" title="Simple food guidance for active women." text="Practical pre-workout, post-workout, and weight-loss food ideas that fit Indian kitchens." cta="Join Program" />
      <FeatureGrid eyebrow="Meal support" title="Fuel your practice without confusion." text="Clear food categories help members build sustainable habits." items={["Pre-workout meals", "Post-workout recovery", "Weight-loss foods", "Hydration reminders", "Protein ideas", "Craving swaps"]} />
    </PublicShell>
  );
}
