import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuraFit Women | Yoga + Zumba Platform",
  description: "Premium women-only yoga, Zumba, nutrition, member, and admin platform."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
