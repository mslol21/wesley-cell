import React from "react";
import { MapPin, Clock, Phone, Navigation, MessageSquare, Car } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-14 md:py-24 border-b border-[var(--border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="06 // Localização e Balcão"
          title="Onde Estamos e Como Chegar"
          description="Atendimento presencial no centro. Traga seu aparelho diretamente para a bancada técnica."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Dominant Map Container */}
          <div className="lg:col-span-7 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] overflow-hidden min-h-[340px] sm:min-h-[420px] flex flex-col justify-between relative shadow-md">
            {/* Visual map preview / embed */}
            <div className="relative w-full flex-1 bg-[#0b101c] overflow-hidden flex items-center justify-center">
              {/* Map grid aesthetic */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(#3b82f6 1px, transparent 1px), radial-gradient(#3b82f6 1px, #0b101c 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Center Map Pin Graphic */}
              <div className="relative z-10 text-center p-6 max-w-md">
                <div className="w-14 h-14 mx-auto rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg mb-3">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Wesley Cell — Assistência Técnica
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] mt-1">
                  {SITE_CONFIG.address.street} • {SITE_CONFIG.address.city}
                </p>
                <p className="text-[11px] text-[var(--primary)] mt-1 font-mono">
                  {SITE_CONFIG.address.reference}
                </p>

                <div className="mt-5 flex justify-center gap-3">
                  <a
                    href={SITE_CONFIG.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="sm">
                      <Navigation className="w-3.5 h-3.5 mr-1.5" />
                      Traçar rota no Maps
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Bottom Bar */}
            <div className="px-5 py-3.5 border-t border-[var(--border)] bg-[var(--surface-elevated)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--foreground-muted)] gap-2">
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Estacionamento rápido na rua e ponto de ônibus a 50m</span>
              </span>
              <span className="font-mono text-[11px] text-[var(--foreground-dim)]">
                CEP: {SITE_CONFIG.address.cep}
              </span>
            </div>
          </div>

          {/* Details & Hours Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6 space-y-5">
              <div>
                <h3 className="text-base font-bold text-[var(--foreground)] tracking-tight mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--primary)]" />
                  <span>Horários de Funcionamento</span>
                </h3>
                <div className="divide-y divide-[var(--border)] text-xs sm:text-sm">
                  {SITE_CONFIG.hours.map((h, i) => (
                    <div key={i} className="py-2.5 flex justify-between items-center">
                      <span className="text-[var(--foreground-muted)]">{h.days}</span>
                      <span className="font-mono font-medium text-[var(--foreground)]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <h3 className="text-base font-bold text-[var(--foreground)] tracking-tight mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--primary)]" />
                  <span>Endereço Completo</span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city} — CEP: {SITE_CONFIG.address.cep}
                  <br />
                  <span className="text-xs text-[var(--foreground-dim)] mt-1 block">
                    Ponto de referência: {SITE_CONFIG.address.reference}
                  </span>
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <h3 className="text-base font-bold text-[var(--foreground)] tracking-tight mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--primary)]" />
                  <span>Canais de Atendimento</span>
                </h3>
                <p className="text-xs text-[var(--foreground-muted)] mb-3">
                  Tire dúvidas sobre prazos e disponibilidade de peças antes de vir à loja:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppUrl("Olá! Gostaria de confirmar se estão abertos e tirar uma dúvida.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="whatsapp" size="sm" className="w-full justify-center text-xs">
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                    <Button variant="secondary" size="sm" className="w-full justify-center text-xs">
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      Ligar no balcão
                    </Button>
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
