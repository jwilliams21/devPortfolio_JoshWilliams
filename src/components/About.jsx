

export default function About() {

    return (
        <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: The Headshot (4 columns wide on desktop) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25"></div>
              <img 
                src="/path-to-your-photo.jpg" 
                alt="Josh Williams" 
                className="relative rounded-2xl w-64 h-80 object-cover shadow-xl border border-slate-100"
              />
            </div>
          </div>

          {/* Column 2: The Story (7 columns wide) */}
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bridging Leadership & Engineering</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I build software through the lens of a Leader and the mindset of a Support Engineer. 
                With over a decade of experience in the tech SaaS space—most recently as an 
                Assistant Director—I’ve returned to my roots to build the tools I used to manage.
              </p>
              <p>
                My unique value lies in the "middle ground." I understand the high-level business 
                strategy required to scale a technical team, but I also have the hands-on 
                capability to architect the front-end solutions that make it possible.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">User-Centric Design</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">Enterprise Data (SQL)</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">Team Scalability</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    )
}