import React from 'react'
import { motion } from 'framer-motion'

type Props = { src: string, text: string }

const Project = (props: Props) => {
  return (
    <div className="flex flex-col h-screen justify-evenly">
      <div className="h-full flex flex-col relative text-center md:text-left max-w-5xl px-10 justify-evenly items-center">
        <motion.img
          initial={{ y: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={props.src}
          className="-mb-20 mx-auto md:mb-0 md:mt-28 w-96 h-56 rounded-lg shadow-lg object-cover md:w-10/12 md:h-auto m-5"
        />
        <p className="text-xl bg-[#242424] md:text-2xl px-2 tracking-wider text-center">{props.text}</p>
      </div>
    </div>
  )
}

export default Project
