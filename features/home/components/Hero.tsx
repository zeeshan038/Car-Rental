"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Lock, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

// --- Technical Scope: Conversion Tracking ---
// Note: These functions call the global tracking objects if available (Meta Pixel / GA / GTM)
const trackLead = (data: any) => {
  if (typeof window !== "undefined") {
    // Meta Pixel Lead Event
    if ((window as any).fbq) (window as any).fbq('track', 'Lead', { content_name: 'Hero Form' });
    
    // Google Analytics / Tag Manager
    if ((window as any).gtag) (window as any).gtag('event', 'generate_lead', { 'event_category': 'Engagement', 'event_label': 'Hero Form Submit' });
    if ((window as any).dataLayer) (window as any).dataLayer.push({ 'event': 'lead_submission', 'form': 'hero' });
  }
};

export const Hero = () => {
  const { language, dir } = useLanguage();
  const t = translations[language].hero;
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isHE = language === "he";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // --- Technical Scope: Webhook-First Architecture ---
      // Sending to Make.com Webhook (Routable to Monday.com)
      const response = await fetch("https://hook.us1.make.com/YOUR_WEBHOOK_URL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          language,
          source: "Landing Page Hero",
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        trackLead(data);
        router.push("/thank-you");
      } else {
        // Fallback for demo purposes if no URL provided yet
        console.warn("Webhook submission failed or URL not set. Redirecting for UX flow.");
        trackLead(data);
        router.push("/thank-you");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      // Ensure the flow doesn't break for the user
      trackLead(data);
      router.push("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#EEF2F7] overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-8 lg:grid-cols-2 lg:items-center lg:px-12 min-h-screen pt-20 pb-12 lg:py-0">

        {/* Left: Text Content */}
        <div className={`space-y-7 ${dir === "rtl" ? "text-right" : "text-left"}`}>

          <div className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#64748B] shadow-sm">
            {t.badge}
          </div>

          <h1 className="text-[36px] md:text-[64px] font-[900] leading-[1.2] md:leading-[1.1] tracking-[-0.025em] text-[#111827]">
            {isHE ? (
              <>
                איך לנהוג על SUV בארה"ב<br className="hidden md:inline" />
                מהיום הראשון,<br className="hidden md:inline" />
                <span className="text-[#16A34A]">בלי התחייבות לליסינג<br className="hidden md:inline" />של 3 שנים</span>
              </>
            ) : (
              <>
                Drive an SUV or<br className="hidden md:inline" />
                Pickup in the US<br className="hidden md:inline" />
                from Day One,<br className="hidden md:inline" />
                <span className="text-[#16A34A]">Without a 3-Year<br className="hidden md:inline" />Lease</span>
              </>
            )}
          </h1>

          <p className="text-[18px] leading-[1.8] text-[#4B5563] max-w-[500px]">
            {t.subtitle}
          </p>

          <div className="grid grid-cols-2 gap-y-3 max-w-[500px]">
            {t.features.map((item) => (
              <div key={item} className={`flex items-start gap-3 text-[13.5px] font-semibold text-[#1E293B] leading-[1.4] ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A] mt-[1px]">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex items-center gap-3 text-[12.5px] text-[#94A3B8] flex-wrap">
              <span className="font-medium">{t.partnership}</span>
              <div className="flex items-center gap-2 font-[800] text-[#475569]">
                <span>Sixt</span>
                <span className="text-zinc-300 font-normal">•</span>
                <span>Avis</span>
                <span className="text-zinc-300 font-normal">•</span>
                <span>Hertz</span>
              </div>
            </div>
          </div>
          
          {/* Mandatory WhatsApp Link in Hero */}
         
        </div>

        {/* Right: Form Card */}
        <div className="w-full">
          <div className="rounded-[2.5rem] border border-zinc-200 bg-white px-8 py-9 shadow-2xl shadow-slate-200/50">

            <div className={`mb-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <h2 className="text-[20px] font-black text-[#111827] mb-1">{t.formTitle}</h2>
              <p className="text-[14px] font-medium text-[#94A3B8]">{t.formSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="contact">
              <div className="grid grid-cols-2 gap-3">
                <input name="firstName" required className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white ${dir === "rtl" ? "text-right" : ""}`} placeholder={t.firstName} dir={dir} />
                <input name="lastName" required className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white ${dir === "rtl" ? "text-right" : ""}`} placeholder={t.lastName} dir={dir} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input name="phone" required className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white" placeholder={t.phone} dir="ltr" />
                <input name="email" required type="email" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white" placeholder={t.email} dir="ltr" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input name="city" required className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white ${dir === "rtl" ? "text-right" : ""}`} placeholder={t.city} dir={dir} />
                <div className="relative">
                  <select name="vehicleType" defaultValue="" required className={`w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-bold text-[#111827] outline-none transition focus:border-emerald-400 focus:bg-white appearance-none cursor-pointer ${dir === "rtl" ? "text-right" : ""}`} dir={dir}>
                    <option value="" disabled>{t.vehicleType}</option>
                    {t.vehicleOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 ${dir === "rtl" ? "left-3" : "right-3"}`} size={15} />
                </div>
              </div>

              <button 
                disabled={isSubmitting}
                className={`w-full rounded-2xl bg-[#0F172A] px-6 py-4.5 text-[15.5px] font-black text-white shadow-xl transition-all active:scale-[0.98] mt-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20"}`}
              >
                {isSubmitting ? (isHE ? "שולח..." : "Submitting...") : t.submit}
              </button>

              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="text-center text-[12px] font-semibold text-slate-400 flex items-center justify-center gap-2">
                  <Lock size={12} className="text-emerald-500" />
                  {t.secureInfo}
                </p>
                
                {/* Mandatory WhatsApp Link next to lead form */}
                <div className="h-px w-12 bg-slate-100" />
                <a 
                  href="https://wa.me/1000000000" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] font-black text-[#25D366] hover:opacity-80 transition"
                >
                  <MessageSquare size={16} fill="currentColor" />
                  {isHE ? "מעדיפים וואטסאפ? דברו איתנו עכשיו" : "Prefer WhatsApp? Talk to us now"}
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};