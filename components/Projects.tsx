import React from 'react'
import Project from './Project'
import ConstraintBackground from './../public/ConstraintBackground.png'
import PrSim from './../public/PrSimLRU.png'

const Projects = () => {
  return (
    <div className="h-full flex flex-col relative text-center md:text-left max-w-5xl px-10 justify-evenly items-center">
      <h4 className="absolute top-24 2xl:top-32  text-gray-400 text-center text-3xl md:text-4xl tracking-[0.35em] uppercase">Projects</h4>

      <div className="relative h-full flex flex-col overflow-h-scroll overflow-x-hidden snap-y snap-mandatory">
        <section className="snap-center">
          <Project
            src={ConstraintBackground.src}
            text="Dataflow constraint implementation using a custom built 'spreadsheet'. Added support for the basic operators: +, -, *, /."
          />
        </section>
        <section className="snap-center">
          <Project
            src={PrSim.src}
            text="Web based simulation of OS page caching and cache replacement."
          />
        </section>
      </div>
    </div>
  )
}

export default Projects
