"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/features/home/context/LanguageContext";

const translations = {
  he: {
    title: "תודה!",
    subtitle: "קיבלנו את הפרטים שלך. נציג אנושי יבדוק זמינות ויצור איתך קשר בקרוב.",
    fasterResponse: "רוצים תשובה מהירה יותר?",
    whatsappCta: "דברו איתנו בוואטסאפ עכשיו",
    backHome: "חזרה לדף הבית"
  },
  en: {
    title: "Thank You!",
    subtitle: "We got your details. A human specialist will check availability and contact you shortly.",
    fasterResponse: "Want a faster response?",
    whatsappCta: "Chat with us on WhatsApp now",
    backHome: "Back to Home"
  }
};

export default function ThankYouPage() {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const isHE = language === "he";
  const BackArrow = isHE ? ArrowRight : ArrowLeft;
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center" dir={dir}>
      <div className="max-w-md w-full bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-500">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mx-auto mb-6">
          <CheckCircle2 size={36} strokeWidth={2.5} />
        </div>

        <h1 className="text-[26px] md:text-[36px] font-[900] text-slate-900 leading-tight mb-3 tracking-tight">
          {t.title}
        </h1>

        <p className="text-[14px] md:text-[16px] font-medium text-slate-500 leading-relaxed mb-5">
          {t.subtitle}
        </p>

        {/* Strong WhatsApp CTA */}
        <div className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-4 mb-5">
          <p className="text-[14px] font-semibold text-emerald-800 mb-3">
            {t.fasterResponse}
          </p>
          <a
            href="https://wa.me/17864477656?text=%D7%94%D7%99%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A8%D7%9B%D7%91%20%D7%A9%D7%9C%20DriveFlex%20USA"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#22bf5b] active:scale-[0.98] ${isHE ? "flex-row-reverse" : ""}`}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="whitespace-nowrap">{t.whatsappCta}</span>
          </a>
        </div>

        <Link
          href="/"
          className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-6 py-3.5 text-[14px] font-bold text-slate-700 transition hover:bg-slate-200 active:scale-[0.98] ${isHE ? "flex-row-reverse" : ""}`}
        >
          <BackArrow size={18} />
          {t.backHome}
        </Link>
      </div>

      <div className="mt-6 text-slate-400 text-[12px] font-medium">
        DriveFlex USA — Cars for Israelis in America
      </div>
    </div>
  );
}
