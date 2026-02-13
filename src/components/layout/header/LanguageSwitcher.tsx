'use client';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
    { code: 'en', name: 'English', countryCode: 'us' },
    { code: 'es', name: 'Español', countryCode: 'es' },
    { code: 'de', name: 'Deutsch', countryCode: 'de' },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const locale = useLocale()
    const pathname = usePathname()
    const router = useRouter()

    function handleLanguageChange(newLocale: string) {
        const segments = pathname.split('/');
        const basePath = languages.some(lang => lang.code === segments[1])
            ? '/' + segments.slice(2).join('/')
            : pathname;

        const newPath = `/${newLocale}${basePath === '/' ? '' : basePath}`;
        router.push(newPath);
        setIsOpen(false);
    }

    return (
        <>
            {isOpen && <div className="fixed inset-0 w-screen h-screen z-10" onClick={() => setIsOpen(false)}></div>}
            <div className="relative">
                <Button
                    className="focus:outline-1 focus:outline-white min-w-full md:min-w-fit"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <Globe />
                    {languages.find(lang => lang.code === locale)?.name || 'Language'}
                </Button>
                <div className={`glass absolute z-20 rounded-md right-0 top-12 min-w-40 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 " : "opacity-0"}`}>
                    {languages.map(language => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-primary/10 transition-colors ${locale === language.code ? ' text-primary' : ''}`}
                        >
                            <span className={`w-5 h-4 rounded-sm`}>
                                {language.countryCode.toUpperCase()}
                            </span>

                            <span className='ml-2'>{language.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}