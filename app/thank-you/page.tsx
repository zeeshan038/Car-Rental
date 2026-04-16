"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl w-full bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-500">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 mx-auto mb-8">
          <CheckCircle2 size={44} strokeWidth={2.5} />
        </div>
        
        <h1 className="text-[34px] md:text-[42px] font-[900] text-slate-900 leading-tight mb-4 tracking-tight">
          Thank You!
        </h1>
        
        <p className="text-[17px] font-medium text-slate-500 leading-relaxed mb-10">
          Your request has been received. A human specialist will check availability in your area and contact you shortly (usually within 15-30 minutes during US business hours).
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <a 
            href="https://wa.me/1000000000" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-8 py-4.5 text-[15.5px] font-black text-white shadow-xl shadow-emerald-500/20 transition hover:bg-[#22bf5b] active:scale-[0.98]"
          >
            <MessageSquare size={18} />
            Chat on WhatsApp
          </a>
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-8 py-4.5 text-[15.5px] font-black text-slate-900 transition hover:bg-slate-200 active:scale-[0.98]"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
      
      <div className="mt-8 text-slate-400 text-[13px] font-medium">
        US Monthly Car Solutions — Expats First.
      </div>
    </div>
  );
}
