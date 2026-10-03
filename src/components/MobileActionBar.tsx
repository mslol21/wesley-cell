"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the hero (approx 360px)
      if (window.scrollY > 360) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#090d16]/95 backdrop-blur-md border-t border-[var(--border)] px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg transition-transform duration-300 animate-in slide-in-from-bottom"
      role="region"
      aria-label="Ações rápidas de contato"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="h-11 px-3.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] flex items-center justify-center shrink-0 hover:bg-[#1f2b42] active:scale-95 transition-all"
          aria-label="Ligar para o balcão"
        >
          <Phone className="w-4 h-4 text-[var(--primary)]" />
        </a>

        <a
          href={getWhatsAppUrl("Olá! Gostaria de um orçamento rápido pelo WhatsApp da Wesley Cell.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 px-4 rounded-[var(--radius-sm)] bg-[var(--whatsapp)] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp — Pedir orçamento</span>
        </a>
      </div>
    </div>
  );
}
