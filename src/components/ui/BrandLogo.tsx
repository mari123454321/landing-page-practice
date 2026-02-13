'use client'

import { useCompanyInfo } from "@/hooks/use-company-info"
import Image from "next/image"

export default function BrandLogo() {
    const companyName = useCompanyInfo()?.name
    return (
        <div className="flex gap-3 items-center">
            <Image
                className='rounded-2xl opacity-70 glow-sm transition-shadow duration-300 hover:[box-shadow:0_0_40px_hsl(var(--primary)/0.5)]'
                src='/logo.png'
                alt='logo'
                width={50}
                height={50}
            />
            <h2 className="text-xl font-semibold text-foreground">
                {companyName}
            </h2>
        </div>
    )
}