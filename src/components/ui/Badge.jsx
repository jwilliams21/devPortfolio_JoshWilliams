

export default function Badge({ children, variant, className="" }) {

    const variants = {
        skills: "bg-slate-900 text-white rounded-full px-4 py-2 text-sm"
    }

    return (
        <span className={`${variants[variant]} ${className}`}>{children}</span>
    )
}