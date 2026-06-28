import { PanelHeader } from "@/components/layout/PanelHeader";
import { Card, StatCard } from "@/components/ui/Card";
import { notifications } from "@/lib/data";

export default function MemberDashboardPage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Dashboard" />
      <div className="grid gap-5 lg:grid-cols-4">
        <StatCard label="Membership" value="Quarterly" detail="Expires 18 Aug 2026" />
        <StatCard label="Next class" value="7:00 PM" detail="Zumba cardio flow" />
        <StatCard label="Attendance" value="86%" detail="23 of 27 classes" />
        <StatCard label="Progress" value="+12%" detail="Consistency this month" />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <h2 className="font-display text-2xl font-black text-ink">Membership card</h2>
          <div className="mt-5 rounded-[2rem] bg-gradient-to-br from-ink to-lavender-900 p-6 text-white">
            <p className="text-sm font-bold text-white/70">AuraFit Women</p>
            <strong className="mt-8 block text-3xl">Ananya Sharma</strong>
            <p className="mt-2 text-white/75">Quarterly Reset • Active</p>
          </div>
        </Card>
        <Card>
          <h2 className="font-display text-2xl font-black text-ink">Notifications</h2>
          <div className="mt-4 grid gap-3">
            {notifications.slice(0, 2).map((item) => (
              <div className="rounded-2xl bg-lavender-50 p-4" key={item.title}>
                <p className="font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
