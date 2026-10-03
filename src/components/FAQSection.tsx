"use client";

import React, { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Quanto tempo demora em média a troca de tela ou bateria?",
    answer:
      "A maioria das trocas de tela e substituições de bateria para os modelos mais populares (iPhone, Samsung Galaxy linha A e S, Motorola Moto G, Xiaomi Redmi) leva entre 40 a 90 minutos quando a peça está em estoque. Você pode aguardar na loja ou combinar um horário para retirada.",
  },
  {
    question: "Como funciona a garantia dos serviços?",
    answer:
      "Oferecemos garantia legal de 90 dias (conforme o Artigo 26 do Código de Defesa do Consumidor) para todos os reparos executados e peças substituídas em nossa bancada. A garantia cobre eventuais defeitos de fabricação do componente ou falha no serviço realizado. Não cobre danos por nova queda, trincados ou contato com líquidos pós-reparo.",
  },
  {
    question: "Preciso deixar a senha do meu celular na loja?",
    answer:
      "Para realizar o checklist pós-montagem (testar auricular, microfone, sensores de presença, câmeras e biometria), é recomendável fornecer a senha de bloqueio ou estar presente no momento dos testes de balcão. Reforçamos que jamais acessamos dados pessoais, mensagens ou aplicativos bancários.",
  },
  {
    question: "Se o celular molhou, ainda tem conserto?",
    answer:
      "Em muitos casos, sim! O fator determinante é a rapidez. Não tente carregar nem ligar o aparelho e NÃO o coloque em potes de arroz. Traga o mais rápido possível para a bancada: faremos a desmontagem completa, secagem e desoxidação química com ultrassom para evitar corrosão das trilhas de cobre.",
  },
  {
    question: "Vocês realizam reparos complexos em placa?",
    answer:
      "Sim. Realizamos microssolda eletrônica e diagnóstico com osciloscópio e multímetro de bancada para identificar curtos em linhas de alimentação, falhas em circuitos integrados (CIs de carga, áudio e alimentação) e recuperação de trilhas rompidas.",
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer:
      "Aceitamos Pix, cartões de crédito e débito das principais bandeiras (com opção de parcelamento sob consulta de taxa da maquininha) e dinheiro à vista.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-24 border-b border-[var(--border)] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="07 // Dúvidas Comuns"
          title="Perguntas Frequentes"
          description="Respostas diretas sobre prazos, peças, garantia e o dia a dia da bancada."
        />

        {/* Minimalist Accordion */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left flex justify-between items-center gap-4 py-2 group focus-visible:outline-2 focus-visible:outline-[var(--border-focus)] rounded-sm"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-[var(--radius-sm)] flex items-center justify-center bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--foreground-muted)] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[var(--primary)] border-[var(--primary)]/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Note */}
        <div className="mt-10 p-5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">
              Tem alguma dúvida específica sobre o seu aparelho?
            </p>
            <p className="text-xs text-[var(--foreground-muted)] mt-0.5">
              Respondemos rapidamente com a análise prévia do seu caso.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre um conserto que não encontrei no site.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="sm">
              <MessageSquare className="w-4 h-4 mr-1.5" />
              Tirar dúvida no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
