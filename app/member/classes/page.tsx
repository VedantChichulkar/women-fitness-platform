import { PanelHeader } from "@/components/layout/PanelHeader";
import { Card } from "@/components/ui/Card";

const tabs = ["Upcoming", "Live", "Recorded", "Completed"];

export default function MemberClassesPage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Classes" />
      <div className="grid gap-5">
        {tabs.map((tab) => (
          <Card key={tab}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="muted-label">{tab}</p>
                <h2 className="mt-2 font-display text-2xl font-black text-ink">{tab} Classes</h2>
              </div>
              <span className="rounded-2xl bg-rosefit-100 px-4 py-2 text-sm font-black text-rosefit-700">3 sessions</span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
