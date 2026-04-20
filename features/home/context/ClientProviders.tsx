"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { LanguageProvider } from "./LanguageContext";
import React from "react";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  console.log("reCAPTCHA Site Key:", siteKey ? "FOUND" : "MISSING");

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteKey}
    >
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </GoogleReCaptchaProvider>
  );
}
