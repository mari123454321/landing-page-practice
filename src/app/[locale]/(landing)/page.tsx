import StatsSection from "@/src/components/landing/StatsSection";
import FeaturesSection from "@/src/components/landing/FeaturesSection";
import TestimonialsSection from "@/src/components/landing/TestimonialsSection";
import CTASection from "@/src/components/landing/CTASection";
import ServicesSection from "@/src/components/landing/ServicesSection";
import HeroSection from "@/src/components/landing/HeroSection";

export default function Home() {
  return (
    <main className="space-y-24">
      <HeroSection/>
      <ServicesSection/>
      <StatsSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <CTASection />
    </main>
  );
}
