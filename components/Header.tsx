import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="pt-5">
      <div>
        <SocialIcon className="" fgColor="gray" bgColor="transparent" url='https://www.linkedin.com/in/jacobbahn/' />
        <SocialIcon fgColor="gray" bgColor="transparent" url='https://www.github.com/jacobabahn' />
      </div>
    </header>
  )
}

export default Header
