import { PublicShell } from "@/components/layout/PublicShell";
import { FeatureGrid, PageHero } from "@/components/public/PageSections";

export default function ZumbaPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Zumba classes" title="Dance cardio with energy, rhythm, and results." text="Fun calorie-burning sessions with beginner guidance, low-impact options, and progress tracking." cta="Start Zumba" />
      <FeatureGrid eyebrow="Move with joy" title="Cardio that feels like celebration." text="Sweat, smile, and build stamina in a women-only environment." items={["Calories burned tracking", "Beginner guide", "Low-impact moves", "Live sessions", "Recorded routines", "FAQ support"]} />
    </PublicShell>
  );
}
