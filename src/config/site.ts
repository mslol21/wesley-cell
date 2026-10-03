export const SITE_CONFIG = {
  name: "Wesley Cell",
  tagline: "Assistência Técnica Especializada em Smartphones",
  description:
    "Conserto ágil e transparente para o seu celular. Troca de telas, baterias, conectores e reparo em placa com garantia e peças de qualidade.",
  phoneDisplay: "(11) 99999-9999", // Número de contato / balcão
  phoneRaw: "5511999999999",
  whatsappNumber: "5511999999999",
  whatsappDefaultMessage: "Olá! Gostaria de um orçamento para o conserto do meu celular na Wesley Cell.",
  address: {
    street: "Rua do Comércio, 120 - Centro",
    city: "São Paulo - SP",
    cep: "01000-000",
    reference: "Próximo à estação e em frente à galeria central",
    googleMapsUrl: "https://maps.google.com/?q=Wesley+Cell+Assistencia+Tecnica",
  },
  hours: [
    { days: "Segunda a Sexta", time: "08:30 às 18:30" },
    { days: "Sábado", time: "08:30 às 13:00" },
    { days: "Domingo e Feriados", time: "Fechado" },
  ],
  warranty: "Garantia legal de 90 dias em todos os serviços e peças substituídas conforme Art. 26 do CDC.",
  instagram: "@wesleycell_oficial",
  instagramUrl: "https://instagram.com",
};

export function getWhatsAppUrl(customMessage?: string) {
  const text = encodeURIComponent(customMessage || SITE_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}
