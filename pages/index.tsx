import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'

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
        {/* add about component */}
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
