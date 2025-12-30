import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Fund Traders - Dashboard",
  description: "Professional trading dashboard for Apex Fund Traders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

