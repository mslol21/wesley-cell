import React from "react";
import { MessageSquare, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 border-b border-[var(--border)] bg-[#0d1320]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-2.5 inline-block">
          Atendimento Rápido no Balcão e WhatsApp
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-[1.15]">
          Precisa consertar seu celular ou tablet hoje?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[var(--foreground-muted)] max-w-xl mx-auto leading-relaxed">
          Envie o modelo do seu aparelho e descreva o problema no WhatsApp. Informamos a estimativa de valor e tiramos suas dúvidas na hora.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto justify-center text-sm font-semibold h-12 px-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              Pedir Orçamento no WhatsApp
            </Button>
          </a>

          <a href="#localizacao" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center text-xs sm:text-sm h-12 px-5">
              <MapPin className="w-4 h-4 mr-2" />
              Ver endereço na Zona Leste
            </Button>
          </a>
        </div>

        <p className="mt-5 text-[11px] text-[var(--foreground-dim)] font-mono">
          Rua Inácio Monteiro, 762 — Zona Leste, São Paulo/SP • WhatsApp: (11) 94889-6283
        </p>
      </div>
    </section>
  );
}
