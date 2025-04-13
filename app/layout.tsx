import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { libre } from "@/fonts/font";

export const metadata: Metadata = {
  title: "Hirehog",
  description: "Job application tracking. Reimagined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libre.className} bg-[#101011] antialiased`}
      >
        <Toaster position="top-right" />
        <MaxWidthWrapper>
        {children}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
