import { PanelHeader } from "@/components/layout/PanelHeader";
import { Card } from "@/components/ui/Card";
import { notifications } from "@/lib/data";

export default function MemberNotificationsPage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Notifications" />
      <Card>
        <div className="grid gap-5">
          {notifications.map((item) => (
            <div className="border-l-4 border-rosefit-300 pl-5" key={item.title}>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-muted">{item.time}</p>
              <h2 className="mt-1 font-display text-xl font-black text-ink">{item.title}</h2>
              <p className="mt-1 text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
