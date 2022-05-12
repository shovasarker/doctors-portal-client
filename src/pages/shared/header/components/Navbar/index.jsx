import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/appointment', 'Appointment'],
  ['/reviews', 'Reviews'],
  ['/contact-us', 'Contact Us'],
]

const Navbar = () => {
  return (
    <div className='navbar !container !px-6 py-4 justify-between bg-base-100'>
      <Link
        to={'/'}
        className='block text-2xl navbar-center text-neutral font-medium'
      >
        Doctor's Portal
      </Link>
      <MobileMenu links={links} />
      <Menu links={links} />
    </div>
  )
}

export default Navbar
