import { NAV_LINKS } from "@/src/lib/constants/navigation"
import Link from "next/link"

export default function HeaderNav() {

    return (
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            {
                NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-m lg:text-sm"
                        key={link.label}>
                        {link.label}
                    </Link>
                ))}
        </nav>
    )
}