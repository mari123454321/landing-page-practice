import StatsSection from "@/components/Landing/StatsSection";
import FeaturesSection from "@/components/Landing/FeaturesSection";
import TestimonialsSection from "@/components/Landing/TestimonialsSection";
import CTASection from "@/components/Landing/CTASection";
import ServicesSection from "@/components/Landing/ServicesSection";
import HeroSection from "@/components/Landing/HeroSection";

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
