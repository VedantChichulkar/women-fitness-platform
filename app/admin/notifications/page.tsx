import { PanelHeader } from "@/components/layout/PanelHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

export default function AdminNotificationsPage() {
  return (
    <>
      <PanelHeader eyebrow="Admin panel" title="Notifications" />
      <Card className="grid gap-4">
        <FormField label="Send to" placeholder="All users or individual user" />
        <FormField label="Title" placeholder="Class reminder" />
        <FormField label="Message" placeholder="Write notification..." textarea />
        <Button type="button">Send Notification</Button>
      </Card>
    </>
  );
}
