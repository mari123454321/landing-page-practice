import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeaderAuthButtons(){
    return(
        <div className="flex flex-col *:w-full md:flex-row items-center gap-4"> 
            <Button asChild variant="outline">
                <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="default">
                <Link href="/register">Get Started</Link>
            </Button>
        </div>
    )
}