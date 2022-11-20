import React from 'react'
import Project from './Project'
import ConstraintBackground from './../public/ConstraintBackground.png'

const Projects = () => {
  return (
    <div className="h-full flex flex-col relative text-center md:text-left max-w-5xl px-0 md:px-10 justify-evenly items-center">
      <h4 className="absolute bg-[#242424] top-32 2xl:top-40  text-gray-400 text-center text-3xl md:text-4xl tracking-[0.35em] uppercase">Projects</h4>
      <section>
        <Project
          src={ConstraintBackground.src}
          text="Dataflow constraint implementation using a custom built 'spreadsheet'. Added support for the basic operators: +, -, *, /."
        />
      </section>
    </div>
  )
}

export default Projects
