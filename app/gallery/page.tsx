import { PublicShell } from "@/components/layout/PublicShell";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const images = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
];

export default function GalleryPage() {
  return (
    <PublicShell>
      <section className="container-page section-space">
        <SectionHeader eyebrow="Gallery" title="Classes, events, and transformation moments." text="A visual space for images, videos, workshops, and community events." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <Card key={image} className="overflow-hidden p-2">
              <div className="h-72 rounded-[1.25rem] bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
              <p className="px-3 py-4 font-bold text-ink">{["Images", "Videos", "Events"][index]}</p>
            </Card>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
