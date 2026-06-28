import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-md place-items-center">
      <Card className="w-full">
        <p className="muted-label">Admin login</p>
        <h1 className="mt-3 font-display text-3xl font-black text-ink">Studio operations</h1>
        <div className="mt-6 grid gap-4">
          <FormField label="Email" type="email" placeholder="admin@aurafit.com" />
          <FormField label="Password" type="password" placeholder="••••••••" />
          <Button href="/admin/dashboard">Login</Button>
        </div>
      </Card>
    </div>
  );
}
