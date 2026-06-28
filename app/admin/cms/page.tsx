import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

const sections = ["About", "Yoga", "Zumba", "Pricing", "Gallery", "Contact"];

export default function AdminCmsPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="CMS" />
      <div className="grid gap-5 lg:grid-cols-2">
        {sections.map((section) => (
          <Card className="grid gap-4" key={section}>
            <h2 className="font-display text-2xl font-black text-ink">{section}</h2>
            <FormField label={`${section} content`} placeholder={`Update ${section.toLowerCase()} page content`} textarea />
            <Button type="button" variant="secondary">Save {section}</Button>
          </Card>
        ))}
      </div>
    </>
  );
}
