import SectionBadge from '../ui/SectionBadge'
import { CTA_SECTION } from '@/src/lib/constants/landing'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section className='overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='relative glass rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden '>
                {/* background effects */}
                <div className='absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl'/>
                <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl'/>

                <SectionBadge text={CTA_SECTION.badge} />
                <h2 className='title-l mt-4 mb-6'>
                    {CTA_SECTION.heading}
                </h2>
                <p className='text-muted-foreground text-lg mb-8'>
                    {CTA_SECTION.description}
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Button asChild size={"lg"}>
                        <Link href="/register">
                            {CTA_SECTION.primaryCta}
                            <ArrowRight />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size={"lg"}>
                        <Link href="/register">{CTA_SECTION.secondaryCta}</Link>
                    </Button>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-8 text-muted-foreground text-sm">
                    {CTA_SECTION.trustIndicators.map((indicator, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{indicator}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

