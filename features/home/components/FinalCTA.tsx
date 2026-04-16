"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const FinalCTA = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="bg-white py-12 md:py-20" id="cta-card">
      <div className="mx-auto max-w-7xl px-8 lg:px-14">
        
        {/* Large Centered CTA Card - Matching screenshot exactly */}
        <div className="rounded-[3rem] bg-[#121D33] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className={`max-w-3xl ${dir === "rtl" ? "text-right" : "text-left"}`}>
            <div className={`mb-6 text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.badge}
            </div>
            
            <h2 className="text-[36px] md:text-[54px] font-[900] leading-[1.05] tracking-tight mb-8">
              {t.title}
            </h2>
            
            <p className="text-[16px] md:text-[17.5px] leading-[1.7] text-slate-300 font-medium max-w-2xl mb-12 opacity-90">
              {t.subtitle}
            </p>
          </div>

          {/* Buttons Positioned on the Right (on desktop) */}
          <div className={`flex flex-col gap-4 md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2 md:w-[260px] ${dir === "rtl" ? "md:left-20 md:right-auto" : ""}`}>
            <a 
              href="#contact" 
              className="flex items-center justify-center rounded-2xl bg-white px-8 py-5 text-[15.5px] font-[900] text-[#121D33] transition hover:bg-slate-100 shadow-xl active:scale-[0.98]"
            >
              {t.submit}
            </a>
            <a 
              href="https://wa.me/1000000000" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-5 text-[15.5px] font-[900] text-white transition hover:bg-white/5 active:scale-[0.98]"
            >
              <MessageSquare size={18} fill="currentColor" />
              {t.talk}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
