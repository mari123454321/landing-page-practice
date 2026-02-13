import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SectionBadge from "@/components/ui/SectionBadge";
import { getTranslations } from 'next-intl/server';
import { Globe, Landmark, Layers, LucideIcon, TrendingUp } from 'lucide-react';
import { FeatureCard } from '@/components/ui/FeatureCard';

const icons: LucideIcon[] = [Globe, Landmark, Layers, TrendingUp]

export default async function ServicesSection() {
  const servicesT = await getTranslations('services')
  const featuresT = await getTranslations('serviceFeatures')

  const services = [
    servicesT('items.cryptoTrading'),
    servicesT('items.forexTrading'),
    servicesT('items.digitalWallets'),
    servicesT('items.copyTrading'),
    servicesT('items.secureCustody'),
    servicesT('items.cfdTrading'),
    servicesT('items.portfolioAnalytics'),
    servicesT('items.marketAnalysis')
  ]

  const serviceFeatures = [
    {
      title: featuresT('cryptoTrading.title'),
      description: featuresT('cryptoTrading.description')
    },
    {
      title: featuresT('forexCfd.title'),
      description: featuresT('forexCfd.description')
    },
    {
      title: featuresT('copyTrading.title'),
      description: featuresT('copyTrading.description')
    },
    {
      title: featuresT('secureCustody.title'),
      description: featuresT('secureCustody.description')
    }
  ]

  return (
    <section className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <div className='flex flex-col lg:flex-row lg:gap-16 items-center justify-center'>
        <Image
          src='/business.jpg'
          alt={"temp alt"}
          width={600}
          height={300}
          className='rounded-2xl object-cover w-full lg:max-w-[50%] h-auto'
        />
        <div className='flex flex-col justify-center items-center sm:items-start text-center sm:text-left lg:max-w-[50%]'>
          <SectionBadge text={servicesT('badge')} />
          <h1 className='title-l mt-4 mb-6'>{servicesT('heading')}</h1>
          <p className='text-muted-foreground mb-8'>{servicesT('description')}</p>
          <div className='flex flex-wrap justify-center sm:justify-start gap-3 mb-8'>
            {services.map((service) => (
              <div key={service} className='py-2 px-4 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer w-fit'>
                <span className='text-sm text-foreground'>
                  {service}
                </span>
              </div>
            ))}
          </div>
          <Button className='w-fit'>
            {servicesT('ctaText')}
          </Button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24'>
        {serviceFeatures.map((feature, index) => (
          <FeatureCard key={feature.title} icon={icons[index % icons.length]} title={feature.title} description={feature.description} />))
        }
      </div>
    </section>
  )
}
