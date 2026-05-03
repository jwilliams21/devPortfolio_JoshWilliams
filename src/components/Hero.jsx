import Button from "./ui/Button"


export default function Hero() {

    return (
        <section id="hero" 
        className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-gray-200 flex flex-col items-center justify-center m-0 w-full overflow-hidden scroll-mt-20 pt-4">
            <span>Welcome to my portfolios</span>
            <h1 className="text-4xl md:text-6xl py-8 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent font-bold px-4 text-center wrap-break-word max-w-full leading-tight">
                Front-End Developer & Technical Leader
            </h1>
            <div className="max-w-3xl px-4 pb-12">
                <h2 className="text-2xl md:text-4xl font-semibold text-center wrap-break-word leading-tight">
                    Specializing in building responsive, user-centric applications with React and Tailwind CSS. Leveraging years of SaaS leadership to deliver high-quality code and strategic solutions.
                </h2>
            </div>
            <div className="text-base md:text-lg flex flex-col md:flex-row gap-4 md:gap-8 px-4">
                <Button variant="hero">View My Work</Button>
                <Button variant="hero">Get In Touch</Button>
            </div>
        </section>
    )
}