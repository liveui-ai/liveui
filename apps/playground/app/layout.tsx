import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiveUI • Playground",
  description:
    "This is a demo application, used by LiveUI developers to run experiments with the latest features.",
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
