import ProjectCard from "./ui/ProjectCard";

export default function Projects() {

    return (
        <section id="projects" className="scroll-mt-20 py-6 md:py-8 lg:py-16">
            <h1 className="text-3xl text-slate-900 font-bold font-inter text-center mb-8">Featured Projects</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard 
                    image="./images/fi-plannr_logo.jpg"
                    title="FI-PlannR"
                    description="An interactive space for tracking compound growth, running FIRE scenarios, and seeing how fast your money can work for you."
                    badges={["React", "Tailwind CSS"]}
                    demoLink='https://fi-plannr.netlify.app/'
                    codeLink='https://github.com/jwilliams21/fi-plannr'
                />
                <ProjectCard 
                    image="./images/nextup_logo.jpg"
                    title="NextUp"
                    description="A lightweight Chrome extension for instant task capture, featuring custom hotkeys, auto-focus, and a library of witty, randomized placeholders."
                    badges={["React", "Tailwind CSS"]}
                    demoLink='https://nextup-extension.netlify.app/'
                    codeLink='https://github.com/jwilliams21/nextup'
                />
                <ProjectCard 
                    image="./images/reelWinners_fullLogo.jpg"
                    title="Reel-Winners"
                    description="A cinema companion for checking off major Oscar winners by year, browsing cast and plot details to build a watchlist, and spinning a roulette wheel to pick your next unwatched winner."
                    badges={["React", "Tailwind CSS"]}
                    demoLink='https://reelwinners.netlify.app/'
                    codeLink='https://github.com/jwilliams21/reel-winners'
                />
                {/* <ProjectCard 
                    image="./images/firemovement_placeholder.jpg"
                    title="FIRE Modeler"
                    description="A web application that allows users to model their financial future using the FIRE (Financial Independence, Retire Early) method. Users can input their current financial situation, set goals, and see projections for their financial future."
                    badges={["React", "Tailwind CSS", "Node.js"]}
                />
                <ProjectCard 
                    image="./images/firemovement_placeholder.jpg"
                    title="FIRE Modeler"
                    description="A web application that allows users to model their financial future using the FIRE (Financial Independence, Retire Early) method. Users can input their current financial situation, set goals, and see projections for their financial future."
                    badges={["React", "Tailwind CSS", "Node.js"]}
                /> */}
            </div>
        </section>
    )
}

