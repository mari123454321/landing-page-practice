import Link from "next/link";
import { Button } from "../../ui/button";

export default function HeaderAuthButtons(){
    return(
        <div className="flex flex-col *:w-full lg:flex-row items-center gap-4"> 
            <Button asChild variant="outline">
                <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="default">
                <Link href="/register">Get Started</Link>
            </Button>
        </div>
    )
}