import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { DataTable } from "@/components/ui/DataTable";

export default function AdminAttendancePage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Attendance" />
      <div className="mb-5 flex flex-wrap gap-3">
        <Button type="button">Mark Present</Button>
        <Button type="button" variant="secondary">Mark Absent</Button>
      </div>
      <DataTable columns={["Student", "Class", "Date", "Status"]} rows={[
        { Student: "Ananya Sharma", Class: "Yoga", Date: "24 Jun", Status: "Present" },
        { Student: "Meera Iyer", Class: "Zumba", Date: "24 Jun", Status: "Pending" }
      ]} />
    </>
  );
}
