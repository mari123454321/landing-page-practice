import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/src/lib/constants/landing'
import React from 'react'

function TestimonialsSection() {
    return (
        <section className="relative ">
            <div className="absolute inset-0  bg-linear-to-b from-background via-primary/5 to-background" />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
                <h1 className="title-l text-center mb-6">
                    {TESTIMONIALS_SECTION.heading}
                </h1>
                <p className="text-center mx-auto max-w-2xl text-muted-foreground mb-16">
                    {TESTIMONIALS_SECTION.description}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="glass-card group text-center ">
                            <div className="mx-auto mb-4 rounded-full w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:glow-sm transition-all">
                                {<testimonial.icon className="w-8 h-8 text-primary" />}
                            </div>
                            <p className="text-4xl font-bold  mb-2">{testimonial.value}</p>
                            <p className="text-muted-foreground">{testimonial.label}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection