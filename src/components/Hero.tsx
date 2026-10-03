import React from "react";
import { MessageSquare, ArrowDown, MapPin, Wrench, Shield, Check } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Immediate clarity and fast conversion */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[var(--foreground-muted)]">
                {SITE_CONFIG.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.12]">
              {SITE_CONFIG.headline}
            </h1>

            {/* Short text */}
            <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed max-w-xl font-normal">
              {SITE_CONFIG.subheadline}
            </p>

            {/* Location & Quick Context Tag */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--foreground-muted)]">
              <MapPin className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
              <span>
                Atendimento no balcão:{" "}
                <strong className="text-[var(--foreground)] font-medium">
                  {SITE_CONFIG.address.street}
                </strong>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá! Encontrei a Wesley Cell pelo site e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto justify-center text-sm sm:text-base font-semibold h-12 px-6"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  PEDIR ORÇAMENTO
                </Button>
              </a>

              <a href="#servicos" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center text-sm h-12 px-5"
                >
                  <ArrowDown className="w-4 h-4 mr-2" />
                  VER SERVIÇOS
                </Button>
              </a>
            </div>

            {/* Fast Trust Cues (Authentic, not fictitious) */}
            <div className="mt-8 pt-5 border-t border-[var(--border)] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[var(--foreground-muted)]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <span>Orçamento sem enrolação</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <span>Celulares e Tablets</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <Check className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <span>Loja física na Zona Leste</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Technical Workshop Frame */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] overflow-hidden">
              {/* Technical Frame Top */}
              <div className="px-4 py-2.5 bg-[var(--surface-elevated)] border-b border-[var(--border)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span className="font-semibold text-[var(--foreground)] uppercase tracking-wider text-[11px]">
                    Bancada de Reparo • Wesley Cell
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[var(--foreground-dim)] uppercase">
                  Zona Leste, SP
                </span>
              </div>

              {/* Technical Bench Presentation */}
              <div className="p-5 sm:p-6 bg-[#0e1422] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--border)]">
                    <span className="text-xs font-mono text-[var(--primary)] font-semibold">
                      ESPECIALIDADES DE BANCADA
                    </span>
                    <span className="text-[11px] font-mono text-[var(--foreground-muted)]">
                      R. Inácio Monteiro, 762
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--foreground)]">
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--primary)] text-xs mt-0.5">01</span>
                      <div>
                        <strong>Telas e Displays:</strong> iPhone, Samsung, Moto, Xiaomi
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--primary)] text-xs mt-0.5">02</span>
                      <div>
                        <strong>Baterias e Conectores:</strong> Autonomia e recarga restabelecidas
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--primary)] text-xs mt-0.5">03</span>
                      <div>
                        <strong>Placas e Microssolda:</strong> Recuperação de circuitos lógicos
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="font-mono text-[var(--primary)] text-xs mt-0.5">04</span>
                      <div>
                        <strong>iPhone Especializado:</strong> Tampa traseira de vidro e Face ID
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <div className="text-[11px] text-[var(--foreground-muted)]">
                    Atendimento presencial ou pelo WhatsApp
                  </div>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--primary)] hover:text-white transition-colors"
                  >
                    Consultar agora →
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
