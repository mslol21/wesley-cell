"use client";

import React, { useState } from "react";
import {
  Smartphone,
  BatteryMedium,
  Zap,
  Camera,
  Sliders,
  RotateCw,
  Cpu,
  Layers,
  HelpCircle,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

interface ProblemOption {
  id: string;
  label: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  whatsappText: string;
}

const PROBLEMS: ProblemOption[] = [
  {
    id: "tela",
    label: "Tela / Touch",
    title: "Problema na tela ou touch screen",
    desc: "Vidro quebrado, display piscando, tela preta, listras coloridas ou toque sem resposta.",
    icon: Smartphone,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Estou com problema na tela do meu celular e gostaria de solicitar um orçamento.",
  },
  {
    id: "bateria",
    label: "Bateria",
    title: "Bateria descarregando rápido ou estufada",
    desc: "Aparelho desliga sozinho antes de zerar, esquenta no uso simples ou a tampa traseira está levantando.",
    icon: BatteryMedium,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Preciso trocar a bateria do meu celular e gostaria de um orçamento.",
  },
  {
    id: "conector",
    label: "Não carrega",
    title: "Não carrega ou mau contato no cabo",
    desc: "Cabo precisa ficar em uma posição específica para carregar, porta frouxa ou aviso de erro na entrada.",
    icon: Zap,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Meu aparelho não está carregando direito e gostaria de um orçamento para o conector.",
  },
  {
    id: "camera",
    label: "Câmera",
    title: "Câmera embaçada ou lente quebrada",
    desc: "Vidro externo da câmera trincado, fotos fora de foco, manchas escuras ou aplicativo fecha sozinho.",
    icon: Camera,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Estou com problema na câmera do meu celular e gostaria de um orçamento.",
  },
  {
    id: "botoes",
    label: "Botões",
    title: "Botão Power ou Volume não funciona",
    desc: "Botões travados, afundados, aparelho não bloqueia nem liga sem o carregador conectado.",
    icon: Sliders,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Os botões do meu aparelho não estão funcionando e gostaria de um orçamento.",
  },
  {
    id: "sistema",
    label: "Sistema",
    title: "Travado na logo ou reiniciando",
    desc: "Aparelho fica em loop de inicialização na logo da marca, memória cheia travando ou erro no sistema.",
    icon: RotateCw,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Meu aparelho está travado no sistema e gostaria de uma avaliação.",
  },
  {
    id: "placa",
    label: "Placa Lógica",
    title: "Celular não liga ou em curto",
    desc: "Aparelho apagou completamente, sofreu queda grave ou requer análise técnica com microssolda.",
    icon: Cpu,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Meu celular precisa de reparo em placa lógica e gostaria de um orçamento.",
  },
  {
    id: "iphone",
    label: "Tampa iPhone / Face ID",
    title: "Tampa traseira de iPhone ou Face ID",
    desc: "Substituição do vidro traseiro estilhaçado de iPhone e diagnóstico para sensores de Face ID.",
    icon: Layers,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Gostaria de um orçamento para troca da tampa traseira / Face ID do meu iPhone.",
  },
  {
    id: "outro",
    label: "Outro defeito",
    title: "Outro problema ou conserto de tablet",
    desc: "Áudio mudo, aparelho que molhou, reparos em tablets ou orçamento personalizado.",
    icon: HelpCircle,
    whatsappText:
      "Olá! Encontrei a Wesley Cell pelo site. Gostaria de explicar o defeito do meu aparelho para pedir um orçamento.",
  },
];

export function ProblemsSelector() {
  const [selectedId, setSelectedId] = useState<string>("tela");
  const selected = PROBLEMS.find((p) => p.id === selectedId) || PROBLEMS[0];
  const IconComponent = selected.icon;

  return (
    <section id="diagnostico" className="py-12 sm:py-16 md:py-20 border-b border-[var(--border)] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Diagnóstico Direto"
          title="O que aconteceu com seu celular?"
          description="Selecione o sintoma para enviar os detalhes no WhatsApp da Wesley Cell com mensagem já preparada:"
        />

        {/* Refined Problem Grid Selector - Tactile and functional, not oversized cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
          {PROBLEMS.map((item) => {
            const isSelected = item.id === selectedId;
            const ItemIcon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`p-3 sm:p-3.5 text-left rounded-[var(--radius-sm)] border transition-all text-xs font-medium flex flex-col justify-between min-h-[72px] sm:min-h-[80px] cursor-pointer ${
                  isSelected
                    ? "bg-[var(--surface-elevated)] border-[var(--primary)] text-white shadow-sm"
                    : "bg-[var(--surface)] border-[var(--border)] text-[var(--foreground-muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <ItemIcon
                    className={`w-4 h-4 ${
                      isSelected ? "text-[var(--primary)]" : "text-[var(--foreground-dim)]"
                    }`}
                  />
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />}
                </div>
                <span className="font-semibold mt-2 truncate w-full text-left">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Action Panel for Selected Item */}
        <div className="mt-6 p-5 sm:p-6 rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--surface)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--foreground)]">
                {selected.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">
                {selected.desc}
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-xs text-[var(--foreground-dim)]">
                <Check className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>Atendimento na Rua Inácio Monteiro, 762</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <a
              href={getWhatsAppUrl(selected.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto"
            >
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto justify-center text-sm font-semibold h-11 px-6"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Pedir orçamento deste problema
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
