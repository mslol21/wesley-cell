import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Wesley Cell | Assistência Técnica Especializada em Smartphones",
  description:
    "Conserto ágil e transparente para o seu celular. Troca de telas, baterias, conectores e reparos em placa com garantia legal de 90 dias e atendimento direto com o técnico.",
  keywords: [
    "assistência técnica celular",
    "troca de tela",
    "troca de bateria",
    "conserto de smartphone",
    "reparo de placa celular",
    "Wesley Cell",
  ],
  authors: [{ name: "Wesley Cell" }],
  openGraph: {
    title: "Wesley Cell | Assistência Técnica Especializada em Smartphones",
    description:
      "Conserto ágil e transparente para o seu celular. Peças de alta qualidade, garantia de 90 dias e atendimento direto no balcão e WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#f8fafc] font-sans">
        {children}
      </body>
    </html>
  );
}
