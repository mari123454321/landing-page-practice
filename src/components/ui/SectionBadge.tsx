
function SectionBadge({text}:{text:string}) {
    return (
        <div className="px-4 py-2 border border-primary/30 rounded-full bg-primary/10 my-6 w-fit">
            <span className="text-sm font-medium">
                {text}
            </span>
        </div>
    )
}

export default SectionBadge