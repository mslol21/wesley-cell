import React from "react";
import { MessageSquare, ArrowDown, ShieldCheck, CheckCircle2, Clock } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Context tag */}
            <div className="inline-flex items-center gap-2 mb-4 self-start">
              <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)]">
                Bancada Ativa • Atendimento no Centro
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[var(--foreground)] tracking-tight leading-[1.12]">
              Conserto ágil e transparente para o seu celular.
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed max-w-2xl font-normal">
              Diagnóstico preciso, peças de alta qualidade e garantia legal de 90 dias.
              Fale direto com o técnico pelo WhatsApp e saiba prazo e valor antes de sair de casa.
            </p>

            {/* Main Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-lg">
              <a
                href={getWhatsAppUrl("Olá! Preciso consertar meu celular e gostaria de solicitar um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto justify-center text-base font-semibold"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Pedir orçamento no WhatsApp
                </Button>
              </a>

              <a href="#problemas" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto justify-center text-sm"
                >
                  <ArrowDown className="w-4 h-4 mr-2" />
                  Identificar meu problema
                </Button>
              </a>
            </div>

            {/* Trust Points - Subtle, non-cardified list */}
            <div className="mt-10 pt-6 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[var(--foreground-muted)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Garantia de 90 dias em todos os serviços</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Reparos comuns de 40 a 90 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span>Atendimento direto com quem repara</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Bench Visual Composition / Editorial Placeholder */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] overflow-hidden shadow-md">
              {/* Technical Bench Frame Header */}
              <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--success)]" />
                  <span className="text-xs font-semibold tracking-wide text-[var(--foreground)] uppercase">
                    Bancada Técnica Wesley Cell
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[var(--foreground-dim)]">
                  ESD-SAFE // REPAIR
                </span>
              </div>

              {/* Bench Image / Placeholder Display */}
              <div className="relative aspect-[4/3] bg-[#0b111e] p-6 flex flex-col justify-between overflow-hidden">
                {/* Visual Technical Grid Pattern - subtle */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Top Overlay Badges */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-[11px] font-mono bg-[#162032] border border-[var(--border)] text-[var(--foreground-muted)] rounded">
                    Microssolda & Troca de Peças
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-mono bg-[#162032] border border-[var(--border)] text-[var(--foreground-muted)] rounded">
                    Ferramental de Precisão
                  </span>
                </div>

                {/* Center Content: Realistic Bench Status */}
                <div className="relative z-10 my-auto py-4 text-center sm:text-left">
                  <div className="inline-block p-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] mb-3">
                    <svg
                      className="w-10 h-10 text-[var(--primary)] mx-auto sm:mx-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
                      <path d="M9 7h6" />
                      <path d="M9 11h6" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] tracking-wide">
                    Espaço reservado: Fotografia da Bancada Física
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)] mt-1 max-w-sm">
                    Exibição da estação de trabalho, microscópio e ferramental real da loja.
                    Substituível pelo arquivo fotográfico do estabelecimento.
                  </p>
                </div>

                {/* Bottom specs summary */}
                <div className="relative z-10 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px] text-[var(--foreground-muted)]">
                  <span>Apple • Samsung • Motorola • Xiaomi</span>
                  <span className="text-[var(--success)] font-medium">Balanço e testes rigorosos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
