import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesHub } from "@/components/ServicesHub";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080d1a] text-[#f8fafc]">
      <Header />

      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <ServicesHub />
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
