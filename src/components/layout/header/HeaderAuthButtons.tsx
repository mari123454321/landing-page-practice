import Link from "next/link";
import { Button } from "../../ui/button";

export default function HeaderAuthButtons(){
    return(
        <div className="hidden lg:flex items-center gap-4"> 
            <Button asChild variant="ghost">
                <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="default">
                <Link href="/register">Get Started</Link>
            </Button>
        </div>
    )
}