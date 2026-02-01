import { ReactElement } from "react";

type ButtonVariantType = "primary" | "secondary"

export default function ButtonFull({ text, handleClick, optionalIcon, variant, ClassName }: {
    text: string,
    handleClick?: () => void,
    optionalIcon?: ReactElement,
    variant: ButtonVariantType
    ClassName?: string
}) {
    return (
        // TODO: fix the buttons
        <button
            className={`
                ${variant === "primary" ? "bg-primary hover:bg-primary/90 text-primary-foreground " :
                variant === "secondary" ? "bg-background hover:bg-secondary text-muted-foreground hover:text-foreground" : ""}
            gap-2 px-3 py-2 rounded-sm w-fit cursor-pointer ${ClassName}`}
            onClick={handleClick && handleClick}
        >
            {text}
            {optionalIcon && optionalIcon}
        </button>
    )
}