import React from "react";
import { MessageSquare, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

const FLOW_STEPS = [
  {
    step: "01",
    title: "Chame no WhatsApp",
    desc: "Explique o que aconteceu com o aparelho e envie o modelo. Você pode tirar fotos do defeito se quiser.",
  },
  {
    step: "02",
    title: "Receba o pré-orçamento",
    desc: "Avaliamos a disponibilidade das peças e passamos uma previsão de valor e prazo de forma transparente.",
  },
  {
    step: "03",
    title: "Traga na loja física",
    desc: "Estamos na Rua Inácio Monteiro, 762, na Zona Leste de São Paulo. Deixe seu celular direto na bancada.",
  },
  {
    step: "04",
    title: "Retire o aparelho pronto",
    desc: "O serviço é executado com precisão e testado no balcão antes da entrega para você.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="processo" className="py-14 sm:py-20 border-b border-[var(--border)] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Passo a Passo"
          title="Como funciona o atendimento na Wesley Cell"
          description="Sem complicações: consulte antes pelo WhatsApp ou venha direto ao nosso balcão."
        />

        {/* Clean, editorial progression timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {FLOW_STEPS.map((item) => (
            <div
              key={item.step}
              className="border-t border-[var(--border-strong)] pt-4 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-[var(--primary)] block mb-2">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom actionable strip */}
        <div className="mt-10 p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--foreground-muted)]">
            <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0" />
            <span>
              Endereço: <strong className="text-[var(--foreground)]">{SITE_CONFIG.address.street}</strong> — Zona Leste, SP
            </span>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Encontrei a Wesley Cell pelo site e gostaria de tirar uma dúvida sobre o conserto do meu celular.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="whatsapp" size="sm" className="w-full sm:w-auto text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              Chamar no WhatsApp agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
