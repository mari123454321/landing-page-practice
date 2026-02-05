import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/src/lib/constants/landing'
import React from 'react'
import SectionBadge from '../ui/SectionBadge'
import { Star } from 'lucide-react'

function TestimonialsSection() {
    return (
        <section className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
            <SectionBadge text={TESTIMONIALS_SECTION.badge} className="mx-auto" />
            <h1 className="title-l text-center mb-6">
                {TESTIMONIALS_SECTION.heading}
            </h1>
            <p className="text-center mx-auto max-w-2xl text-muted-foreground mb-16">
                {TESTIMONIALS_SECTION.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div
                        key={index}
                        className="glass rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
                    >
                        {/* content */}
                        <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                        {/* author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                <span className="text-primary font-semibold">{testimonial.name[0]}</span>
                            </div>
                            <div>
                                <p className="text-foreground font-medium">{testimonial.name}</p>
                                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TestimonialsSection