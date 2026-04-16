import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StickyWhatsApp } from "@/features/home/components/StickyWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "US Monthly Car Solutions | פתרון חודשי גמיש לישראלים בארה״ב",
  description: "איך לנהוג על SUV בארה״ב מהיום הראשון, בלי התחייבות לליסינג של 3 שנים. גם אם אין לכם Credit Score.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Placeholder for Meta Pixel */}
        {/* Placeholder for Google Analytics / GTM */}
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}
