import { NAV_LINKS } from "@/src/lib/constants/navigation"
import Link from "next/link"

export default function HeaderNav() {

    return (
        <nav className="hidden lg:flex items-center gap-8">
            {
                NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        key={link.label}>
                        {link.label}
                    </Link>
                ))}
        </nav>
    )
}