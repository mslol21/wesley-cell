import React from "react";
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-14 sm:py-20 border-b border-[var(--border)] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Onde Estamos"
          title="Loja física na Zona Leste de São Paulo"
          description="Venha até a Wesley Cell para uma análise presencial ou tire suas dúvidas antes de sair de casa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Clear Location & Contact Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] p-6 space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] block mb-1">
                  Endereço Oficial
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                  {SITE_CONFIG.address.street}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-1">
                  {SITE_CONFIG.address.region} — {SITE_CONFIG.address.city}
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <a
                    href={SITE_CONFIG.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="md" className="font-semibold text-xs">
                      <Navigation className="w-3.5 h-3.5 mr-1.5" />
                      COMO CHEGAR (GOOGLE MAPS)
                    </Button>
                  </a>
                  <a
                    href={getWhatsAppUrl("Olá! Gostaria de confirmar o endereço da Wesley Cell.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" size="md" className="font-semibold text-xs">
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span>Horários de Atendimento no Balcão</span>
                </h4>
                <div className="space-y-1.5 text-xs text-[var(--foreground-muted)]">
                  {SITE_CONFIG.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-[var(--border)] last:border-none">
                      <span>{h.days}</span>
                      <strong className="text-[var(--foreground)] font-mono">{h.time}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[var(--foreground-dim)] block">Telefone e WhatsApp:</span>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-[var(--foreground)] font-bold hover:text-[var(--primary)]">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-[var(--foreground-dim)] block">Instagram Oficial:</span>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    {SITE_CONFIG.instagramHandle}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dark Map Frame */}
          <div className="lg:col-span-6 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] overflow-hidden flex flex-col justify-between min-h-[320px]">
            {/* Visual map preview header */}
            <div className="px-4 py-3 bg-[var(--surface-elevated)] border-b border-[var(--border)] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--primary)]" />
                <span className="font-semibold text-[var(--foreground)]">
                  Rua Inácio Monteiro, 762
                </span>
              </div>
              <span className="text-[11px] font-mono text-[var(--foreground-dim)]">
                Zona Leste • SP
              </span>
            </div>

            {/* Map Canvas Graphic */}
            <div className="relative flex-1 bg-[#090e18] p-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)] text-[var(--primary)] flex items-center justify-center mb-3">
                <Navigation className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">
                Ponto de Atendimento Wesley Cell
              </h4>
              <p className="text-xs text-[var(--foreground-muted)] max-w-sm mt-1">
                Fácil localização na principal via da região da Cidade Tiradentes / Guaianases na Zona Leste.
              </p>

              <div className="mt-5">
                <a
                  href={SITE_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="sm" className="text-xs">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Abrir no aplicativo de mapas
                  </Button>
                </a>
              </div>
            </div>

            <div className="px-4 py-2.5 bg-[var(--surface-elevated)] border-t border-[var(--border)] text-[11px] text-[var(--foreground-dim)] text-center sm:text-left">
              Traga seu celular diretamente na loja para avaliação física da bancada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
