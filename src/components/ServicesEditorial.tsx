import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { SectionHeader } from "./ui/SectionHeader";

const SERVICES_LIST = [
  {
    num: "01",
    name: "Troca de Tela e Frontal",
    desc: "Substituição de displays para iPhone, Samsung, Motorola, Xiaomi e outras marcas. Reparo rápido com calibração de toque.",
    message: "Olá! Gostaria de um orçamento para troca de tela do meu aparelho na Wesley Cell.",
  },
  {
    num: "02",
    name: "Substituição de Bateria",
    desc: "Troca de baterias descarregando rápido, com vício ou estufadas. Autonomia e segurança restabelecidas.",
    message: "Olá! Preciso trocar a bateria do meu celular. Gostaria de um orçamento na Wesley Cell.",
  },
  {
    num: "03",
    name: "Conector de Carga",
    desc: "Conserto e troca de entradas Tipo-C, Lightning e Micro-USB que apresentam mau contato ou não carregam.",
    message: "Olá! Meu celular não está carregando e gostaria de um orçamento para o conector de carga.",
  },
  {
    num: "04",
    name: "Reparo de Placa Lógica",
    desc: "Recuperação eletrônica e microssolda para celulares que não ligam, sofreram curto ou falha de circuito integrado.",
    message: "Olá! Meu aparelho precisa de reparo em placa lógica. Gostaria de uma avaliação na Wesley Cell.",
  },
  {
    num: "05",
    name: "Câmera e Botões",
    desc: "Troca de lentes de vidro trincadas, sensores fotográficos embaçados e conserto de botões Power e Volume.",
    message: "Olá! Preciso consertar a câmera / botões do meu celular na Wesley Cell.",
  },
  {
    num: "06",
    name: "Tampa Traseira de iPhone e Face ID",
    desc: "Troca especializada de vidro traseiro de iPhone mantendo a carcaça alinhada e reparo de módulos Face ID.",
    message: "Olá! Gostaria de um orçamento para troca de tampa traseira / Face ID de iPhone.",
  },
  {
    num: "07",
    name: "Sistema e Loop Infinito",
    desc: "Restauração de software oficial, recuperação de celulares travados na logo e solução para lentidão severa.",
    message: "Olá! Meu celular travou na inicialização e gostaria de um orçamento de software.",
  },
  {
    num: "08",
    name: "Reparos Gerais em Tablets e Acessórios",
    desc: "Manutenção de tablets (telas, baterias e conectores) e venda de películas de alta proteção e capinhas.",
    message: "Olá! Gostaria de um orçamento para manutenção de tablet / acessórios na Wesley Cell.",
  },
];

export function ServicesEditorial() {
  return (
    <section id="servicos" className="py-14 sm:py-20 border-b border-[var(--border)] scroll-mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Serviços Especializados"
          title="O que consertamos na Wesley Cell"
          description="Procedimentos de bancada para celulares e tablets de todas as marcas com atendimento direto no balcão."
        />

        {/* Editorial list with hairline dividers - ZERO nested cards */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)]">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.num}
              className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-4 sm:gap-6 max-w-3xl">
                <span className="font-mono text-sm sm:text-base font-bold text-[var(--primary)] shrink-0 pt-0.5">
                  {service.num}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pl-10 md:pl-0">
                <a
                  href={getWhatsAppUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors gap-1"
                >
                  <span>Pedir orçamento</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
