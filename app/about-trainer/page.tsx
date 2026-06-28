import { PublicShell } from "@/components/layout/PublicShell";
import { FeatureGrid, PageHero } from "@/components/public/PageSections";

export default function AboutTrainerPage() {
  return (
    <PublicShell>
      <PageHero eyebrow="About trainer" title="Coaching built around women’s bodies and lives." text="Meet a trainer focused on confidence, posture, sustainable weight loss, and joyful movement." cta="View Plans" />
      <FeatureGrid eyebrow="Experience" title="More than classes. A guided wellness relationship." text="Every member gets clear structure, corrections, motivation, and a practical path." items={["Story rooted in women’s wellness", "8+ years coaching groups", "Yoga and Zumba certifications", "Mission-led community care"]} />
    </PublicShell>
  );
}
