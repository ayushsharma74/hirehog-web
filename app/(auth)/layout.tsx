import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import "@/app/globals.css";
import { libre } from "@/fonts/font";

export const metadata: Metadata = {
  title: "Hirehog | Login",
  description: "Job application tracking. Reimagined",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${libre.className} bg-[#101011] antialiased`}
      >
        <Toaster position="top-right" />
        {children}
      </div>
  );
}
