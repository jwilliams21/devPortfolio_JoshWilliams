import { Mail, ExternalLink } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./ui/Icons";
import Button from "./ui/Button";

export default function Contact() {

    return (
        <section id="contact" className="scroll-mt-20 py-6 md:py-8 lg:py-16">
            <h1 className="text-3xl text-slate-900 font-bold font-inter text-center mb-8">Get In Touch</h1>

            <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
                <div className="w-full">
                    <h3 className="text-2xl text-slate-900 font-bold mb-2">Let's Connect</h3>
                    <p>Whether you're looking to scale a technical team, architect a new front-end solution, or discuss the intersection of UX and enterprise data, I’m always interested in high-impact collaboration. Reach out via the form below or connect through my professional channels.</p>
                    <div className="flex gap-6 my-4">
                        <a
                            href="mailto:joshbenjaminwilliams@gmail.com"
                        ><Mail size={40} /></a>
                        <a
                            href="https://github.com/jwilliams21"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><GitHubIcon /></a>
                        <a
                            href="https://www.linkedin.com/in/josh-williams-29020331/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><LinkedInIcon /></a>
                    </div>
                </div>
                <div className="w-full max-w-lg mx-auto">
                    <form className="flex flex-col gap-4">
                        <input type="text" placeholder="Your Name" className="p-2 border border-gray-400 rounded-md bg-gray-100"></input>
                        <input type="email" placeholder="Your Email" className="p-2 border border-gray-400 rounded-md bg-gray-100"></input>
                        <textarea placeholder="Your Message" className="p-2 border border-gray-400 rounded-md bg-gray-100"></textarea>
                        <Button type="submit" variant="contact">Send!</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

