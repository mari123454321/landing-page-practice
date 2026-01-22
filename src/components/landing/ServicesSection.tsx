import { SERVICES, SERVICES_SECTION } from '@/src/lib/constants/landing'
import Image from 'next/image'
import React from 'react'
import ButtonFull from '../ui/ButtonFull'

function ServicesSection() {
  const servicesList = SERVICES.map((service, index) => (
    <div key={index} className='py-2 px-4 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer w-fit'>
      <span className='text-sm text-foreground'>
        {service.label}
      </span>
    </div>
  ))
  return (
    <section id='services' className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-row gap-16 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='rounded-2xl overflow-hidden'>
        <Image src="/happy-coworkers-sharing-ideas.jpg" alt="Professional business consultation" width={900} height={600} />
      </div>
      <div className='flex flex-col max-w-[50%]'>
        <span className='section-label'>{SERVICES_SECTION.badge}</span>
        <h1 className='title-sm mt-4 mb-6'>{SERVICES_SECTION.heading}</h1>
        <p className='text-muted-foreground mb-8'>{SERVICES_SECTION.description}</p>
        <div className='flex flex-wrap gap-3 mb-8'>
          {servicesList}
        </div>
        <ButtonFull text={SERVICES_SECTION.ctaText} variant='primary'/>
      </div>
    </section>
  )
}

export default ServicesSection