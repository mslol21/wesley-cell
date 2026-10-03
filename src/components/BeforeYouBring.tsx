import React from "react";
import { CheckSquare, ShieldCheck, AlertCircle, HardDrive, Smartphone, KeyRound, BatteryCharging, Droplet } from "lucide-react";

interface ChecklistItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  important?: boolean;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    icon: HardDrive,
    title: "Faça backup dos seus dados",
    description: "Se o touch ainda estiver respondendo, sincronize fotos, conversas e contatos na nuvem (Google Drive, iCloud) ou computador.",
  },
  {
    icon: Smartphone,
    title: "Remova o chip SIM e cartão de memória",
    description: "Você pode manter seu chip com você para utilizar em outro aparelho temporário enquanto o seu estiver na bancada.",
  },
  {
    icon: KeyRound,
    title: "Senha de tela para testes pós-reparo",
    description: "Para testar microfone, alto-falante, câmeras e biometria após fechar o aparelho, o técnico precisará acessar a tela de teste.",
  },
  {
    icon: BatteryCharging,
    title: "Traga o carregador (se o defeito for carga)",
    description: "Se o celular não carrega ou desliga sozinho, trazer a fonte e cabo usuais ajuda a isolar se o defeito está no acessório ou na placa.",
  },
  {
    icon: Droplet,
    title: "Se o aparelho molhou: NUNCA ponha no arroz",
    description: "O arroz não remove a umidade interna e o amido acelera a corrosão. Mantenha o aparelho desligado e traga direto para desoxidação química.",
    important: true,
  },
];

export function BeforeYouBring() {
  return (
    <section className="py-14 md:py-24 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Context & Safety Promise */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-2.5 block">
                04 // Checklist Prévio
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-[1.2]">
                Antes de trazer seu celular para o balcão.
              </h2>
              <p className="mt-4 text-base text-[var(--foreground-muted)] leading-relaxed">
                Algumas recomendações simples que protegem sua privacidade, evitam perda de arquivos e agilizam em até 50% o tempo do diagnóstico no balcão.
              </p>
            </div>

            <div className="mt-8 p-5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    Privacidade e Sigilo Garantidos
                  </h3>
                  <p className="text-xs text-[var(--foreground-muted)] mt-1 leading-relaxed">
                    Não solicitamos nem acessamos aplicativos bancários, mensagens pessoais ou galerias. Os testes são estritamente técnicos e restritos aos componentes de hardware substituídos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Split Checklist List */}
          <div className="lg:col-span-7 space-y-4">
            {CHECKLIST_ITEMS.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-4 sm:p-5 rounded-[var(--radius-sm)] border transition-colors ${
                    item.important
                      ? "bg-[#181316] border-red-900/40"
                      : "bg-[var(--surface)] border-[var(--border)]"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center shrink-0 ${
                        item.important
                          ? "bg-red-500/15 text-red-400 border border-red-500/20"
                          : "bg-[var(--surface-elevated)] text-[var(--primary)] border border-[var(--border)]"
                      }`}
                    >
                      <ItemIcon className="w-4 h-4 stroke-[2]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm sm:text-base font-semibold text-[var(--foreground)]">
                          {item.title}
                        </h3>
                        {item.important && (
                          <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 bg-red-500/20 text-red-400 rounded">
                            Atenção
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--foreground-muted)] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
