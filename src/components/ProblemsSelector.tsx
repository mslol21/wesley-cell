"use client";

import React, { useState } from "react";
import {
  Smartphone,
  BatteryCharging,
  Zap,
  Droplets,
  Volume2,
  RotateCw,
  Camera,
  ShieldAlert,
  ArrowRight,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

interface ProblemItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  symptoms: string[];
  turnaround: string;
  whatsappText: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    id: "tela",
    title: "Tela trincada ou sem toque",
    shortDesc: "Vidro quebrado, manchas pretas, linhas coloridas ou toque não responde.",
    icon: Smartphone,
    symptoms: ["Display piscando", "Toque fantasma", "Vidro quebrado com tela preta"],
    turnaround: "40 a 90 minutos",
    whatsappText: "Olá! Meu celular quebrou a tela / parou de dar toque. Gostaria de um orçamento para a troca.",
  },
  {
    id: "bateria",
    title: "Bateria viciada ou estufada",
    shortDesc: "Descarrega rápido, desliga antes de 0% ou aparelho esquenta muito.",
    icon: BatteryCharging,
    symptoms: ["Tampa traseira levantando", "Desliga ao abrir a câmera", "Reinicia repentinamente"],
    turnaround: "30 a 60 minutos",
    whatsappText: "Olá! A bateria do meu celular está descarregando muito rápido / estufando. Gostaria de um orçamento para substituição.",
  },
  {
    id: "conector",
    title: "Não carrega ou mau contato",
    shortDesc: "Precisa dobrar o cabo, carregamento lento ou conector solto.",
    icon: Zap,
    symptoms: ["Aviso de umidade falso", "Cabo não encaixa até o final", "Carga intermitente"],
    turnaround: "45 a 90 minutos",
    whatsappText: "Olá! Meu celular não está carregando direito / conector com mau contato. Gostaria de saber o valor do reparo.",
  },
  {
    id: "molhou",
    title: "Caiu na água ou molhou",
    shortDesc: "Desligamento imediato, condensação na câmera ou oxidação de circuito.",
    icon: Droplets,
    symptoms: ["Não ligue o aparelho", "Não coloque no arroz", "Desoxidação em cuba ultrassônica"],
    turnaround: "Análise na bancada (24h)",
    whatsappText: "Olá! Meu celular molhou e preciso de uma desoxidação urgente na bancada.",
  },
  {
    id: "audio",
    title: "Sem som ou microfone mudo",
    shortDesc: "Não escuta chamadas, viva-voz baixo ou ninguém te ouve nos áudios.",
    icon: Volume2,
    symptoms: ["Áudio do WhatsApp mudo", "Auricular chiando", "Alto-falante distorcido"],
    turnaround: "45 a 90 minutos",
    whatsappText: "Olá! Meu celular está sem áudio / microfone mudo. Quanto fica o conserto?",
  },
  {
    id: "sistema",
    title: "Travado na logo ou reiniciando",
    shortDesc: "Fica em loop no logotipo da marca, travamentos ou erro de inicialização.",
    icon: RotateCw,
    symptoms: ["Memória cheia", "Falha após atualização", "Restauração de firmware limpo"],
    turnaround: "1 a 3 horas",
    whatsappText: "Olá! Meu celular está travado na tela da logo e reiniciando. Como posso proceder para orçar?",
  },
  {
    id: "camera",
    title: "Câmera borrada ou lente quebrada",
    shortDesc: "Vidro da lente estilhaçado, foco tremendo ou aviso de erro ao abrir.",
    icon: Camera,
    symptoms: ["Foco automático não trava", "Manchas escuras nas fotos", "Vidro externo quebrado"],
    turnaround: "1 a 2 horas",
    whatsappText: "Olá! A câmera / lente do meu celular quebrou. Gostaria de cotar a substituição.",
  },
  {
    id: "carcaca",
    title: "Tampa traseira ou chassi torto",
    shortDesc: "Traseira de vidro estilhaçada, aro amassado ou botões travados.",
    icon: ShieldAlert,
    symptoms: ["Vidro traseiro quebrado", "Botões laterais afundados", "Aro desalinhado"],
    turnaround: "1 a 3 horas",
    whatsappText: "Olá! A tampa traseira / carcaça do meu celular precisa ser trocada. Qual o orçamento?",
  },
];

export function ProblemsSelector() {
  const [selectedId, setSelectedId] = useState<string>("tela");

  const activeProblem = PROBLEMS.find((p) => p.id === selectedId) || PROBLEMS[0];
  const IconComponent = activeProblem.icon;

  return (
    <section id="problemas" className="py-12 md:py-20 border-b border-[var(--border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="01 // Seletor de Diagnóstico"
          title="Qual problema seu celular está apresentando?"
          description="Selecione o sintoma para entender a causa mais provável, estimativa de tempo de bancada e solicitar orçamento direto."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Functional Selector Grid - Not giant cards, compact & tactile */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROBLEMS.map((item) => {
              const ItemIcon = item.icon;
              const isSelected = item.id === selectedId;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={`group relative text-left p-4 rounded-[var(--radius-sm)] border transition-all duration-150 cursor-pointer select-none ${
                    isSelected
                      ? "bg-[var(--surface-elevated)] border-[var(--primary)] shadow-sm"
                      : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[#131b2b]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--surface-elevated)] text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                      }`}
                    >
                      <ItemIcon className="w-4 h-4 stroke-[1.75]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-sm font-semibold truncate ${
                            isSelected ? "text-white" : "text-[var(--foreground)]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[var(--foreground-muted)] mt-1 line-clamp-2 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Direct Action Link */}
                  <div className="mt-3 pt-2.5 border-t border-[var(--border)] flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-[var(--foreground-dim)]">
                      {item.turnaround}
                    </span>
                    <a
                      href={getWhatsAppUrl(item.whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center text-[var(--primary)] hover:text-white font-medium group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Consultar</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Problem Summary & Direct WhatsApp Action Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface-elevated)] p-6 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">
                <span>Diagnóstico Selecionado</span>
              </div>

              <div className="flex items-center gap-3.5 mt-2 pb-4 border-b border-[var(--border)]">
                <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary)] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {activeProblem.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--foreground-muted)] mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--primary)]" />
                    <span>Tempo médio de reparo: {activeProblem.turnaround}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-dim)] mb-2">
                  Sintomas e observações de bancada:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--foreground-muted)]">
                  {activeProblem.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <p className="text-xs text-[var(--foreground-muted)] mb-3">
                  Para informar a marca e o modelo do seu celular e obter um valor exato:
                </p>
                <a
                  href={getWhatsAppUrl(activeProblem.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button variant="whatsapp" size="lg" className="w-full justify-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Pedir orçamento deste reparo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
