import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        {/* add projects component */}
      </section>
      <section>
        {/* add contact component */}
      </section>
    </>
  )
}

export default Home
