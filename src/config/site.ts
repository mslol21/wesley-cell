export const SITE_CONFIG = {
  name: "Wesley Cell",
  role: "Assistência Técnica de Celulares e Tablets",
  tagline: "Assistência Técnica • Zona Leste",
  headline: "Seu celular deu problema? A gente ajuda a resolver.",
  subheadline:
    "Troca de tela, bateria, conector e outros reparos para celulares e tablets. Atendimento rápido no balcão e orçamento direto pelo WhatsApp.",
  phoneDisplay: "(11) 94889-6283",
  phoneRaw: "5511948896283",
  whatsappNumber: "5511948896283",
  whatsappDefaultMessage:
    "Olá! Encontrei a Wesley Cell pelo site e gostaria de solicitar um orçamento.",
  instagramHandle: "@wesleycellinacio",
  instagramUrl: "https://www.instagram.com/wesleycellinacio",
  address: {
    street: "Rua Inácio Monteiro, 762",
    region: "Zona Leste",
    city: "São Paulo - SP",
    cep: "08490-000",
    full: "Rua Inácio Monteiro, 762 - Zona Leste, São Paulo - SP",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+In%C3%A1cio+Monteiro,+762+-+S%C3%A3o+Paulo+-+SP",
  },
  hours: [
    { days: "Segunda a Sexta", time: "09:00 às 18:30" },
    { days: "Sábado", time: "09:00 às 14:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  services: [
    {
      num: "01",
      name: "Troca de Tela e Frontal",
      desc: "Displays para iPhone, Samsung, Motorola, Xiaomi e outras marcas. Toque preciso, calibração e acabamento limpo.",
    },
    {
      num: "02",
      name: "Substituição de Bateria",
      desc: "Baterias com autonomia renovada. Para celulares descarregando rápido, desligando com carga ou estufados.",
    },
    {
      num: "03",
      name: "Conector de Carga",
      desc: "Reparo e troca de entrada Tipo-C, Lightning e Micro-USB. Para aparelhos com mau contato ou que não reconhecem cabo.",
    },
    {
      num: "04",
      name: "Reparo de Placa Lógica",
      desc: "Diagnóstico e microssolda eletrônica em aparelhos que não ligam, sofreram curto ou têm falha de circuito integrado.",
    },
    {
      num: "05",
      name: "Câmera e Lentes",
      desc: "Troca de lentes trincadas, sensores embaçados ou módulos sem foco e com aviso de falha ao abrir.",
    },
    {
      num: "06",
      name: "Botões e Carcaça",
      desc: "Ajuste e troca de botões Power, Volume, gavetas de chip e desempeno de aro estrutural.",
    },
    {
      num: "07",
      name: "Tampa Traseira de iPhone e Face ID",
      desc: "Substituição especializada da tampa de vidro traseira de iPhone e manutenção de módulos relacionados ao Face ID.",
    },
    {
      num: "08",
      name: "Sistema e Tablets",
      desc: "Recuperação de software, aparelhos em loop na logo e reparos estruturais e de tela em tablets.",
    },
  ],
};

export function getWhatsAppUrl(customMessage?: string) {
  const text = encodeURIComponent(
    customMessage || SITE_CONFIG.whatsappDefaultMessage
  );
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}
