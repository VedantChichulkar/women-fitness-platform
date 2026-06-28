import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormField } from "@/components/ui/FormField";

export default function MemberRegisterPage() {
  return (
    <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-2xl place-items-center">
      <Card className="w-full">
        <p className="muted-label">Member registration</p>
        <h1 className="mt-3 font-display text-3xl font-black text-ink">Start your wellness journey</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <FormField label="Full name" placeholder="Your name" />
          <FormField label="Phone" placeholder="+91..." />
          <FormField label="Email" type="email" placeholder="you@example.com" />
          <FormField label="Goal" placeholder="Weight loss, flexibility..." />
        </div>
        <Button href="/member/dashboard" className="mt-6">Create Account</Button>
        <p className="mt-5 text-sm font-semibold text-muted">Already a member? <Link className="text-rosefit-700" href="/member/login">Login</Link></p>
      </Card>
    </div>
  );
}
