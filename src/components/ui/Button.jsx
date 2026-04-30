
export default function Button({ children, onClick, variant, className = "", type = "button" }) {
    const variants = {
        hero: "border-slate-400 border-solid border p-4 rounded-lg  hover:text-slate-900 hover:bg-gray-200 hover:border-slate-900 hover:font-semibold"
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${variants[variant]} ${className}`}
        >
            {children}
        </button>
    )
}