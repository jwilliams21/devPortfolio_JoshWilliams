import styles from './Resume.module.css';
import { Download, Mail, Phone, MapPin, ChevronsRight } from 'lucide-react';

export default function Resume() {

    return (
        <section id="resume" className="scroll-mt-20 py-10 flex flex-col items-center w-full overflow-hidden">
            {/* Resume Title */}
            <h1 className="text-3xl text-slate-900 font-bold font-inter text-center mb-8">Resume</h1>

            {/* Resume Content */}
            <div className={styles.page}>
                {/* Left side Info */}
                <section className={styles["left-side"]}>
                    <img src="./images/JW_Headshot.jpg" alt="Headshot of Josh Williams" className={styles.headshot} />
                    <div className={styles["left-side-div"]}>
                    <h3 className={styles["left-side-title"]}>Contact</h3>
                    <ul className={styles["bullet-list"]}>
                        <li className={styles.bulletItem}><Mail size={20} /> joshbenjaminwilliams@gmail.com</li>
                        <li className={styles.bulletItem}><Phone size={20} /> (704) 550-6761</li>
                        <li className={styles.bulletItem}><MapPin size={20} /> Dallas, NC, US</li>
                    </ul>
                    </div>
                    <div className={styles["left-side-div"]}>
                    <h3 className={styles["left-side-title"]}>Languages</h3>
                    <ul className={styles["bullet-list"]}>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />JavaScript (ES6+)</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />SQL (T-SQL)</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />HTML5 / ASPX</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />CSS3</li> 
                        <li className={styles.bulletItem}><ChevronsRight size={20} />JSON / XSL (XSLT)</li> 
                        <li className={styles.bulletItem}><ChevronsRight size={20} />C# (Basic)</li>
                    </ul>
                    </div>
                    <div className={styles["left-side-div"]}>
                    <h3 className={styles["left-side-title"]}>Frameworks / Libraries</h3>
                    <ul className={styles["bullet-list"]}>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />React.js</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Node.js</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Tailwind CSS / Bootstrap</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Kendo UI</li>
                    </ul>
                    </div>
                    <div className={styles["left-side-div"]}>
                    <h3 className={styles["left-side-title"]}>Development Tools</h3>
                    <ul className={styles["bullet-list"]}>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />VS Code / Visual Studio</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Git (GitKraken / GitHub)</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Vite</li>
                    </ul>
                    </div>
                    <div className={styles["left-side-div"]}>
                    <h3 className={styles["left-side-title"]}>Cloud & API Integration</h3>
                    <ul className={styles["bullet-list"]}>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Netlify</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />Firebase</li>
                        <li className={styles.bulletItem}><ChevronsRight size={20} />RESTful APIs</li>
                    </ul>
                    </div>
                </section>

                {/* Right side Info */}
                <section className={styles["right-side"]}>
                    <div className={styles.center}>     
                        <h1>Josh Williams</h1>
                    </div> 

                    <a href="https://www.linkedin.com/in/josh-williams-29020331/" target="_blank" className={styles["qr-code-link"]}>
                        <img src="./images/linkedIn_QRCode.png" alt="Josh Williams LinkedIn Profile QR Code" className={styles["qr-code"]}/>
                    </a>

                    <div className={styles.center}>
                        <h2>Front-End Developer</h2>
                    </div>

                    <div className={styles["right-side-div"]}>
                        <h3 className={`${styles["right-side-title"]} ${styles.bold}`}>Summary</h3>
                        <p>
                            <span className={styles.bold}>Front-End Developer & Technical Leader</span> with 10+ years of experience in SaaS environments. Specialized in building dynamic user 
                            interfaces using <span className={styles.bold}>React</span>, <span className={styles.bold}>JavaScript</span>, and <span className={styles.bold}>Vite</span>. 
                            Expert at bridging the gap between complex backend <span className={styles.bold}>SQL</span> data and front-end <span className={styles.bold}>UI</span> delivery. 
                            Proven ability to <span className={styles.bold}>collaborate cross-functionally</span> with design and engineering teams to 
                            <span className={styles.bold}>uphold industry-leading UX</span> standards. Proficient in <span className={styles.bold}>version control (GitKraken, GitHub)</span> and modern 
                            styling frameworks like <span className={styles.bold}>Tailwind CSS</span> and <span className={styles.bold}>Bootstrap</span>.
                        </p>
                    </div>

                    <div className={styles["right-side-div"]}>
                        <h3 className={`${styles["right-side-title"]} ${styles.bold}`}>Experience</h3>

                        <div className={styles["exp-top-line"]}>
                            <div>
                                <p className={`${styles["exp-title"]} ${styles.bold}`}>Assistant Director of Support Engineers & Customer Solutions Engineer</p>
                                <p className={`${styles["exp-company"]} ${styles.bold}`}>Standpoint Technologies</p>
                            </div>
                            <p className={`${styles["exp-duration"]} ${styles.bold}`}>Jan 2023 - Present</p>
                        </div>
                        <ul className={styles["exp-points"]}>
                            <li>
                                <span className={styles.bold}>Front-End Development:</span> Engineered interactive checklists using <span className={styles.bold}>React</span> and <span className={styles.bold}>JSX</span>, successfully integrating new features into the production codebase through a standard Git-based version control workflow.
                            </li>
                            <li>
                                <span className={styles.bold}>UI Modernization:</span> Managed and updated legacy front-end components using <span className={styles.bold}>XSL (XSLT)</span> and <span className={styles.bold}>ASPX</span>, while leading the transition to modern, interactive <span className={styles.bold}>React</span> components for internal checklist tools.
                            </li>
                            <li>
                                <span className={styles.bold}>Backend Integration:</span> Maintained and extended <span className={styles.bold}>Node.js</span> server logic to support core system features, including a void payment module; integrated <span className={styles.bold}>SQL</span> queries to deliver accurate <span className={styles.bold}>JSON</span> responses across both legacy and modern front-end architectures.
                            </li>
                            <li>
                                <span className={styles.bold}>Version Control:</span> Utilized <span className={styles.bold}>GitKraken</span> and <span className={styles.bold}>GitHub Desktop</span> to manage feature branches, execute merges, and push code updates to company repositories, ensuring seamless integration within the team’s development workflow.
                            </li>
                            <li>
                                <span className={styles.bold}>Full-Stack Integration:</span> Implemented a new AP Void Payment feature, developing the front-end interface and connecting it to C# backend services through RESTful APIs to streamline internal accounting workflows.
                            </li>
                            <li>
                                <span className={styles.bold}>Documentation:</span> Authored comprehensive <span className={styles.bold}>SME (Subject Matter Expert)</span> docs in <span className={styles.bold}>Confluence</span>, standardizing technical processes for the support and quality assurance departments.
                            </li>
                        </ul>

                        <div className={styles["exp-top-line"]}>
                            <div>
                                <p className={`${styles["exp-title"]} ${styles.bold}`}>Sr. Support Engineer</p>
                                <p className={`${styles["exp-company"]} ${styles.bold}`}>Standpoint Technologies</p>
                            </div>
                            <p className={`${styles["exp-duration"]} ${styles.bold}`}>Jun 2016 - Jan 2023</p>
                        </div>
                        <ul className={styles["exp-points"]}>
                            <li>
                                <span className={styles.bold}>Database Management:</span> Built and executed complex <span className={styles.bold}>SQL</span> queries and stored procedures to identify system bugs and perform mass data migrations.
                            </li>
                            <li>
                                <span className={styles.bold}>Collaboration:</span> Used <span className={styles.bold}>Atlassian products (Jira)</span> to manage the development lifecycle of bug fixes, ensuring clear communication between users and the dev team.
                            </li>
                            <li>
                                <span className={styles.bold}>Web Styling:</span> Custom-coded <span className={styles.bold}>HTML</span> and <span className={styles.bold}>CSS</span> for client-facing email templates and system notifications.
                            </li>
                            <li>
                                <span className={styles.bold}>Technical Troubleshooting:</span> Diagnosed and resolved complex SaaS issues for a global user base, utilizing <span className={styles.bold}>Jira</span> for bug tracking and documentation.
                            </li>
                            <li>
                                <span className={styles.bold}>User Advocacy:</span> Acted as a bridge between end-users and the engineering team, translating customer pain points into actionable technical feedback.
                            </li>
                        </ul>
                    </div>

                    <div className={styles["right-side-div"]}>
                        <h3 className={`${styles["right-side-title"]} ${styles.bold}`}>Education</h3>

                        <div className={styles["exp-top-line"]}>
                            <div>
                                <p className={`${styles["exp-title"]} ${styles.bold}`}>Sport Management (B.S.)</p>
                                <p className={`${styles["exp-company"]} ${styles.bold}`}>Wingate University</p>
                            </div>
                            <p className={`${styles["exp-duration"]} ${styles.bold}`}>Aug 2010 - May 2014</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Resume Download Button */}
            <div className="w-full flex justify-center text-white mt-8">
                <a
                    href="../JoshWilliams_Resume.pdf"
                    download
                    className="flex items-center gap-2 bg-slate-900 hover:bg-white hover:text-slate-900 border border-slate-900 px-4 py-2 rounded-md transition-all font-bold text-sm"
                >
                    <Download />
                    DOWNLOAD PDF
                </a>
                
            </div>
        </section>

        
    )
}