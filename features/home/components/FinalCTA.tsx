"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const FinalCTA = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="bg-white py-4 md:py-10" id="cta-card">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-14">
        
        {/* Large Centered CTA Card - Flexbox approach */}
        <div className={`rounded-[3rem] bg-[#121D33] p-10 md:p-14 text-white shadow-2xl overflow-hidden flex flex-col lg:flex-row gap-10 justify-between ${dir === "rtl" ? "lg:flex-row-reverse" : ""}`}>
          <div className={`max-w-2xl ${dir === "rtl" ? "text-right" : "text-left"}`}>
            <div className="mb-6 text-[12px] font-black uppercase tracking-[0.2em] text-slate-400">
              {t.badge}
            </div>
            
            <h2 className="text-[36px] md:text-[54px] font-[900] leading-[1.05] tracking-tight mb-8">
              {t.title}
            </h2>
            
            <p className="text-[16px] md:text-[17.5px] leading-[1.7] text-slate-300 font-medium max-w-2xl mb-12 opacity-90">
              {t.subtitle}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full lg:w-[260px] shrink-0 justify-center">
            <a 
              href="#contact" 
              className="flex items-center justify-center rounded-2xl bg-white px-8 py-5 text-[15.5px] font-[900] text-[#121D33] transition hover:bg-slate-100 shadow-xl active:scale-[0.98]"
            >
              {t.submit}
            </a>
            <a 
              href="https://wa.me/17864477656?text=%D7%94%D7%99%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A8%D7%9B%D7%91%20%D7%A9%D7%9C%20DriveFlex%20USA" 
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
