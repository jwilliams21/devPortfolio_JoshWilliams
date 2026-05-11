

export default function Card({ title, children, variant, className = "" }) {

    const variants = {
        skills: {
            container: "w-full border border-slate-900 rounded-lg",
            title: "text-lg bg-slate-900 font-semibold text-white text-center py-2 rounded-t-lg",
            body: "text-lg text-slate-900 my-2 px-4"
        }
    }

    const style = variants[variant] || variants.skills

    return (
        <div className={`${style.container} ${className}`}>
            <div className={`${style.title} ${className}`}>{title}</div>
            <div className={`${style.body} ${className}`}>
                {children}
            </div>
        </div>
    )
}