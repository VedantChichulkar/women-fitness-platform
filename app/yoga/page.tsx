import { PublicShell } from "@/components/layout/PublicShell";
import { FeatureGrid, PageHero } from "@/components/public/PageSections";

export default function YogaPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="Yoga programs" title="Soft strength, mobility, and mindful progress." text="Beginner-friendly yoga flows for flexibility, back care, balance, breath, and recovery." cta="Start Yoga" />
      <FeatureGrid eyebrow="Benefits" title="Yoga that meets you where you are." text="Build a steady practice with clear progress markers and safe instruction." items={["Weight-loss yoga", "Flexibility flows", "Back-care sessions", "Beginner foundations", "Breathwork and calm", "Frequently asked questions"]} />
    </PublicShell>
  );
}
