import { HERO_DASHBOARD, HERO_SECTION } from "@/src/lib/constants/landing";
import Image from 'next/image';
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import SectionBadge from "../ui/SectionBadge";


export default function HeroSection() {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
            {/* Bottom Fade */}
            {/* make a component */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

            {/* Candlestick Pattern Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute left-[10%] top-[20%] w-1 h-32 bg-linear-to-b from-primary to-transparent rounded" />
                <div className="absolute left-[15%] top-[35%] w-1 h-24 bg-linear-to-b from-red-500 to-transparent rounded" />
                <div className="absolute left-[20%] top-[25%] w-1 h-40 bg-linear-to-b from-primary to-transparent rounded" />
                <div className="absolute right-[10%] top-[30%] w-1 h-28 bg-linear-to-b from-primary to-transparent rounded" />
                <div className="absolute right-[15%] top-[40%] w-1 h-36 bg-linear-to-b from-red-500 to-transparent rounded" />
                <div className="absolute right-[20%] top-[20%] w-1 h-32 bg-linear-to-b from-primary to-transparent rounded" />
            </div>

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
                            <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/30 border border-border/30">
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