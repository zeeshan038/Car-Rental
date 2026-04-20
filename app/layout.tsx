import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { StickyWhatsApp } from "@/features/home/components/StickyWhatsApp";
import { ClientProviders } from "@/features/home/context/ClientProviders";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DriveFlex USA | רכב לישראלים בארה״ב",
  description:
    "פתרון רכב חודשי לישראלים בארה״ב - בלי Credit Score, בלי התחייבות לליסינג ארוך. פשוט, גמיש ואנושי.",
  icons: {
    icon: "/logo-4.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-EEWD8C97S3`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EEWD8C97S3');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1483129133259807');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1483129133259807&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>

      <body className={`${inter.className} min-h-full flex flex-col`}>
        <ClientProviders>
          {children}
          <StickyWhatsApp />
        </ClientProviders>
      </body>
    </html>
  );
}