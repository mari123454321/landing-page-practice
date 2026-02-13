interface TestimonialCardProps {
    content: string;
    name: string;
    role: string;
}

export function TestimonialCard({ content, name, role }: TestimonialCardProps) {
    return (
        <div className="glass rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
            <p className="text-foreground mb-6 leading-relaxed">"{content}"</p>

            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-semibold">{name[0]}</span>
                </div>
                <div>
                    <p className="text-foreground font-medium">{name}</p>
                    <p className="text-muted-foreground text-sm">{role}</p>
                </div>
            </div>
        </div>
    );
}