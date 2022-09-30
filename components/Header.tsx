import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="">
      <div className="flex flex-row fixed w-1/2 items-center justify-around bg-black">
        <motion.div
          initial={{ x: -100, scale: 0.5 }}
          animate={{ x: 0, scale: 1.0 }}
          transition={{ duration: 0.5 }}
          className="float-right pr-20"
        >
          <SocialIcon className="transition duration-300 hover:scale-125" fgColor="gray" bgColor="transparent" url='https://www.github.com/jacobabahn' />
          <SocialIcon className="transition duration-300 hover:scale-125" fgColor="gray" bgColor="transparent" url='https://www.linkedin.com/in/jacobbahn/' />
        </motion.div>
        <motion.div
          initial={{ x: 100, scale: 0.5 }}
          animate={{ x: 0, scale: 1.0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row gap-10 float-left pr-20 text-sm sm:text:md"
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
