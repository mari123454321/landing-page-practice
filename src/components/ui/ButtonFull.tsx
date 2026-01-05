import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

type ButtonVariantType = "primary" | "secondary"

export default function Button({ text, handleClick, optionalIcon, variant }: { text: string, handleClick?: () => void, optionalIcon?: ReactElement, variant:ButtonVariantType}) {
    return (
        <button
            className={` ${variant==="primary" ? "bg-primary hover:bg-primary/90 text-primary-foreground " : variant === "secondary" ?  "text-muted-foreground hover:text-foreground" : ""}
            gap-2 px-3 py-2 rounded-sm`} 
            onClick={handleClick && handleClick}
        >
            {text}
            {optionalIcon && optionalIcon}
        </button>
    )
}