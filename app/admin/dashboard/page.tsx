import { PanelHeader } from "@/components/layout/PanelHeader";
import { Card, StatCard } from "@/components/ui/Card";

export default function AdminDashboardPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Dashboard" />
      <div className="grid gap-5 lg:grid-cols-4">
        <StatCard label="Total students" value="248" detail="32 joined this month" />
        <StatCard label="Active members" value="211" detail="85% retention" />
        <StatCard label="Monthly revenue" value="₹4.8L" detail="+18% from last month" />
        <StatCard label="Due fees" value="₹42K" detail="19 pending renewals" />
      </div>
      <Card className="mt-6">
        <h2 className="font-display text-2xl font-black text-ink">Upcoming birthdays</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["Ananya • 26 Jun", "Kavya • 29 Jun", "Meera • 02 Jul"].map((item) => (
            <div className="rounded-2xl bg-rosefit-100 p-4 font-bold text-rosefit-700" key={item}>{item}</div>
          ))}
        </div>
      </Card>
    </>
  );
}
