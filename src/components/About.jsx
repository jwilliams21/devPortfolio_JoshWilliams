import Badge from './ui/Badge'

export default function About() {

    return (
        <section id="about" className="scroll-mt-20 py-6 md:py-8 lg:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Headshot */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25"></div>
                  <img 
                    src="../../images/JW_Headshot.jpg" 
                    alt="Josh Williams" 
                    className="relative rounded-2xl w-64 h-80 object-cover shadow-xl border border-slate-100"
                  />
                </div>
              </div>
              {/* About */}
              <div className="md:col-span-7">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Bridging Leadership & Engineering</h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    I approach software development with the strategic perspective of a Leader and the meticulous eye of a Support Engineer. 
                    After a decade in the SaaS space—culminating in my role as Assistant Director—I’ve transitioned into engineering to 
                    bridge the gap between sophisticated data systems and the people who interact with them.
                  </p>
                  <p>
                    My unique value lies in the "middle ground." I understand the high-level business strategy required to scale a technical team, 
                    but I also have the hands-on capability to architect the front-end solutions that make it possible.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <Badge variant="skills">10+ Years SaaS Experience</Badge>
                    <Badge variant="skills">Technical Leadership</Badge>
                    <Badge variant="skills">Enterprise SQL & Data</Badge>                    
                    <Badge variant="skills">User-Centric UX</Badge>
                    <Badge variant="skills">Full-Stack Integration</Badge>
                    <Badge variant="skills">SaaS UI Modernization</Badge>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    )
}