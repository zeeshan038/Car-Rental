"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export const Story = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].story;

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden" id="why">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-14">

        {/* Extracted Styling from User Div */}
        <div className={`grid  gap-8 md:grid-cols-[1.1fr_0.9fr] ${dir === "rtl" ? "text-right" : "text-left"}`}>

          {/* Main Story Card (Dark) */}
          <div className="rounded-[2rem]  bg-slate-900 p-8 md:p-5 text-white md:p-10 flex flex-col justify-center">
            <div className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.badge}
            </div>

            <h2 className={`text-3xl font-bold leading-tight md:text-4xl ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {t.p1}
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {t.p2}
            </p>
          </div>

          {/* The Enemy Section (Light Card) */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className={`mb-4 text-sm font-semibold text-slate-500 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.enemyBadge}
            </div>

            <h3 className={`text-2xl font-bold leading-tight ${dir === "rtl" ? "text-right" : "text-left"}`}>
              {t.enemyTitle}
            </h3>

            <div className="mt-6 space-y-3">
              {t.enemyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium ${dir === "rtl" ? "text-right" : "text-left"}`}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};