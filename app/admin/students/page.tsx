import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { FormField } from "@/components/ui/FormField";
import { students } from "@/lib/data";

export default function AdminStudentsPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Students" />
      <Card className="mb-5 grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-end">
        <FormField label="Search students" placeholder="Name, phone, plan..." />
        <Button type="button" variant="secondary">Edit Selected</Button>
        <Button type="button">Add Student</Button>
      </Card>
      <DataTable columns={["name", "plan", "status", "due", "progress"]} rows={students} />
    </>
  );
}
