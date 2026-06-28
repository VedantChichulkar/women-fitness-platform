import { PanelHeader } from "@/components/layout/PanelHeader";
import { DataTable } from "@/components/ui/DataTable";

export default function AdminPaymentsPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Payments" />
      <DataTable columns={["Student", "Plan", "Amount", "Due Date", "Status"]} rows={[
        { Student: "Ananya Sharma", Plan: "Quarterly", Amount: "₹5,499", "Due Date": "18 Aug", Status: "Paid" },
        { Student: "Meera Iyer", Plan: "Monthly", Amount: "₹1,999", "Due Date": "25 Jun", Status: "Due" },
        { Student: "Nisha Patel", Plan: "Monthly", Amount: "₹1,999", "Due Date": "20 Jun", Status: "Overdue" }
      ]} />
    </>
  );
}
