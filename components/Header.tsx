import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex flex-row justify-center">
      <div className="flex flex-row fixed w-11/12 md:w-7/12 max-w-screen-2xl items-center justify-between mt-3 z-10" id="nav">
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
          className="flex flex-row gap-1 pr-4 float-left text-sm md:text-md font-medium"
        >
          <Link href="#hero">
            <button className="navBtn">Home</button>
          </Link>
          <Link href="#about">
            <button className="navBtn">About</button>
          </Link>
          <Link href="#projects">
            <button className="navBtn">Projects</button>
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
