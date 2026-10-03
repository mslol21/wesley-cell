import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemsSelector } from "@/components/ProblemsSelector";
import { ServicesEditorial } from "@/components/ServicesEditorial";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-[#f1f5f9]">
      <Header />

      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <ProblemsSelector />
        <ServicesEditorial />
        <ProcessTimeline />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
