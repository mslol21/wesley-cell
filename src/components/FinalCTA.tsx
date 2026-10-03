import React from "react";
import { MessageSquare, MapPin } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 border-b border-[var(--border)] bg-[#0a0f1b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-3 inline-block">
          Atendimento Direto e Sem Burocracia
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.15]">
          Celular parado custa tempo e produtividade.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
          Fale diretamente com quem vai realizar o serviço no seu smartphone. Peça uma previsão de valores e prazos agora mesmo pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de agilizar o conserto do meu celular na Wesley Cell.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto justify-center text-base">
              <MessageSquare className="w-5 h-5 mr-2" />
              Pedir orçamento no WhatsApp
            </Button>
          </a>

          <a href="#localizacao" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto justify-center text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Ver localização da loja
            </Button>
          </a>
        </div>

        <p className="mt-6 text-xs text-[var(--foreground-dim)] font-mono">
          Horário de atendimento: Seg a Sex das 08:30 às 18:30 • Sábados até 13:00
        </p>
      </div>
    </section>
  );
}
