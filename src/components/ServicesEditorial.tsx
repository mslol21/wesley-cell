import React from "react";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  timeEstimate: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Troca de Tela e Módulo Frontal",
    description:
      "Substituição de displays AMOLED, OLED e IPS com calibração de touch, teste de biometria sob a tela e preservação dos sensores de proximidade e luz.",
    timeEstimate: "40 a 90 min",
    whatsappMessage: "Olá! Gostaria de um orçamento para troca de tela do meu aparelho na Wesley Cell.",
  },
  {
    number: "02",
    title: "Substituição de Bateria Homologada",
    description:
      "Baterias novas com ciclo zero, proteção contra sobretensão e estabilidade de recarga. Elimina reinicializações repentinas e superaquecimento.",
    timeEstimate: "30 a 60 min",
    whatsappMessage: "Olá! Preciso trocar a bateria do meu celular. Qual o valor e disponibilidade?",
  },
  {
    number: "03",
    title: "Reparo de Conector de Carga e Subplaca",
    description:
      "Troca e microssolda de portas USB Type-C e Lightning. Restauração do carregamento rápido (Fast Charge / Turbo Power) e comunicação OTG.",
    timeEstimate: "45 a 90 min",
    whatsappMessage: "Olá! Meu aparelho está com problema no conector de carga. Gostaria de um orçamento.",
  },
  {
    number: "04",
    title: "Desoxidação e Banho Químico em Cuba",
    description:
      "Tratamento de aparelhos que tiveram contato com água, suor ou umidade. Limpeza por ultrassom e álcool isopropílico para estancar corrosão.",
    timeEstimate: "Sob análise (24h)",
    whatsappMessage: "Olá! Meu celular molhou e preciso de uma desoxidação na bancada.",
  },
  {
    number: "05",
    title: "Câmeras e Substituição de Lente Traseira",
    description:
      "Troca do vidro externo da lente ou substituição do módulo da câmera fotográfica. Correção de foco vibrando, manchas no sensor e vidro trincado.",
    timeEstimate: "60 a 120 min",
    whatsappMessage: "Olá! Gostaria de cotar o reparo da câmera / lente do meu celular.",
  },
  {
    number: "06",
    title: "Reparo em Placa Lógica e Microeletrônica",
    description:
      "Diagnóstico com osciloscópio e fonte de bancada para identificação de curto-circuito, falhas no CI de carga (U2/Tristar/PMIC) e linhas principais.",
    timeEstimate: "24 a 72h úteis",
    whatsappMessage: "Olá! Meu celular não liga e necessita de reparo em placa. Gostaria de uma avaliação.",
  },
  {
    number: "07",
    title: "Recuperação de Software e Firmware Oficial",
    description:
      "Correção de loop infinito, travamentos no logo, lentidão severa e restauração segura de sistema operacional oficial sem gambiarras.",
    timeEstimate: "1 a 3 horas",
    whatsappMessage: "Olá! Meu celular está travado no sistema e preciso restaurar o software oficial.",
  },
  {
    number: "08",
    title: "Troca de Tampa Traseira e Aro Estrutural",
    description:
      "Substituição de tampas de vidro traseiras e carcaças empenadas, restabelecendo o alinhamento correto dos componentes internos e estética.",
    timeEstimate: "1 a 3 horas",
    whatsappMessage: "Olá! Gostaria de cotar a troca da tampa traseira / aro do meu smartphone.",
  },
];

export function ServicesEditorial() {
  return (
    <section id="servicos" className="py-14 md:py-24 border-b border-[var(--border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="02 // Catálogo de Serviços"
          title="Serviços Técnicos Executados na Bancada"
          description="Procedimentos padronizados com ferramental específico para cada fabricante, sem adaptações improvisadas."
        />

        {/* Editorial Layout: 2 Columns of Numbered Items with Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 border-t border-[var(--border)]">
          {SERVICES.map((service) => (
            <article
              key={service.number}
              className="py-6 sm:py-8 border-b border-[var(--border)] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-sm font-bold text-[var(--primary)] tracking-wider">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--foreground-dim)] px-2 py-0.5 rounded bg-[var(--surface-subtle)] border border-[var(--border)]">
                    {service.timeEstimate}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-[var(--foreground-muted)] leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3">
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--border-focus)] rounded-sm"
                >
                  <span>Solicitar orçamento deste serviço</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--primary)]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
