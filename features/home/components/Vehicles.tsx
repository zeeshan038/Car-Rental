"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import { Car, Truck, Users, Gem } from "lucide-react";

export const Vehicles = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].vehicles;

  const categories = [
    { icon: Users, title: "SUV", options: ["Family", "Off-road"] },
    { icon: Gem, title: "Luxury", options: ["Premium", "Executive"] },
    { icon: Car, title: "Minivan", options: ["7 Seater", "High capacity"] },
    { icon: Truck, title: "Pickup", options: ["Work", "Professional"] },
  ];

  return (
    <section className="bg-white py-24 md:py-32" id="vehicles">
      <div className="mx-auto max-w-7xl px-8 lg:px-14">
        
        {/* Header - Consistent with Comparison style */}
        <div className={`mb-16 md:mb-20 ${dir === "rtl" ? "text-right" : "text-left"}`}>
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

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <div key={idx} className={`group rounded-[2.5rem] bg-[#F8FAFB] p-10 border border-slate-200 shadow-sm transition-all hover:shadow-md ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
                <cat.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="mb-8 text-[20px] font-[900] text-slate-900 leading-tight">
                {cardTitle(cat.title, language)}
              </h3>
              <div className="space-y-3 flex flex-col">
                {cat.options.map((opt, oIdx) => (
                  <div key={oIdx} className="rounded-xl bg-white/60 px-4 py-2 text-[13px] font-bold text-slate-600 shadow-sm border border-white/50">
                    • {opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-[2.5rem] bg-slate-50 border border-slate-200 p-8 text-center">
          <p className="text-[14.5px] font-bold text-slate-500 tracking-wide">
            {t.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

function cardTitle(title: string, lang: string) {
  const map: any = {
    "SUV": lang === "he" ? "SUV" : "SUV",
    "Luxury": lang === "he" ? "רכבי יוקרה" : "Luxury",
    "Minivan": lang === "he" ? "מיניוואן" : "Minivan",
    "Pickup": lang === "he" ? "טנדרים" : "Pickup Truck",
  };
  return map[title] || title;
}
