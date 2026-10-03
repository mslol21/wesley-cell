"use client";

import React, { useState } from "react";
import {
  Smartphone,
  BatteryMedium,
  Zap,
  Cpu,
  Camera,
  Layers,
  Volume2,
  Tablet,
  MessageSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

interface ServiceItem {
  id: string;
  category: "comum" | "placa" | "iphone" | "tablet";
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  symptoms: string[];
  badge?: string;
  whatsappMessage: string;
}

const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "tela",
    category: "comum",
    title: "Troca de Tela e Display",
    subtitle: "Para iPhone, Samsung, Motorola, Xiaomi e outras marcas",
    desc: "Substituição completa do módulo frontal com toque preciso, calibração e acabamento limpo no balcão.",
    icon: Smartphone,
    symptoms: ["Vidro trincado", "Toque não responde", "Tela preta", "Linhas coloridas"],
    badge: "Mais Procurado",
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Gostaria de um orçamento para troca de tela do meu aparelho.",
  },
  {
    id: "bateria",
    category: "comum",
    title: "Troca de Bateria",
    subtitle: "Autonomia renovada e segurança térmica",
    desc: "Baterias com ciclo zero para aparelhos que descarregam rápido, desligam com carga ou estão estufando a tampa.",
    icon: BatteryMedium,
    symptoms: ["Descarrega rápido", "Desliga sozinho", "Bateria estufada", "Superaquecimento"],
    badge: "Reparo Rápido",
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Preciso trocar a bateria do meu celular e gostaria de um orçamento.",
  },
  {
    id: "conector",
    category: "comum",
    title: "Conector de Carga",
    subtitle: "Entradas USB Tipo-C, Lightning e Micro-USB",
    desc: "Reparo e substituição de conectores com mau contato, folga ou que não reconhecem o carregador.",
    icon: Zap,
    symptoms: ["Cabo precisa dobrar", "Não sobe carga", "Porta frouxa", "Aviso de umidade falso"],
    badge: "Reparo Rápido",
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Meu aparelho está com problema no conector de carga e gostaria de um orçamento.",
  },
  {
    id: "placa",
    category: "placa",
    title: "Reparo em Placa & Microssolda",
    subtitle: "Laboratório técnico para falhas eletrônicas complexas",
    desc: "Diagnóstico com fonte de bancada para celulares que não ligam, sofreram curto-circuito ou falha de CI de carga.",
    icon: Cpu,
    symptoms: ["Celular não liga", "Curto-circuito", "Falha de inicialização", "Não dá sinal"],
    badge: "Microssolda",
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Meu celular não liga e precisa de reparo em placa lógica. Gostaria de um orçamento.",
  },
  {
    id: "camera",
    category: "comum",
    title: "Câmeras & Vidro de Lente",
    subtitle: "Restauração ótica e de foco",
    desc: "Substituição de lentes externas trincadas ou troca de módulos de câmera fotográfica com imagem embaçada.",
    icon: Camera,
    symptoms: ["Lente trincada", "Foco tremendo", "Manchas pretas", "Erro ao abrir câmera"],
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Estou com problema na câmera / lente do meu celular e gostaria de um orçamento.",
  },
  {
    id: "iphone",
    category: "iphone",
    title: "Tampa de iPhone & Face ID",
    subtitle: "Especialidade para linha Apple iPhone",
    desc: "Troca da tampa traseira de vidro mantendo o alinhamento original do aro e manutenção técnica de Face ID.",
    icon: Layers,
    symptoms: ["Vidro traseiro quebrado", "Aro desalinhado", "Face ID indisponível", "Câmera TrueDepth"],
    badge: "Especial iPhone",
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Gostaria de um orçamento para troca de tampa traseira / Face ID de iPhone.",
  },
  {
    id: "audio-botoes",
    category: "comum",
    title: "Botões, Alto-Falante & Microfone",
    subtitle: "Restauração de comandos físicos e áudio",
    desc: "Troca de botões Power e Volume afundados, limpeza e substituição de microfones e alto-falantes de ligação.",
    icon: Volume2,
    symptoms: ["Áudio do WhatsApp mudo", "Som chiando", "Botão Power travado", "Não escuta ligações"],
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Estou com problema nos botões / áudio do meu celular e gostaria de um orçamento.",
  },
  {
    id: "tablets-sistema",
    category: "tablet",
    title: "Tablets & Recuperação de Sistema",
    subtitle: "Manutenção de tablets e restauração de software",
    desc: "Troca de telas e conectores em tablets e restauração de software oficial para celulares travados em loop na logo.",
    icon: Tablet,
    symptoms: ["Tela de tablet trincada", "Loop infinito na logo", "Memória travada", "Tablet não carrega"],
    badge: "Celulares e Tablets",
    whatsappMessage:
      "Olá! Encontrei a Wesley Cell pelo site. Gostaria de um orçamento para reparo de tablet / restauração de sistema.",
  },
];

