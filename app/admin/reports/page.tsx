import { LineChart } from "@/components/charts/LineChart";
import { PanelHeader } from "@/components/layout/PanelHeader";
import { Card } from "@/components/ui/Card";

export default function AdminReportsPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Reports" />
      <div className="grid gap-5 lg:grid-cols-3">
        <Card><h2 className="mb-4 font-display text-xl font-black">Revenue</h2><LineChart title="Revenue" values={[210, 260, 310, 360, 420, 480]} /></Card>
        <Card><h2 className="mb-4 font-display text-xl font-black">Attendance</h2><LineChart title="Attendance" values={[70, 74, 78, 76, 83, 88]} /></Card>
        <Card><h2 className="mb-4 font-display text-xl font-black">Growth</h2><LineChart title="Growth" values={[120, 138, 152, 178, 210, 248]} /></Card>
      </div>
    </>
  );
}
