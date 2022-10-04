import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
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
      <section>
        {/* add projects component */}
      </section>
      <section>
        {/* add contact component */}
      </section>
    </div>
  )
}

export default Home
