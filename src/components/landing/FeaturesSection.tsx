import SectionBadge from "@/components/ui/SectionBadge";
import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { BarChart3, Globe, HeadphonesIcon, Lock, LucideIcon, Shield, Zap } from "lucide-react";

const featureIcons:LucideIcon[] = [Shield, Zap, Lock, Globe, HeadphonesIcon, BarChart3];

export default async function FeaturesSection() {
    const t = await getTranslations('features')
    const features = [
        {
            title: t('items.regulated.title'),
            description: t('items.regulated.description')
        },
        {
            title: t('items.fast.title'),
            description: t('items.fast.description')
        },
        {
            title: t('items.custody.title'),
            description: t('items.custody.description')
        },
        {
            title: t('items.global.title'),
            description: t('items.global.description')
        },
        {
            title: t('items.support.title'),
            description: t('items.support.description')
        },
        {
            title: t('items.tools.title'),
            description: t('items.tools.description')
        }
    ]
    return (
        <section className='mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8' id='features'>
            <div className='flex flex-col items-center mb-16'>
                <SectionBadge text={t('badge')} />
                <h2 className="title-l mt-4 mb-6">{t('heading')}</h2>
                <p className='max-w-2xl'>{t('description')}</p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left'>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.title} icon={featureIcons[index%featureIcons.length]} title={feature.title} description={feature.description} />
                ))}
            </div>
        </section>
    )
}

