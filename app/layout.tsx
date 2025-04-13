import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { libre } from "@/fonts/font";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        <MaxWidthWrapper>
        {children}
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
