"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageSquare, Phone, Menu, X, MapPin } from "lucide-react";
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Serviços & Reparos", href: "#servicos" },
    { label: "Como Funciona", href: "#processo" },
    { label: "Localização", href: "#localizacao" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-150 ${
          scrolled
            ? "bg-[#080d1a]/95 backdrop-blur-md border-b border-[var(--border)] shadow-md"
            : "bg-[#080d1a] border-b border-[var(--border)]"
        }`}
      >
        {/* Top location bar */}
        <div className="bg-[var(--surface)] border-b border-[var(--border)] px-4 py-1.5 text-[11px] sm:text-xs text-[var(--foreground-muted)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--primary-light)] shrink-0" />
              <span>
                <strong className="text-[var(--foreground)] font-medium">
                  {SITE_CONFIG.address.street}
                </strong>{" "}
                — {SITE_CONFIG.address.region}, SP
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {SITE_CONFIG.instagramHandle}
              </a>
              <span className="text-[var(--border-strong)]">|</span>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="hover:text-white transition-colors font-medium text-[var(--foreground)]"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo & Brand Identity with real logo image */}
          <a
            href="#"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[var(--border-focus)] rounded-sm group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
              <Image
                src="/logo-circle.png"
                alt="Wesley Cell Logo"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-[var(--primary-light)] transition-colors">
                  WESLEY CELL
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[var(--foreground-muted)] uppercase tracking-wider font-medium">
                Soluções em Celulares e Tablets
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-muted)] hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="text-xs text-[var(--foreground-muted)] hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-md hover:bg-[var(--surface)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--primary-light)]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento no WhatsApp"
            >
              <Button variant="whatsapp" size="sm" className="h-10 px-4 text-xs font-semibold shadow-sm">
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                Pedir Orçamento
              </Button>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden"
            >
              <Button variant="whatsapp" size="sm" className="h-9 px-3 text-xs">
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                Orçamento
              </Button>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#080d1a] text-[var(--foreground)]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-[var(--border)]">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/logo-circle.png"
                  alt="Wesley Cell Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-tight text-white">WESLEY CELL</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--foreground)]"
              aria-label="Fechar menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            <nav className="flex flex-col divide-y divide-[var(--border)]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold py-3.5 text-white hover:text-[var(--primary-light)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-6 border-t border-[var(--border)] space-y-4">
              <div className="text-xs text-[var(--foreground-muted)] space-y-1.5">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[var(--primary-light)] shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address.full}</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[var(--primary-light)] shrink-0" />
                  <span>{SITE_CONFIG.phoneDisplay}</span>
                </p>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="whatsapp" size="lg" className="w-full justify-center font-semibold">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
