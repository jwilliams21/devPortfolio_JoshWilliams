
export default function Button({ children, onClick, variant, className = "", href }) {
    const variants = {
        hero: "border-slate-400 border-solid border p-4 rounded-lg  hover:text-slate-900 hover:bg-gray-200 hover:border-slate-900 hover:font-semibold"
    }

    const combinedClasses = `${variants[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href} 
                className={`${combinedClasses}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${combinedClasses}`}
        >
            {children}
        </button>
    )
}