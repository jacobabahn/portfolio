import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="flex flex-row justify-center">
      <div className="flex flex-row fixed w-8/12 3xl:w-1/2 items-center justify-between mt-3" id="nav">
        <motion.div
          initial={{ x: -100, scale: 0.5 }}
          animate={{ x: 0, scale: 1.0 }}
          transition={{ duration: 0.5 }}
          className="float-right pl-5"
        >
          <SocialIcon className="transition duration-300 hover:scale-125" fgColor="gray" bgColor="transparent" url='https://www.github.com/jacobabahn' />
          <SocialIcon className="transition duration-300 hover:scale-125" fgColor="gray" bgColor="transparent" url='https://www.linkedin.com/in/jacobbahn/' />
        </motion.div>
        <motion.div
          initial={{ x: 100, scale: 0.5 }}
          animate={{ x: 0, scale: 1.0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-10 pr-7 float-left text-sm md:text-md"
        >
          <button className="text-gray-400 tracking-[0.25em]">Home</button>
          <button className="text-gray-400 tracking-[0.25em]">About</button>
          <button className="text-gray-400 tracking-[0.25em]">Projects</button>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
