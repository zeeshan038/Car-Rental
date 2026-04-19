"use client";

import { MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Navbar = () => {
  const { language, setLanguage, dir } = useLanguage();
  const t = translations[language].navbar;
  const isHE = language === "he";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">

        {/* Brand Group */}
        <div className={`flex items-center gap-4 ${dir === "rtl" ? "flex-row-reverse text-right" : "text-left"}`}>
          <div className="flex items-center justify-center">
            <img
              src="/logo-4.png"
              alt="DriveFlex USA Logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="block">
            <div className="text-[14px] sm:text-[16px] font-black tracking-tight text-[#121D33]">
              DriveFlex USA
            </div>
            <div className="hidden sm:block text-[12px] font-medium text-slate-400">
              Hebrew + English Human Support
            </div>
          </div>
        </div>

        {/* Navigation - Centered style */}
        <nav className={`hidden items-center gap-10 lg:flex ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
          <a href="#why" className="text-[14px] font-bold text-[#121D33] transition hover:opacity-70">{t.story}</a>
          <a href="#how" className="text-[14px] font-bold text-[#121D33] transition hover:opacity-70">{t.how}</a>
          {/* <a href="#vehicles" className="text-[14px] font-bold text-[#121D33] transition hover:opacity-70">{t.vehicles}</a> */}
          <a href="#faq" className="text-[14px] font-bold text-[#121D33] transition hover:opacity-70">{t.faq}</a>
        </nav>

        {/* Action Group */}
        <div className={`flex items-center gap-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>

          {/* Language Switcher Capsule */}
          <div className="flex items-center gap-1 rounded-full bg-slate-50 p-1 border border-slate-100">
            <button
              onClick={() => setLanguage("he")}
              className={`rounded-full px-4 py-1.5 text-[11px] font-black tracking-wide transition-all ${language === "he" ? "bg-white text-[#121D33] shadow-sm border border-slate-100" : "text-slate-400 hover:text-slate-600"}`}
            >
              HE
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-1.5 text-[11px] font-black tracking-wide transition-all ${language === "en" ? "bg-white text-[#121D33] shadow-sm border border-slate-100" : "text-slate-400 hover:text-slate-600"}`}
            >
              EN
            </button>
          </div>

          <a href="#contact" className="hidden md:block rounded-full bg-[#121D33] px-6 py-3 text-[14px] font-black text-white transition hover:bg-[#1a2844] shadow-xl shadow-slate-900/10 active:scale-[0.98]">
            {t.contact}
          </a>
        </div>
      </div>
    </header>
  );
};
