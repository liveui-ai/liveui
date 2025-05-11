import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiveUI • Docs",
  description: "This is the official LiveUI documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
