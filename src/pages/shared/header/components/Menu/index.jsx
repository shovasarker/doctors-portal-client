import React from 'react'
import CustomLink from '../../../../standalone/CustomLink'

const Menu = ({ links }) => {
  return (
    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal p-0 space-x-1'>
        {links?.map(([to, value], i) => (
          <CustomLink key={i} to={to}>
            {value}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export default Menu
