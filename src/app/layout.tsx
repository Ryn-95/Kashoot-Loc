"use client";

import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import { Preloader } from "@/components/ui/preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#050505] text-white">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
