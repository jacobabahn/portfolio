import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["", "Hey, I'm Jacob"],
    delaySpeed: 1500
  })

  return (
    <div className="h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        initial={{ x: -500, scale: 0.5 }}
        animate={{ x: 0, scale: 1.0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl lg:text-6xl">
          <span>{text}</span>
          <Cursor />
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.0 }}
          transition={{ delay: 3.0, duration: 2.0 }}
        >
          <p className="uppercase text-xl pt-10 tracking-widest">Software Engineer</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero 
