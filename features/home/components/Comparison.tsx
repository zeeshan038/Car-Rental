"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Comparison = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].comparison;

  return (
    <section className="bg-[#f9f9fb] py-20 md:py-24" id="why-not">
      <div className="mx-auto max-w-7xl px-8 lg:px-14">
        
        {/* Header - Matching screenshot exactly */}
        <div className={`mb-16 ${dir === "rtl" ? "text-right" : "text-left"}`}>
          <div className="mb-3 text-[13px] font-semibold text-slate-500 uppercase tracking-wide">
            {t.badge}
          </div>
          <h2 className="text-[32px] md:text-[42px] font-[800] tracking-tight text-slate-900 mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="max-w-2xl text-[16px] md:text-[17.5px] leading-[1.7] text-slate-600 font-medium opacity-90">
            {t.subtitle}
          </p>
        </div>

        {/* Cards Grid - 3 Columns */}
        <div className="grid gap-6 md:grid-cols-3">
          {t.cards.map((card, idx) => (
            <div 
              key={idx} 
              className="flex flex-col rounded-[2.5rem] bg-white border border-slate-200 p-8 md:p-10 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className={`text-[21px] font-[900] text-slate-900 mb-10 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {card.title}
              </h3>
              
              <div className="space-y-3 flex-1">
                {card.points.map((point, pIdx) => (
                  <div 
                    key={pIdx} 
                    className={`rounded-2xl bg-slate-50 border border-slate-100/50 px-5 py-3.5 text-[13px] font-bold text-slate-700 leading-tight ${dir === "rtl" ? "text-right" : "text-left"}`}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
