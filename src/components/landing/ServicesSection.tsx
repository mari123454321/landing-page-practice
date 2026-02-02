import { SERVICE_FEATURES, SERVICES, SERVICES_SECTION } from '@/src/lib/constants/landing'
import Image from 'next/image'
import { JSX } from 'react'
import { Button } from '../ui/button'
import SectionBadge from '../ui/SectionBadge'
import { Globe, Landmark, Layers, TrendingUp } from 'lucide-react'

const ICONS: Record<string, JSX.Element> = { globe: <Globe />, landmark: <Landmark />, layers: <Layers />, trendingUp: <TrendingUp /> };

function ServicesSection() {
  const servicesList = SERVICES.map((service, index) => (
    <div key={index} className='py-2 px-4 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer w-fit'>
      <span className='text-sm text-foreground'>
        {service.label}
      </span>
    </div>
  ))
  return (
    <section id='services' className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <div className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-row gap-16 items-center justify-center'>
        <div className='rounded-2xl overflow-hidden'>
          <Image src="/happy-coworkers-sharing-ideas.jpg" alt="Professional business consultation" width={900} height={600} />
        </div>
        <div className='flex flex-col max-w-[50%] *:w-fit'>
          <SectionBadge text={SERVICES_SECTION.badge} />
          <h1 className='title-l mt-4 mb-6'>{SERVICES_SECTION.heading}</h1>
          <p className='text-muted-foreground mb-8'>{SERVICES_SECTION.description}</p>
          <div className='flex flex-wrap gap-3 mb-8'>
            {servicesList}
          </div>
          <Button className='w-fit'>
            {SERVICES_SECTION.ctaText}
          </Button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          SERVICE_FEATURES.map((feature, index) => (
            <div key={index} className='glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group'>
              <div className='
              w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:glow-sm transition-all
              *:w-6 *:h-6 *:text-primary'>
                {ICONS[feature.icon]}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ServicesSection