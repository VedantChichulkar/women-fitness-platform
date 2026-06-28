import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

export default function AdminClassesPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Classes" />
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="grid gap-4">
          <h2 className="font-display text-2xl font-black">Create class</h2>
          <FormField label="Class title" placeholder="Zumba Cardio Flow" />
          <FormField label="Date and time" placeholder="25 Jun, 7 PM" />
          <Button type="button">Create Class</Button>
        </Card>
        <Card>
          <h2 className="font-display text-2xl font-black">Manage schedule</h2>
          <div className="mt-4 grid gap-3">
            {["Morning Yoga • 7 AM", "Zumba Cardio • 7 PM", "Recovery Flow • Sunday"].map((item) => <div className="rounded-2xl bg-white p-4 font-bold shadow-card" key={item}>{item}</div>)}
          </div>
        </Card>
      </div>
    </>
  );
}
