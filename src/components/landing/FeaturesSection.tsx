import SectionBadge from "@/src/components/ui/SectionBadge";
import { FEATURES, FEATURES_SECTION } from '@/src/lib/constants/landing'

function FeaturesSection() {
    return (
        <section className='mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8' id='features'>
            <div className='flex flex-col items-center mb-16'>
                <SectionBadge text={FEATURES_SECTION.badge} />
                <h2 className="title-l mt-4 mb-6">{FEATURES_SECTION.heading}</h2>
                <p className='max-w-2xl'>{FEATURES_SECTION.description}</p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left'>
                {FEATURES.map((feature, index) => (
                    <div key={index} className='glass-card group'>
                        <div className='
              w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all
              *:w-6 *:h-6 *:text-primary'>
                            {<feature.icon />}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturesSection