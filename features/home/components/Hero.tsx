"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Lock, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const trackLead = (data: any) => {
  if (typeof window !== "undefined") {
    // Meta Pixel Lead Event
    if ((window as any).fbq) (window as any).fbq('track', 'Lead', { content_name: 'Hero Form' });
  
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

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://hook.us2.make.com/efhiasgqj4a5n336lp216f4lruat86n4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: `${data.firstName} ${data.lastName}`.trim(),
          Phone: data.phone,
          Email: data.email,
          "Car Type": data.vehicleType,
          Location: data.city
        }),
      });

      if (response.ok) {
        // Track conversion only on successful submission
        trackLead(data);
        router.push("/thank-you");
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError(isHE ? "שגיאה בשליחה. נסו שוב או פנו אלינו בוואטסאפ." : "Submission failed. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#EEF2F7] overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-12 min-h-screen pt-20 pb-12 lg:py-0">

        {/* Left: Text Content */}
        <div className={`space-y-6 ${dir === "rtl" ? "text-right" : "text-left"} lg:space-y-8`}>

          <div className={`inline-flex mx-auto lg:mx-0 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#64748B] shadow-sm ${dir === "rtl" ? "mr-0 ml-auto" : ""}`}>
            {t.badge}
          </div>

          <h1 className="text-[clamp(32px,8vw,64px)] font-[900] leading-[1.15] tracking-tight text-[#111827]">
            {t.title}
            <span className="text-[#16A34A] block md:inline mt-1 md:mt-0">
              {t.titleHighlight}
            </span>
            {t.titleEnd && <span className="text-[#111827] block md:inline mt-1 md:mt-0"> {t.titleEnd}</span>}
          </h1>

          <p className="text-[16px] md:text-[18px] leading-[1.6] md:leading-[1.8] text-[#4B5563] max-w-[500px] mx-auto lg:mx-0 mt-6 md:mt-8">
            {t.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 max-w-[500px] mx-auto lg:mx-0 text-right">
            {t.features.map((item) => (
              <div key={item} className={`flex items-start gap-3 text-[14px] font-semibold text-[#1E293B] leading-[1.4] ${dir === "rtl" ? "flex-row-reverse text-right" : "text-left"}`}>
                <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A] mt-[2px]">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
            <div className="flex items-center gap-3 text-[12.5px] text-[#94A3B8] flex-wrap justify-center lg:justify-start">
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
          <div className="rounded-2xl md:rounded-[2.5rem] border border-zinc-200 bg-white px-4 py-6 md:px-8 md:py-9 shadow-2xl shadow-slate-200/50">

            <div className={`mb-6 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <h2 className="text-[20px] font-black text-[#111827] mb-1">{t.formTitle}</h2>
              <p className="text-[14px] font-medium text-[#94A3B8]">{t.formSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="contact">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="firstName" required className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white ${dir === "rtl" ? "text-right" : ""}`} placeholder={t.firstName} dir={dir} />
                <input name="lastName" required className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white ${dir === "rtl" ? "text-right" : ""}`} placeholder={t.lastName} dir={dir} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input 
                  name="phone" 
                  required 
                  type="tel"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white" 
                  placeholder={t.phone} 
                  dir="ltr" 
                />
                <input name="email" required type="email" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white" placeholder={t.email} dir="ltr" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input name="city" required className={`rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-semibold text-[#111827] placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:bg-white ${dir === "rtl" ? "text-right" : ""}`} placeholder={t.city} dir={dir} />
                <div className="relative">
                  <select name="vehicleType" defaultValue="" required className={`w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-[14px] font-bold text-[#111827] outline-none transition focus:border-emerald-400 focus:bg-white appearance-none cursor-pointer ${dir === "rtl" ? "text-right" : ""}`} dir={dir}>
                    <option value="" disabled>{t.vehicleType}</option>
                    {t.vehicleOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 ${dir === "rtl" ? "left-3" : "right-3"}`} size={15} />
                </div>
              </div>

              {error && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13px] font-medium text-red-600 text-center">
                  {error}
                </div>
              )}

              <button 
                disabled={isSubmitting}
                className={`w-full rounded-2xl bg-[#0F172A] px-6 py-4.5 text-[15.5px] font-black text-white shadow-xl transition-all active:scale-[0.98] mt-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-800 hover:shadow-2xl hover:shadow-slate-900/20"}`}
              >
                {isSubmitting ? (isHE ? "שולח..." : "Submitting...") : t.submit}
              </button>

              <div className="flex flex-col items-center gap-3 pt-2">
                <p className="text-center text-[11px] font-medium text-slate-400 flex items-start justify-center gap-1.5">
                  <Lock size={11} className="text-emerald-500 shrink-0 mt-[1px]" />
                  <span>{t.secureInfo}</span>
                </p>
                
                {/* WhatsApp Link */}
                <a 
                  href="https://wa.me/17864477656?text=%D7%94%D7%99%D7%99%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A8%D7%9B%D7%91%20%D7%A9%D7%9C%20DriveFlex%20USA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1.5 text-[12px] font-semibold text-[#25D366] transition hover:bg-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {isHE ? "דברו איתנו בוואטסאפ" : "Chat on WhatsApp"}
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};