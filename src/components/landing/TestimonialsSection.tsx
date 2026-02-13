import SectionBadge from "@/src/components/ui/SectionBadge";
import { TestimonialCard } from '@/src/components/ui/TestimonialCard';
import { getTranslations } from 'next-intl/server';


export default async function TestimonialsSection() {
    const t = await getTranslations('testimonials')
    const testimonials = [
        {
            name: t('items.sarah.name'),
            role: t('items.sarah.role'),
            content: t('items.sarah.content')
        },
        {
            name: t('items.michael.name'),
            role: t('items.michael.role'),
            content: t('items.michael.content')
        },
        {
            name: t('items.emily.name'),
            role: t('items.emily.role'),
            content: t('items.emily.content')
        }
    ];

    return (
        <section className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
            <SectionBadge text={t('badge')} className="mx-auto" />
            <h1 className="title-l text-center mb-6">
                {t('heading')}
            </h1>
            <p className="text-center mx-auto max-w-2xl text-muted-foreground mb-16">
                {t('description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} content={testimonial.content} name={testimonial.name} role={testimonial.role} />
                ))}
            </div>
        </section>
    )
}

