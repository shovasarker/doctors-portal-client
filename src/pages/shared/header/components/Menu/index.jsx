import React from 'react'
import CustomLink from '../../../../standalone/CustomLink'

const Menu = ({ links }) => {
  return (
    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal p-0 space-x-1'>
        {links?.map(([to, value], i) => (
          <li key={i}>
            <CustomLink to={to}>{value}</CustomLink>
          </li>
        ))}
        <li>
          <CustomLink to={'/login'}>Login</CustomLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
