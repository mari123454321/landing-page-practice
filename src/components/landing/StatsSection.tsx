import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { ArrowRight, Award, Globe, LucideIcon, TrendingUp, Users } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { createElement } from "react";

const icons = [<Users />, <TrendingUp />, <Globe />, <Award />];

export default async function StatsSection() {
    const t = await getTranslations('stats')

    const items = [
        {
            value: t('items.activeTraders.value'),
            label: t('items.activeTraders.label')
        },
        {
            value: t('items.dailyVolume.value'),
            label: t('items.dailyVolume.label')
        },
        {
            value: t('items.countries.value'),
            label: t('items.countries.label')
        },
        {
            value: t('items.uptime.value'),
            label: t('items.uptime.label')
        }
    ];

    return (
        <section className="relative ">
            <div className="absolute inset-0  bg-linear-to-b from-background via-primary/5 to-background" />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
                <h1 className="title-l text-center mb-6">
                    {t('heading')}
                    <span className="text-gradient"> {t('headingHighlight')}</span>
                </h1>
                <p className="text-center mx-auto max-w-2xl text-muted-foreground mb-16">
                    {t('description')}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {items.map((stat, index) => (
                        <div key={stat.label} className="glass-card group text-center ">
                            <div className="mx-auto mb-4 rounded-full w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:glow-sm transition-all">
                                {icons[index % icons.length]}
                            </div>
                            <p className="text-4xl font-bold  mb-2">{stat.value}</p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button asChild size="lg">
                        <Link href="/register">
                            {t('ctaText')}
                            <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
