import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

export default function MemberProfilePage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Profile" />
      <Card className="grid gap-4 md:grid-cols-2">
        <FormField label="Full name" placeholder="Ananya Sharma" />
        <FormField label="Phone" placeholder="+91 98765 43210" />
        <FormField label="Email" type="email" placeholder="ananya@example.com" />
        <FormField label="Fitness goal" placeholder="Weight loss and stamina" />
        <div className="md:col-span-2"><Button type="button">Save Profile</Button></div>
      </Card>
    </>
  );
}
