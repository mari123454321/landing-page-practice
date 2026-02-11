'use client'
import HeaderAuthButtons from "@/src/components/Layout/Header/HeaderAuthButtons";
import HeaderLogo from "@/src/components/ui/BrandLogo";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed right-0 left-0 glass z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20 " >
                <Link href="/">
                    <HeaderLogo />
                </Link>
                <div className="hidden lg:flex">
                    <HeaderAuthButtons />
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-foreground"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                {isOpen && (
                    <div className="fixed top-16 left-0 right-0 lg:hidden glass border-t border-border/50 px-4 py-6 space-y-8">
                        <HeaderAuthButtons />
                    </div>
                )}
            </div>
        </header >
    )
}