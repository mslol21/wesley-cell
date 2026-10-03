"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the Hero
      if (window.scrollY > 340) {
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
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0b0f19]/95 backdrop-blur-md border-t border-[var(--border)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-xl transition-all duration-200"
      role="region"
      aria-label="Atalho de contato rápido"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="h-11 px-3.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)] flex items-center justify-center shrink-0 active:scale-95 transition-all"
          aria-label="Ligar para a loja"
        >
          <Phone className="w-4 h-4 text-[var(--primary)]" />
        </a>

        <a
          href={getWhatsAppUrl("Olá! Encontrei a Wesley Cell pelo site e gostaria de solicitar um orçamento.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-11 px-4 rounded-[var(--radius-sm)] bg-[var(--whatsapp)] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">Pedir orçamento no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
