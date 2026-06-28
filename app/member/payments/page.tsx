import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";

export default function MemberPaymentsPage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Payments" />
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <p className="muted-label">Current plan</p>
          <h2 className="mt-3 font-display text-3xl font-black text-ink">Quarterly Reset</h2>
          <p className="mt-3 text-muted">Expires on 18 Aug 2026</p>
          <Button type="button" className="mt-6">Renew Plan</Button>
        </Card>
        <DataTable columns={["Date", "Plan", "Amount", "Status"]} rows={[
          { Date: "18 May", Plan: "Quarterly", Amount: "₹5,499", Status: "Paid" },
          { Date: "18 Feb", Plan: "Quarterly", Amount: "₹5,499", Status: "Paid" }
        ]} />
      </div>
    </>
  );
}
