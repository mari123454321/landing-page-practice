
function SectionBadge({icon, text, className}:{icon?: React.ReactNode, text:string, className?:string}) {
    return (
        <div className={`px-4 py-2 border border-primary/30 rounded-full bg-primary/10 my-6 w-fit ${className}`}>
            <span className="text-primary text-sm font-medium">
                {icon && <span className="mr-2">{icon}</span>}
                {text}
            </span>
        </div>
    )
}

export default SectionBadge