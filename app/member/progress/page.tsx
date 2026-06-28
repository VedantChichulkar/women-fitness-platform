import { LineChart } from "@/components/charts/LineChart";
import { PanelHeader } from "@/components/layout/PanelHeader";
import { Card } from "@/components/ui/Card";

export default function MemberProgressPage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Progress" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Card><h2 className="mb-4 font-display text-xl font-black">Weight</h2><LineChart title="Weight" values={[72, 71, 70, 69, 68, 67]} /></Card>
        <Card><h2 className="mb-4 font-display text-xl font-black">Flexibility</h2><LineChart title="Flexibility" values={[45, 48, 52, 60, 66, 72]} /></Card>
        <Card><h2 className="mb-4 font-display text-xl font-black">Stamina</h2><LineChart title="Stamina" values={[40, 46, 50, 58, 65, 74]} /></Card>
        <Card><h2 className="mb-4 font-display text-xl font-black">Consistency</h2><LineChart title="Consistency" values={[62, 68, 70, 78, 82, 86]} /></Card>
      </div>
    </>
  );
}
