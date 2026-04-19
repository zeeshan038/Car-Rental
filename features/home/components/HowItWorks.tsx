"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const HowItWorks = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].how;
  const th = translations[language].human;

  return (
    <section className="bg-white py-24 md:py-32" id="how">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          
          {/* Left Card: How It Works */}
          <div className="rounded-[2.5rem] bg-white border border-slate-100 p-10 md:p-12 shadow-sm flex flex-col justify-center">
            <div className={`mb-4 text-[13px] font-semibold text-slate-500 uppercase tracking-wide ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.badge}
            </div>
            <h2 className={`text-[32px] md:text-[36px] font-[900] leading-tight text-slate-900 mb-12 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.title}
            </h2>
            
            <div className="space-y-10">
              {t.steps.map(([num, title, desc], idx) => (
                <div key={idx} className={`flex items-start gap-6 ${dir === "rtl" ? "flex-row-reverse text-right" : "text-left"}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[15px] font-[900] text-white">
                    {num}
                  </div>
                  <div>
                    <h3 className="text-[19px] font-[900] text-slate-900 mb-1">{title}</h3>
                    <p className="text-[14.5px] font-medium text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Risk and Urgency */}
          <div className="flex flex-col gap-8">
            
            {/* 0% Risk Guarantee - Light Green Card */}
            <div className="rounded-[2.5rem] bg-[#009866]/5 border border-[#009866]/40 p-10 md:p-12 flex-1">
              <h3 className={`text-[24px] font-[900] text-[#009866] mb-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {th.riskTitle}
              </h3>
              <p className={`text-[15px] md:text-[16px] font-medium leading-[1.7] text-[#009866]/90 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {th.riskDesc}
              </p>
            </div>

            {/* Real Urgency - Light Yellow Card */}
            <div className="rounded-[2.5rem] bg-amber-50/50 border border-amber-200/50 p-10 md:p-12 flex-1">
              <div className={`mb-3 text-[13px] font-semibold text-amber-700 uppercase tracking-wide ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {th.urgencyBadge}
              </div>
              <h3 className={`text-[21px] md:text-[23px] font-[900] text-amber-900 mb-6 leading-tight ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {th.urgencyTitle}
              </h3>
              <p className={`text-[14.5px] font-medium text-amber-800/80 mb-8 leading-relaxed ${dir === "rtl" ? "text-right" : "text-left"}`}>
                {th.urgencyDesc}
              </p>
              
              <div className="space-y-3">
                {th.lossPoints.map((point, idx) => (
                  <div key={idx} className={`flex items-start gap-3 ${dir === "rtl" ? "flex-row-reverse text-right" : "text-left"}`}>
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span className="text-[14px] font-bold text-amber-900/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
