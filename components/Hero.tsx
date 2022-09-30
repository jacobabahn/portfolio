import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["", "Hey, I'm Jacob"],
    delaySpeed: 1000
  })

  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-evenly text-center overflow-hidden">
      <motion.div
        initial={{ x: -500, scale: 0.5 }}
        animate={{ x: 0, scale: 1.0 }}
        transition={{ duration: 0.75 }}
      >
        <h1 className="text-5xl lg:text-7xl tracking-wide">
          <span>{text}</span>
          <Cursor />
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.0 }}
          transition={{ delay: 2.5, duration: 2.0 }}
        >
          <p className="uppercase text-lg pt-10 tracking-[0.5em] text-gray-400">Software Engineer</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero 
