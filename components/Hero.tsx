import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { ReactLogo, Nodejs, Javascript, Html5, Css3, Python, CPlusPlus } from "@styled-icons/boxicons-logos/"
import { Rust } from "@styled-icons/fa-brands/Rust"

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["", "Hey, I'm Jacob Bahn"],
    delaySpeed: 1000
  })

  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{ y: 500, scale: 0.5 }}
        animate={{ y: 0, scale: 1.0 }}
        transition={{ duration: 0.75 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-wide">
          <span>{text}</span>
          <Cursor />
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.0 }}
          transition={{ delay: 3.0, duration: 2.0 }}
        >
          <p className="uppercase text-sm md:text-xl py-10 tracking-[0.5em] text-gray-400">Software Engineer</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1.0 }}
        transition={{ delay: 4.0, duration: 2.0 }}
        className="grid grid-rows-2 gap-10 pt-12"
      >
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 4.0, duration: 2.0 }}
          className="grid grid-cols-4 gap-5"
        >
          <ReactLogo size="70" />
          <Javascript size="70" />
          <Nodejs size="70" />
          <Html5 size="70" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 4.0, duration: 2.0 }}
          className="grid grid-cols-4 gap-5"
        >
          <Css3 size="70" />
          <Python size="70" />
          <CPlusPlus size="70" />
          <Rust size="70" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero 
