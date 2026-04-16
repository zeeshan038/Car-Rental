"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const HomeFooter = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-white py-12 border-t border-slate-50">
      <div className={`mx-auto max-w-7xl px-8 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6 ${dir === "rtl" ? "md:flex-row-reverse text-right" : "text-left"}`}>
        
        {/* Copyright */}
        <div className="text-[14px] font-medium text-slate-400">
          {t.copy}
        </div>

        {/* Links matching screenshot */}
        <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[14px] font-medium text-slate-400 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
          {t.features.map((feature, idx) => (
            <span key={idx} className="cursor-default hover:text-slate-600 transition-colors">
              {feature}
            </span>
          ))}
        </div>

      </div>
    </footer>
  );
};
