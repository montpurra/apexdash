import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Fund Traders - Dashboard",
  description: "Professional trading dashboard for Apex Fund Traders",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

