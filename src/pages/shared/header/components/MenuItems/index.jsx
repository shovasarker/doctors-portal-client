import React from 'react'
import CustomLink from '../../../../standalone/CustomLink'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/appointment', 'Appointment'],
  ['/reviews', 'Reviews'],
  ['/contact-us', 'Contact Us'],
]

const MenuItems = () => {
  return (
    <>
      {links?.map(([to, value], i) => (
        <li key={i}>
          <CustomLink to={to}>{value}</CustomLink>
        </li>
      ))}
      <li>
        <CustomLink to={'/login'}>Login</CustomLink>
      </li>
    </>
  )
}

export default MenuItems
