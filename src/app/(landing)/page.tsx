import Image from "next/image";
import HeroSection from "../../components/landing/HeroSection";
import ServicesSection from "../../components/landing/ServicesSection";
import StatsSection from "@/src/components/landing/StatsSection";
import FeaturesSection from "@/src/components/landing/FeaturesSection";
import TestimonialsSection from "@/src/components/landing/TestimonialsSection";
import CTASection from "@/src/components/landing/CTASection";

export default function Home() {
  return (
    <main className="*:py-24">
      <HeroSection/>
      <ServicesSection/>
      <StatsSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <CTASection />
    </main>
  );
}
