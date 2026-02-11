import StatsSection from "@/src/components/Landing/StatsSection";
import FeaturesSection from "@/src/components/Landing/FeaturesSection";
import TestimonialsSection from "@/src/components/Landing/TestimonialsSection";
import CTASection from "@/src/components/Landing/CTASection";
import ServicesSection from "@/src/components/Landing/ServicesSection";
import HeroSection from "@/src/components/Landing/HeroSection";

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
