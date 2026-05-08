import { Navbar, Hero, Resume, About, Skills, Projects, Contact, Footer } from '../components';  //points at ./components/index.js by default

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}
