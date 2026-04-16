"use client";

import React from "react";
import { MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const HumanSupport = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].human;

  return (
    <section className="bg-white py-24 md:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-8 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          
          <div className={`${dir === "rtl" ? "text-right" : "text-left"} space-y-12`}>
            <div className="space-y-6">
              <div className="mb-3 text-[13px] font-semibold text-slate-500 uppercase tracking-wide">
                {t.badge}
              </div>
              <h2 className="text-[34px] md:text-[54px] font-[900] leading-[1.05] tracking-tight text-slate-900">
                {t.title}
              </h2>
              <p className="max-w-[540px] text-[17px] md:text-[19px] leading-[1.7] text-slate-600 font-medium opacity-90">
                {t.subtitle}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {t.points.map((pt, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${dir === "rtl" ? "flex-row-reverse text-right" : ""}`}>
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[15px] font-bold text-slate-900 leading-tight">{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <a href="tel:+1000000000" className="flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-8 py-4.5 text-[15px] font-[900] text-white shadow-xl transition hover:bg-slate-800 active:scale-[0.98]">
                <Phone size={18} />
                {t.callNow}
              </a>
              <a href="#contact" className="flex items-center justify-center gap-3 rounded-2xl bg-[#00A651] px-8 py-4.5 text-[15px] font-[900] text-white shadow-xl transition hover:bg-[#009247] active:scale-[0.98]">
                <MessageSquare size={18} />
                {t.whatsapp}
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:shadow-md">
              <div className="text-center px-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-xl mx-auto mb-6 text-slate-400">
                  <Users size={40} className="text-slate-200" />
                </div>
                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-300">Human Connection</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-2xl border border-slate-100 max-w-[210px] animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <div className="text-[11px] font-black uppercase text-emerald-600 tracking-widest">Live Support</div>
              </div>
              <div className="text-[14.5px] font-bold text-slate-900 leading-tight">We usually respond in under 5 minutes.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple internal icon component for the visual placeholder
const Users = (props: any) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
