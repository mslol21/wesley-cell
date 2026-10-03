import React from "react";
import Image from "next/image";
import { MessageSquare, ArrowDown, MapPin, Check, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[var(--border)] overflow-hidden bg-tech-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Immediate conversion & clarity */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 self-start px-2.5 py-1 rounded-[var(--radius-sm)] bg-[var(--primary)]/10 border border-[var(--primary)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-light)] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--primary-light)]">
                {SITE_CONFIG.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {SITE_CONFIG.headline}
            </h1>

            {/* Short text */}
            <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-xl font-normal">
              {SITE_CONFIG.subheadline}
            </p>

            {/* Location Badge */}
            <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground-muted)]">
              <MapPin className="w-4 h-4 text-[var(--primary-light)] shrink-0" />
              <span>
                Atendimento no balcão:{" "}
                <strong className="text-white font-semibold">
                  {SITE_CONFIG.address.street}
                </strong>{" "}
                (Zona Leste)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá! Encontrei a Wesley Cell pelo site e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto justify-center text-sm sm:text-base font-semibold h-12 px-6 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  PEDIR ORÇAMENTO
                </Button>
              </a>

              <a href="#servicos" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center text-sm h-12 px-5 font-semibold"
                >
                  <ArrowDown className="w-4 h-4 mr-2" />
                  VER SERVIÇOS
                </Button>
              </a>
            </div>

            {/* Fast Trust Cues */}
            <div className="mt-8 pt-5 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[var(--foreground-muted)]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--primary-light)] shrink-0" />
                <span>Orçamento direto e sem enrolação</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--primary-light)] shrink-0" />
                <span>Celulares e Tablets</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <Check className="w-3.5 h-3.5 text-[var(--primary-light)] shrink-0" />
                <span>Loja física na Zona Leste</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Wesley Cell Visual Badge & Workshop Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-gradient-to-b from-[#0f1b34] to-[#0a1224] overflow-hidden shadow-xl">
              {/* Card top bar */}
              <div className="px-5 py-3 border-b border-[var(--border)] bg-[#0d162a]/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary-light)]" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Identidade Oficial Wesley Cell
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--primary-light)] uppercase tracking-wider">
                  Bancada Especializada
                </span>
              </div>

              {/* Center visual: Official circular logo presentation */}
              <div className="p-6 sm:p-8 flex flex-col items-center text-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden mx-auto mb-4 border border-[var(--primary)]/40 shadow-xl bg-[#061129]">
                  <Image
                    src="/logo-circle.png"
                    alt="Wesley Cell Logotipo"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-cover rounded-full"
                    priority
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Soluções em Celulares e Tablets
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] mt-1.5 max-w-xs leading-relaxed">
                  Assistência técnica especializada com laboratório de bancada próprio na Rua Inácio Monteiro, 762.
                </p>

                {/* Specialties chip tags */}
                <div className="mt-5 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium text-[var(--foreground-muted)]">
                  <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-white">
                    Telas & Displays
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-white">
                    Baterias
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-white">
                    Conectores
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-white">
                    Placa Lógica
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-white">
                    Tampa Traseira iPhone
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[var(--surface-elevated)] border border-[var(--border)] text-white">
                    Face ID
                  </span>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] w-full flex items-center justify-between text-xs">
                  <span className="text-[var(--foreground-dim)] font-mono">
                    (11) 94889-6283
                  </span>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary-light)] hover:text-white font-semibold transition-colors"
                  >
                    Chamar no WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