export function ServicesHub() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const filtered =
    activeFilter === "todos"
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === activeFilter);

  return (
    <section id="servicos" className="py-14 sm:py-20 border-b border-[var(--border)] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Catálogo de Reparos"
          title="O que consertamos na Wesley Cell"
          description="Selecione o tipo de reparo necessário no seu celular ou tablet e peça uma estimativa de valor direta pelo WhatsApp:"
        />

        {/* Clean, intuitive filter pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveFilter("todos")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "todos"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)] hover:text-white hover:bg-[var(--surface-elevated)]"
            }`}
          >
            Todos os Reparos ({SERVICES_CATALOG.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("comum")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "comum"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)] hover:text-white hover:bg-[var(--surface-elevated)]"
            }`}
          >
            Telas, Baterias & Conectores
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("iphone")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "iphone"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)] hover:text-white hover:bg-[var(--surface-elevated)]"
            }`}
          >
            Tampa iPhone & Face ID
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("placa")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "placa"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)] hover:text-white hover:bg-[var(--surface-elevated)]"
            }`}
          >
            Placa & Microssolda
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("tablet")}
            className={`px-3.5 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === "tablet"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "bg-[var(--surface)] text-[var(--foreground-muted)] border border-[var(--border)] hover:text-white hover:bg-[var(--surface-elevated)]"
            }`}
          >
            Tablets & Sistema
          </button>
        </div>

        {/* Modern, high-density, beautifully structured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[#0d1527] p-5 sm:p-6 flex flex-col justify-between hover:border-[var(--primary)]/50 hover:bg-[#101930] transition-all group shadow-sm"
              >
                <div>
                  {/* Top line with Icon and Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[#142340] border border-[var(--border-strong)] flex items-center justify-center text-[var(--primary-light)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {item.badge && (
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--primary-light)] px-2 py-0.5 rounded bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & subtitle */}
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[var(--primary-light)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--foreground-dim)] font-medium mt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Common symptoms chips */}
                  <div className="mt-4 pt-3 border-t border-[var(--border)]">
                    <span className="text-[11px] font-semibold text-[var(--foreground-dim)] uppercase tracking-wider block mb-2">
                      Sintomas comuns:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.symptoms.map((symptom, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#162238] text-[var(--foreground-muted)] border border-[var(--border)]"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Conversion Button */}
                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <a
                    href={getWhatsAppUrl(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="whatsapp"
                      size="sm"
                      className="w-full justify-center text-xs font-semibold h-10 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                      <span>Pedir orçamento deste serviço</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 shrink-0" />
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner for personalized questions */}
        <div className="mt-10 p-5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">
              Seu aparelho tem outro defeito não listado acima?
            </h4>
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">
              Você pode explicar o problema e enviar o modelo direto no WhatsApp do nosso técnico.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Meu celular/tablet está com um defeito e gostaria de tirar uma dúvida sobre o conserto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0"
          >
            <Button variant="secondary" size="sm" className="w-full sm:w-auto font-semibold text-xs h-10 px-4">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[var(--primary-light)]" />
              Explicar defeito pelo WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
