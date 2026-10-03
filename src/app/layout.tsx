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
  themeColor: "#080d1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Wesley Cell | Assistência Técnica de Celulares e Tablets • Zona Leste",
  description:
    "Conserto de celulares e tablets na Rua Inácio Monteiro, 762, Zona Leste de São Paulo. Troca de tela, bateria, conector, placa e tampa de iPhone. Peça seu orçamento pelo WhatsApp: (11) 94889-6283.",
  icons: {
    icon: "/logo-circle.png",
    apple: "/logo-circle.png",
  },
  keywords: [
    "Wesley Cell",
    "assistência técnica celular zona leste",
    "conserto celular inacio monteiro",
    "troca de tela celular",
    "troca de bateria",
    "reparo de placa celular",
    "conserto de tablet sp",
  ],
  authors: [{ name: "Wesley Cell" }],
  openGraph: {
    title: "Wesley Cell | Assistência Técnica de Celulares e Tablets • Zona Leste",
    description:
      "Conserto de celulares e tablets na Rua Inácio Monteiro, 762, Zona Leste de São Paulo. Orçamento rápido pelo WhatsApp (11) 94889-6283.",
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
      <body className="min-h-full flex flex-col bg-[#080d1a] text-[#f8fafc] font-sans">
        {children}
      </body>
    </html>
  );
}
