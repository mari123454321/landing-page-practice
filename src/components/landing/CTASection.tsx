import SectionBadge from "@/components/ui/SectionBadge";
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTranslations } from "next-intl/server";

export default async function CTASection() {
    const t = await getTranslations('cta')
    const trustIndicators = [
        t('trustIndicators.0'),
        t('trustIndicators.1'),
        t('trustIndicators.2')
    ]
    
    return (
        <section className='overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='relative glass rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden '>
                {/* background effects */}
                <div className='absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl' />
                <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl' />

                <SectionBadge text={t('badge')} />
                <h2 className='title-l mt-4 mb-6'>
                    {t('heading')}
                </h2>
                <p className='text-muted-foreground text-lg mb-8'>
                    {t('description')}
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button asChild size={"lg"}>
                        <Link href="/register">
                            {t('primaryCta')}
                            <ArrowRight />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size={"lg"}>
                        <Link href="/register">{t('secondaryCta')}</Link>
                    </Button>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-8 text-muted-foreground text-sm">
                    {trustIndicators.map((indicator) => (
                        <div key={indicator} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{indicator}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

