import { PublicShell } from "@/components/layout/PublicShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ContactPage() {
  return (
    <PublicShell>
      <section className="container-page section-space">
        <SectionHeader eyebrow="Contact" title="Ask questions or book a trial." text="Connect over form, WhatsApp, or visit the studio location." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card className="grid gap-4">
            <FormField label="Name" placeholder="Your name" />
            <FormField label="Phone" placeholder="+91..." />
            <FormField label="Message" placeholder="Tell us your goal" textarea />
            <Button type="button">Submit Enquiry</Button>
          </Card>
          <Card>
            <h2 className="font-display text-2xl font-black text-ink">Studio support</h2>
            <p className="mt-4 text-muted">WhatsApp: +91 90000 00000</p>
            <p className="mt-2 text-muted">Location: Premium women-only studio, your city</p>
            <Button href="https://wa.me/919000000000" className="mt-6" variant="secondary">Open WhatsApp</Button>
          </Card>
        </div>
      </section>
    </PublicShell>
  );
}
