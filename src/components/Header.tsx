"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, Menu, X, Clock, MapPin, Wrench } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/config/site";
import { Button } from "./ui/Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Problemas comuns", href: "#problemas" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#processo" },
    { label: "Acessórios", href: "#acessorios" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#090d16]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm"
            : "bg-[#090d16] border-b border-[var(--border)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[var(--border-focus)] rounded-sm"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--primary)] group-hover:border-[var(--primary)] transition-colors">
              <Wrench className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[var(--foreground)]">
                  WESLEY CELL
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase bg-[var(--primary-subtle)] text-[var(--primary)] rounded border border-[var(--primary)]/20">
                  Bancada Especializada
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[var(--foreground-muted)] hidden xs:block">
                Assistência Técnica de Smartphones
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)] flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-[var(--surface-subtle)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--primary)]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento no WhatsApp"
            >
              <Button variant="whatsapp" size="sm" className="h-10 px-4">
                <MessageSquare className="w-4 h-4 mr-1.5" />
                Pedir orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden"
              aria-label="WhatsApp direto"
            >
              <Button variant="whatsapp" size="sm" className="h-9 px-3 text-xs">
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                Orçamento
              </Button>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#090d16] text-[var(--foreground)] animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-[var(--border)]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--primary)]">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-bold text-base tracking-tight">WESLEY CELL</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[var(--foreground)] hover:text-[var(--primary)] py-2 border-b border-[var(--border)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-[var(--border)] space-y-4">
              <div className="text-xs text-[var(--foreground-muted)] space-y-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span>{SITE_CONFIG.address.street}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[var(--primary)]" />
                  <span>Seg–Sex: 08:30 às 18:30 | Sáb: 08:30 às 13:00</span>
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="whatsapp" size="lg" className="w-full justify-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="w-full">
                  <Button variant="secondary" size="md" className="w-full justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar: {SITE_CONFIG.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
