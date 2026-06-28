import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-lavender-900",
  secondary: "bg-white text-ink ring-1 ring-lavender-100 hover:-translate-y-0.5 hover:bg-lavender-50",
  ghost: "bg-transparent text-ink hover:bg-white/70"
};

export function Button({ href, variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-2xl px-6 text-sm font-extrabold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
