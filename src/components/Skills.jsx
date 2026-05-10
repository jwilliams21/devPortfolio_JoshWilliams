import Card from "./ui/Card";

export default function Skills() {

    return (
        <section id="skills" className="scroll-mt-20 py-6 md:py-8 lg:py-16">
            <h1 className="text-3xl text-slate-900 font-bold font-inter text-center mb-8">Skills & Expertise</h1>

            {/* Skill Cards */}
            <div className="flex flex-col justify-center items-center mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <Card 
                    variant="skills"
                    title={"Languages"}
                    >
                        <ul className="space-y-2 list-disc list-inside">
                            <li>JavaScript (ES6+)</li> 
                            <li>SQL (T-SQL)</li>
                            <li>HTML5/ASPX</li>
                            <li>CSS3</li>
                            <li>JSON/XSL (XSLT)</li>
                            <li>C# (Basic)</li>
                        </ul>
                    </Card>

                    <Card 
                    variant="skills"
                    title={"Frameworks & Libraries"}
                    >
                        <ul className="space-y-2 list-disc list-inside">
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Tailwind CSS/Bootstrap</li>
                            <li>Kendo UI</li>
                        </ul>
                    </Card>

                    <Card 
                    variant="skills"
                    title={"Development Tools"}
                    >
                        <ul className="space-y-2 list-disc list-inside">
                            <li>VS Code/Visual Studio</li>
                            <li>Git (GitKraken/GitHub)</li>
                            <li>Vite</li>
                        </ul>
                    </Card>

                    <Card 
                    variant="skills"
                    title={"Cloud & API Integration"}
                    >
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Firebase</li>
                            <li>Netlify</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </Card>

                    <Card 
                    variant="skills"
                    title={"Leadership & Strategy"}
                    >
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Technical Leadership</li>
                            <li>SME Documentation</li>
                            <li>Mid-Year & End-Of-Year Review </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </section>
    )
}

