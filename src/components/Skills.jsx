import Card from "./ui/Card";

export default function Skills() {

    return (
        <section id="skills" className="scroll-mt-20 py-16">
            <h1>Skills section</h1>

            {/* Skill Cards */}
            <div>
                <Card 
                variant="skills"
                title={"Languages"}
                >
                Card
                </Card>
            </div>
        </section>
    )
}

