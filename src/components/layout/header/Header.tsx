import HeaderAuthButtons from "./HeaderAuthButtons";
import HeaderLogo from "../../common/BrandLogo";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed right-0 left-0 glass z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20 " >
                <Link href="/">
                    <HeaderLogo />
                </Link>
                <HeaderNav />
                <HeaderAuthButtons />
            </div>
        </header >
    )
}