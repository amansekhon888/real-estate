import React from 'react'
import { logo } from '../assets/images'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-10/12 flex justify-between py-3 m-auto items-center'>
        <img className='w-[8vw]' src={logo} alt='logo' />
        <div className='flex gap-4 text-[0.8vw] font-sans font-semibold'>
            <Link to="/">HOME</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">GALLARY</Link>
            <Link to="/">PROJECTS</Link>
            <Link to="/">TEAMS</Link>
            <Link to="/">CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar