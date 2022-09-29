import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="sticky pt-8">
      <motion.div
        initial={{ x: 100, scale: 0.5 }}
        animate={{ x: 0, scale: 1.0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row float-right pr-20"
      >
        <SocialIcon className="transition duration-300 hover:scale-125" fgColor="gray" bgColor="transparent" url='https://www.github.com/jacobabahn' />
        <SocialIcon className="transition duration-300 hover:scale-125" fgColor="gray" bgColor="transparent" url='https://www.linkedin.com/in/jacobbahn/' />
      </motion.div>
    </header>
  )
}

export default Header
