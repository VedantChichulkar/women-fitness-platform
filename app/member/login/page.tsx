import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

export default function MemberLoginPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-md place-items-center">
      <Card className="w-full">
        <p className="muted-label">Member login</p>
        <h1 className="mt-3 font-display text-3xl font-black text-ink">Welcome back</h1>
        <div className="mt-6 grid gap-4">
          <FormField label="Email" type="email" placeholder="member@example.com" />
          <FormField label="Password" type="password" placeholder="••••••••" />
          <Button href="/member/dashboard">Login</Button>
        </div>
        <p className="mt-5 text-sm font-semibold text-muted">New here? <Link className="text-rosefit-700" href="/member/register">Create account</Link></p>
      </Card>
    </div>
  );
}
