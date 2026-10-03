import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemsSelector } from "@/components/ProblemsSelector";
import { ServicesEditorial } from "@/components/ServicesEditorial";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { BeforeYouBring } from "@/components/BeforeYouBring";
import { Accessories } from "@/components/Accessories";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-[#f8fafc]">
      <Header />
      
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <ProblemsSelector />
        <ServicesEditorial />
        <ProcessTimeline />
        <BeforeYouBring />
        <Accessories />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
