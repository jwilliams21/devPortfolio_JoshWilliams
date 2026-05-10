import ProjectCard from "./ui/ProjectCard";

export default function Projects() {

    return (
        <section id="projects" className="scroll-mt-20 py-6 md:py-8 lg:py-16">
            <h1 className="text-3xl text-slate-900 font-bold font-inter text-center mb-8">Featured Projects</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard 
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
                />
                <ProjectCard 
                    image="./images/firemovement_placeholder.jpg"
                    title="FIRE Modeler"
                    description="A web application that allows users to model their financial future using the FIRE (Financial Independence, Retire Early) method. Users can input their current financial situation, set goals, and see projections for their financial future."
                    badges={["React", "Tailwind CSS", "Node.js"]}
                />
            </div>
        </section>
    )
}

