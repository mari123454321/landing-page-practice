import { BRAND } from "@/src/lib/constants/navigation";

export default function BrandLogo() {
    return (
        <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center 
            text-primary font-bold text-lg font-serif
            ">
                {BRAND.shortName}
            </div>
            <h2 className="text-xl font-semibold text-foreground">
                {BRAND.name}
            </h2>
        </div>
    )
}