import Image from "next/image";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection/>
      <ServicesSection/>
    </main>
  );
}
