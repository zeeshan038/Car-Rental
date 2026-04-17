"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const FAQ = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].faq;

  return (
    <section className="bg-slate-50 py-24 md:py-32" id="faq">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-14">
        
        {/* Header matching whole page style */}
        <div className={`mb-16 md:mb-20 ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div className="mb-3 text-[13px] font-semibold text-slate-500 uppercase tracking-wide">
            {t.badge}
          </div>
          <h2 className="text-[32px] md:text-[42px] font-[800] tracking-tight text-slate-900 mb-6 leading-tight">
            {t.title}
          </h2>
        </div>

        {/* FAQ Grid Cards - Matching screenshot layout exactly */}
        <div className="grid gap-6 md:grid-cols-2">
          {t.items.map(([q, a], idx) => (
            <div 
              key={idx} 
              className={`flex flex-col rounded-[2.5rem] bg-white border border-slate-200 p-8 md:p-10 shadow-sm min-h-[250px] ${dir === "rtl" ? "text-right" : "text-left"}`}
            >
              <h3 className="text-[19px] md:text-[21px] font-[900] text-slate-900 mb-6 leading-tight">
                {q}
              </h3>
              <p className="text-[14.5px] md:text-[15.5px] font-medium leading-[1.7] text-slate-500 opacity-90">
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
