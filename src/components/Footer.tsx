import React from "react";
import { Wrench, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#070a11] text-[var(--foreground-muted)] text-xs border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--primary)]">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-bold text-base tracking-tight text-[var(--foreground)]">
                WESLEY CELL
              </span>
            </div>
            <p className="leading-relaxed">
              Assistência técnica especializada em reparo e manutenção física e de software de smartphones. Diagnóstico transparente e peças com garantia.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground-muted)] hover:text-white hover:border-[var(--border-strong)] transition-colors"
                aria-label="Instagram Wesley Cell"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-[1.75]"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#problemas" className="hover:text-white transition-colors">
                  Identificar problemas
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Tabela de serviços
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">
                  Como funciona o reparo
                </a>
              </li>
              <li>
                <a href="#acessorios" className="hover:text-white transition-colors">
                  Películas e acessórios
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Endereço e horários
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Atendimento
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.street}
                  <br />
                  {SITE_CONFIG.address.city}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-white">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>
                  Seg a Sex: 08:30 às 18:30
                  <br />
                  Sábados: 08:30 às 13:00
                </span>
              </p>
            </div>
          </div>

          {/* Legal Warranty Box */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--success)]" />
              <span>Garantia Legal</span>
            </h4>
            <div className="p-3.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] text-[11px] leading-relaxed">
              {SITE_CONFIG.warranty}
            </div>
            <p className="text-[11px] text-[var(--foreground-dim)]">
              Ordem de serviço impressa e digital emitida em todo atendimento.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[var(--foreground-dim)]">
          <p>© {new Date().getFullYear()} Wesley Cell. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em usabilidade, precisão técnica e acessibilidade.</p>
        </div>
      </div>
    </footer>
  );
}
