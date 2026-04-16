"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export const StickyWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] md:hidden">
      <a 
        href="https://wa.me/1000000000" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 ring-4 ring-white transition-transform active:scale-90"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare size={32} fill="currentColor" />
      </a>
    </div>
  );
};
