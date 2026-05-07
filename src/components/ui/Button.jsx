
export default function Button({ children, onClick, variant, className = "", href }) {
    const variants = {
        hero: "border-slate-400 border-solid border p-4 rounded-lg  hover:text-slate-900 hover:bg-gray-200 hover:border-slate-900 hover:font-semibold",
        contact: "text-lg text-slate-900 font-inter font-semibold border border-slate-900 px-6 py-3 rounded-lg hover:bg-slate-900 hover:text-white hover:shadow-md ",
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