"use client";

import { LanguageProvider } from "@/features/home/context/LanguageContext";
import { Navbar } from "@/features/home/components/Navbar";
import { Hero } from "@/features/home/components/Hero";
import { Story } from "@/features/home/components/Story";
import { Comparison } from "@/features/home/components/Comparison";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { FAQ } from "@/features/home/components/FAQ";
import { FinalCTA } from "@/features/home/components/FinalCTA";
import { HomeFooter } from "@/features/home/components/HomeFooter";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Comparison />
          <HowItWorks />
          <FAQ />
          <FinalCTA />
        </main>
        <HomeFooter />
      </div>
    </LanguageProvider>
  );
}
