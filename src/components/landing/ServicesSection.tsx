import { SERVICE_FEATURES, SERVICES, SERVICES_SECTION } from '@/src/lib/constants/landing'
import Image from 'next/image'
import { Button } from '@/src/components/ui/button'
import SectionBadge from '../ui/SectionBadge'


function ServicesSection() {
  return (
    <section id='services' className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <div className='flex flex-col lg:flex-row lg:gap-16 items-center justify-center'>
        <div className='rounded-2xl overflow-hidden'>
          <Image src="/happy-coworkers-sharing-ideas.jpg" alt="Professional business consultation" width={900} height={600} />
        </div>
        <div className='flex flex-col lg:max-w-[50%] *:w-fit'>
          <SectionBadge text={SERVICES_SECTION.badge} />
          <h1 className='title-l mt-4 mb-6'>{SERVICES_SECTION.heading}</h1>
          <p className='text-muted-foreground mb-8'>{SERVICES_SECTION.description}</p>
          <div className='flex flex-wrap gap-3 mb-8'>
            {SERVICES.map((service) => (
              <div key={service.label} className='py-2 px-4 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer w-fit'>
                <span className='text-sm text-foreground'>
                  {service.label}
                </span>
              </div>
            ))}
          </div>
          <Button className='w-fit'>
            {SERVICES_SECTION.ctaText}
          </Button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24'>
        {
          SERVICE_FEATURES.map((feature) => (
            <div key={feature.title} className='glass-card group'>
              <div className='w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all '>
                {<feature.icon className='w-6 h-6 text-primary' />}
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