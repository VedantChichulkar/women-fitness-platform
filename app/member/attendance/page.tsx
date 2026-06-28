import { PanelHeader } from "@/components/layout/PanelHeader";
import { DataTable } from "@/components/ui/DataTable";

export default function MemberAttendancePage() {
  return (
    <>
      <PanelHeader eyebrow="Member panel" title="Attendance" />
      <DataTable columns={["Date", "Class", "Status", "Trainer"]} rows={[
        { Date: "24 Jun", Class: "Morning Yoga", Status: "Present", Trainer: "Riya" },
        { Date: "23 Jun", Class: "Zumba Cardio", Status: "Present", Trainer: "Riya" },
        { Date: "22 Jun", Class: "Flexibility Flow", Status: "Absent", Trainer: "Riya" }
      ]} />
    </>
  );
}
