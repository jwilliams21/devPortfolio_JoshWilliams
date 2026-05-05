

export default function Card({ title, children, variant, className = "" }) {

    const variants = {
        skills: {
            container: "w-5/6 border border-slate-900",
            title: "text-lg bg-slate-900 font-semibold text-white text-center",
            body: "text-lg text-slate-900"
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