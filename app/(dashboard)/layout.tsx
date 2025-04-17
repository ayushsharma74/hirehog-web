import type { Metadata } from "next";
import "@/app/globals.css";
import { libre } from "@/fonts/font";
import { ThemeProvider } from "@/components/theme-provider";
import { DashboardLayout } from "@/components/DashboardLyout";

export const metadata: Metadata = {
  title: "Hirehog | Dashboard",
  description: "Job application tracking. Reimagined",
};

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div
        className={`${libre.className} bg-[#101011] antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DashboardLayout>
        {children}
        </DashboardLayout>
        </ThemeProvider>
      </div>
  );
}
