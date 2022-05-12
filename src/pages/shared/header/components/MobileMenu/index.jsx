import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import CustomLink from '../../../../standalone/CustomLink'

const MobileMenu = ({ links }) => {
  return (
    <div className='navbar-end'>
      <div className='dropdown dropdown-end'>
        <label tabIndex='0' className='btn btn-ghost text-neutral lg:hidden'>
          <AiOutlineMenu className='w-6 h-6' />
        </label>
        <ul
          tabIndex='0'
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 space-y-2'
        >
          {links?.map(([to, value], i) => (
            <CustomLink key={i} to={to}>
              {value}
            </CustomLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
