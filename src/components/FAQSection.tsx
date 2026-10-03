"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

const QUESTIONS = [
  {
    q: "Posso enviar o modelo e explicar o defeito direto pelo WhatsApp?",
    a: "Sim, com certeza! É a forma mais rápida de atendimento. Você pode nos dizer a marca, o modelo e explicar o que aconteceu (ou até mandar foto do aparelho). Já respondemos com a estimativa de valor e disponibilidade de peças.",
  },
  {
    q: "Onde a loja fica localizada? Preciso agendar horário?",
    a: "Estamos localizados na Rua Inácio Monteiro, 762, na Zona Leste de São Paulo. Não é necessário agendar: você pode trazer seu aparelho diretamente no nosso balcão durante o horário de funcionamento.",
  },
  {
    q: "Vocês consertam tablets e marcas além de iPhone?",
    a: "Sim! Consertamos celulares e tablets de todas as principais marcas: iPhone, Samsung Galaxy, Motorola, Xiaomi, entre outras. Fazemos troca de tela, conector, bateria e placa para celulares e tablets.",
  },
  {
    q: "Vocês fazem troca de tampa traseira de iPhone e reparo em Face ID?",
    a: "Sim! Trabalhamos com manutenção especializada em iPhone, incluindo a substituição da tampa de vidro traseira danificada e reparos em circuitos e flex do Face ID.",
  },
  {
    q: "Quanto tempo demora em média um reparo?",
    a: "Serviços comuns como troca de tela, troca de bateria ou conector de carga costumam ser efetuados com agilidade quando temos a peça disponível para o seu modelo. Você pode confirmar o prazo exato pelo WhatsApp antes de sair de casa.",
  },
  {
    q: "Quais são as formas de pagamento aceitas na loja?",
    a: "Aceitamos Pix, cartões de crédito e débito e dinheiro. Consulte condições de parcelamento no balcão da loja.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-14 sm:py-20 border-b border-[var(--border)] scroll-mt-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tire suas Dúvidas"
          title="Perguntas frequentes sobre a assistência"
          description="Tudo o que você precisa saber antes de trazer seu celular ou tablet para a Wesley Cell."
        />

        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)]">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left flex justify-between items-center gap-4 py-1.5 focus-visible:outline-2 focus-visible:outline-[var(--border-focus)] rounded-sm cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-[var(--radius-sm)] flex items-center justify-center bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--foreground-muted)] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[var(--primary)]" : ""
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-2.5 pb-1 text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed animate-in fade-in duration-150">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[var(--foreground-muted)] text-center sm:text-left">
            Sua dúvida não está aqui? Pergunte diretamente no WhatsApp:
          </p>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre o conserto do meu aparelho na Wesley Cell.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="sm" className="text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              Tirar dúvida no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
