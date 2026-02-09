import { HERO_SECTION } from "@/src/lib/constants/landing";
import Image from 'next/image';
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Shield, Zap } from "lucide-react";
import SectionBadge from "../ui/SectionBadge";
import HeroBackground from "./HeroBackground";


export default function HeroSection() {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            <HeroBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12 lg:text-left
                            col-span-1 text-center">
                <div className="lg:inline flex flex-col items-center">
                    <SectionBadge text={HERO_SECTION.badge} icon={<Shield className="w-4 h-4 text-primary" />} />
                    <h1 className="title-xl mb-8 line-height ">
                        {HERO_SECTION.headingStart}
                        {" "}
                        <span className="text-gradient">{HERO_SECTION.headingHighlight}</span>
                    </h1>
                    <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed">
                        {HERO_SECTION.description}
                    </p>
                    <div className="flex flex-wrap justify-items-center gap-3 mb-8">
                        {HERO_SECTION.features?.map((feature, index) => (
                            <div key={feature} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/30">
                                <Zap className="w-4 h-4 text-primary" />
                                <span className="text-sm text-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Button asChild size={"lg"}>
                            <Link href="/register">
                                {HERO_SECTION.primaryCta}
                                <ArrowRight />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size={"lg"}>
                            <Link href="/login">{HERO_SECTION.secondaryCta}</Link>
                        </Button>
                    </div>
                </div>
                {/* Dashboard Preview Img */}
                <div className="rounded-3xl glow overflow-hidden w-fit mx-auto ">
                    <Image src="/dashboard.webp" alt="Dashboard Preview" width={1024} height={800} />
                </div>
            </div>

        </section >
    )
}