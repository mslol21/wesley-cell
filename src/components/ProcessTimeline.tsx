import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

interface Step {
  step: string;
  title: string;
  description: string;
  detail: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Conte o sintoma",
    description: "Envie uma mensagem curta pelo WhatsApp relatando o que aconteceu com seu celular.",
    detail: "Exemplo: quebrou o vidro, não carrega ou molhou.",
  },
  {
    step: "02",
    title: "Informe marca e modelo",
    description: "Verificamos imediatamente o lote e a disponibilidade de peças compatíveis em nosso estoque.",
    detail: "Apple, Samsung, Motorola, Xiaomi, etc.",
  },
  {
    step: "03",
    title: "Receba o pré-orçamento",
    description: "Você fica ciente do valor aproximado e do tempo previsto de bancada antes de se deslocar.",
    detail: "Sem custos ou compromisso prévio.",
  },
  {
    step: "04",
    title: "Bancada e retirada testada",
    description: "Traga o aparelho, executamos o checklist de entrada, o reparo físico e os testes de saída.",
    detail: "Entrega com ordem de serviço e 90 dias de garantia.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="processo" className="py-14 md:py-24 border-b border-[var(--border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="03 // Como Funciona"
          title="Fluxo Simples: Do Primeiro Contato à Retirada"
          description="Transparência total. Sem termos técnicos confusos e sem surpresas no balcão."
        />

        {/* Visual Timeline with progression and large subtle numbers - NO 3 identical cards */}
        <div className="relative mt-10">
          {/* Subtle progression line in desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((item, index) => (
              <div key={item.step} className="relative flex flex-col pt-4">
                {/* Visual marker dot and large number */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[var(--foreground-dim)]/50 tracking-tight">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] ring-4 ring-[#090d16]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[var(--border)]">
                  <span className="text-[11px] font-mono text-[var(--foreground-dim)]">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline bottom CTA */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--foreground-muted)] text-center sm:text-left">
            Pronto para iniciar? Fale direto no WhatsApp da assistência:
          </p>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de consultar o orçamento para conserto do meu celular.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="md">
              <MessageSquare className="w-4 h-4 mr-2" />
              Iniciar contato pelo WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
