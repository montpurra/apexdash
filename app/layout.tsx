import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Fund Traders - Dashboard",
  description: "Professional trading dashboard for Apex Fund Traders",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

