import React from "react";
import { Shield, Sparkles, BatteryMedium, Cable, Headphones, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

interface Category {
  id: string;
  name: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  items: string[];
}

const CATEGORIES: Category[] = [
  {
    id: "peliculas",
    name: "Películas de Proteção de Alta Dureza",
    badge: "Aplicação sem bolhas na loja",
    icon: Shield,
    description: "Películas de vidro 9D, cerâmica fosca antirreflexo e privacidade com corte preciso para cada display.",
    items: ["Vidro temperado 9D com borda preta", "Cerâmica inquebrável fosca", "Película de privacidade lateral"],
  },
  {
    id: "capas",
    name: "Capas Antichoque e de Absorção",
    badge: "Proteção contra quedas",
    icon: Sparkles,
    description: "Modelos com cantos reforçados (air cushion), bordas elevadas sobre a câmera e acabamento aveludado interno.",
    items: ["Silicone aveludado anti-impacto", "Borda reforçada transparente", "Capas compatíveis com MagSafe / indução"],
  },
  {
    id: "carregadores",
    name: "Fontes de Carga Homologadas",
    badge: "Certificação Anatel",
    icon: BatteryMedium,
    description: "Fontes Turbo Power e USB-C Power Delivery (20W, 30W, 65W) que não danificam a vida útil da bateria.",
    items: ["Fontes 20W USB-C PD para iPhone", "Carregadores Turbo 33W/67W", "Fontes universais bivolt com chip inteligente"],
  },
  {
    id: "cabos",
    name: "Cabos Reforçados Blindados",
    badge: "Nylon trançado",
    icon: Cable,
    description: "Cabos resistentes à dobra com pontas reforçadas em alumínio, com suporte simultâneo a carga rápida e dados.",
    items: ["Tipo-C para Tipo-C (60W / 100W)", "Tipo-C para Lightning", "USB padrão para Tipo-C e Micro-USB"],
  },
  {
    id: "audio",
    name: "Áudio e Adaptadores",
    badge: "DAC de alta fidelidade",
    icon: Headphones,
    description: "Adaptadores Type-C / Lightning para P2 (3.5mm) com conversor digital embutido e fones de ouvido confortáveis.",
    items: ["Adaptadores P2 com chip DAC", "Fones intra-auriculares ergonômicos", "Fones Bluetooth homologados"],
  },
];

export function Accessories() {
  return (
    <section id="acessorios" className="py-14 md:py-24 border-b border-[var(--border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="05 // Proteção e Acessórios"
          title="Acessórios Homologados para o Dia a Dia"
          description="Itens testados e selecionados para proteger o investimento feito no seu aparelho celular."
        />

        {/* Visual composition with categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.id}
                className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] p-6 flex flex-col justify-between hover:border-[var(--border-strong)] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)]">
                      <CatIcon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground-muted)] px-2 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border)]">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[var(--foreground)] tracking-tight">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[var(--foreground-muted)] mt-2 leading-relaxed">
                    {cat.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-[var(--border)] pt-3 text-xs text-[var(--foreground-dim)]">
                    {cat.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-[var(--border)]">
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de consultar modelos e valores de ${cat.name.toLowerCase()} na Wesley Cell.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[var(--primary)] hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>Consultar modelos em estoque →</span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Highlight Tile */}
          <div className="rounded-[var(--radius-sm)] border border-[var(--primary)]/30 bg-[#0c1527] p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--primary)] px-2 py-0.5 rounded bg-[var(--primary-subtle)] border border-[var(--primary)]/30 inline-block mb-3">
                Aplicação Imediata
              </span>
              <h3 className="text-base font-bold text-white tracking-tight">
                Instalamos sua película no balcão
              </h3>
              <p className="text-xs text-[var(--foreground-muted)] mt-2 leading-relaxed">
                Comprou a película ou trouxe o aparelho para conserto? Fazemos a limpeza técnica com álcool isopropílico e aplicação precisa sem bolhas nem poeira.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)]">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de colocar uma película no meu celular. Vocês têm disponível para o meu modelo?")}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="whatsapp" size="sm" className="w-full justify-center">
                  <MessageSquare className="w-4 h-4 mr-1.5" />
                  Verificar película para meu modelo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
