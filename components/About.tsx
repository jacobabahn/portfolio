import React from 'react'
import { motion } from 'framer-motion'
import portrait from './../public/portrait.png'

const About = () => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly items-center">
      <h2 className="absolute bg-[#242424] top-32 pb-0 lg:pb-5 2xl:top-40 text-gray-400 text-center text-3xl md:text-4xl tracking-[0.35em] uppercase">About</h2>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={portrait.src}
        className="mt-48 md:mt-0 md:mb-0 flex-shrink-0 w-56 h-64 rounded-lg object-cover md:w-96 md:h-auto m-5"
      />
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className=""
      >
        <p className="ml-0 md:ml-10 bg-[#242424] text-xl md:text-3xl">
          I am a Software Engineer with a M.S and B.S in Computer Science. I have a passion for 
          learning new technologies and creating things.
        </p>
        <br />
        <p className="ml-0 md:ml-10 bg-[#242424] text-xl md:text-3xl">
          My hobbies include working out, basketball, football, and of course, technology.
          Some development languages I've worked with are Python, JavaScript, TypeScript, Go, and C++.
          I am proficient in the React library and have experience with the Next.js framework.
         </p>
      </motion.div>
    </div>
  )
}

export default About
