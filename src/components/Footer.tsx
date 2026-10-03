import React from "react";
import { Wrench, Phone, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#080b13] text-[var(--foreground-muted)] text-xs border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--primary)]">
                <Wrench className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
                WESLEY CELL
              </span>
            </div>
            <p className="leading-relaxed text-xs">
              Assistência técnica especializada em reparos de celulares e tablets. Troca de telas, baterias, conectores e placas com atendimento no balcão da Zona Leste.
            </p>
            <div className="pt-1">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline inline-flex items-center gap-1.5 font-medium"
              >
                <span>Instagram: {SITE_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#diagnostico" className="hover:text-white transition-colors">
                  O que aconteceu com seu celular?
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços especializados
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  Como funciona o atendimento
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização da loja
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Atendimento e Balcão
            </h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.region} — {SITE_CONFIG.address.city}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-white font-medium">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          {/* Horários */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>Horários de Funcionamento</span>
            </h4>
            <div className="space-y-1.5 text-xs text-[var(--foreground-muted)]">
              {SITE_CONFIG.hours.map((h, i) => (
                <div key={i} className="flex justify-between py-1 border-b border-[var(--border)] last:border-none">
                  <span>{h.days}</span>
                  <span className="text-[var(--foreground)] font-mono">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--foreground-dim)]">
          <p>© {new Date().getFullYear()} Wesley Cell — Assistência Técnica de Celulares e Tablets.</p>
          <p>Rua Inácio Monteiro, 762 — Zona Leste, São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
}
