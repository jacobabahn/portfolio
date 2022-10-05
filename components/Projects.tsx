import React from 'react'
import { motion } from 'framer-motion'
import ConstraintMockup from '../public/ConstraintMockup.png'
import ConstraintBackground from '../public/ConstraintBackground.png'

const Projects = () => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-5xl px-10 justify-center gap-10 items-center">
      <div className="absolute top-32 text-gray-400 text-center text-3xl md:text-4xl tracking-[0.35em] uppercase">Projects</div>
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={ConstraintBackground.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-96 h-56 rounded-lg shadow-lg object-cover md:w-10/12 md:h-auto m-5"
      />
      <p className="text-xl md:text-2xl px-2">
        Dataflow constraint implementation using a custom built "spreadsheet". Added support for the basic operators: +, -, *, /.
      </p>
    </div>
  )
}

export default Projects
