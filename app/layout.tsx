import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yukta Choudhary",
  description: "Personal portfolio website of Yukta Choudhary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}

