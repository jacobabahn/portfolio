import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Project from '../components/Project'
import PrSim from './../public/PrSimLRU.png'

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth">
      <Head>
        <title>Jacob's Portfolio</title>
      </Head>
      <section>
        <Header />
      </section>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center flex justify-center">
        <About />
      </section>
      <section id="projects" className="snap-center flex justify-center">
        <a href='https://constraint.jacobbahn.com'>
          <Projects />
        </a>
      </section>
      <section id="prsim" className="snap-center flex justify-center">
        <a href='https://jacobabahn.github.io/PageReplacementSimulator/'>
          <Project
            src={PrSim.src}
            text="Web based simulation of OS page caching and cache replacement."
          />
        </a>
        {/* add contact component */}
      </section>
    </div>
  )
}

export default Home
