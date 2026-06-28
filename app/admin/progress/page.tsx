import { PanelHeader } from "@/components/layout/PanelHeader";
import { DataTable } from "@/components/ui/DataTable";

export default function AdminProgressPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Member Progress" />
      <DataTable columns={["Student", "Weight", "Flexibility", "Stamina", "Consistency"]} rows={[
        { Student: "Ananya Sharma", Weight: "-5kg", Flexibility: "72%", Stamina: "74%", Consistency: "86%" },
        { Student: "Kavya Rao", Weight: "-7kg", Flexibility: "81%", Stamina: "78%", Consistency: "91%" }
      ]} />
    </>
  );
}
