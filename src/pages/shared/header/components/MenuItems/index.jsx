import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import auth from '../../../../../firebase/firebase.init'
import Button from '../../../../standalone/Button'
import CustomLink from '../../../../standalone/CustomLink'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/appointment', 'Appointment'],
  ['/reviews', 'Reviews'],
  ['/contact-us', 'Contact Us'],
]

const MenuItems = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      {links?.map(([to, value], i) => (
        <li key={i}>
          <CustomLink to={to}>{value}</CustomLink>
        </li>
      ))}
      {user ? (
        <>
          <Button
            outlined
            className={
              '!px-2 !py-1.5 !h-auto !min-h-0 !capitalize !font-normal'
            }
            onClick={() => signOut(auth)}
          >
            Log Out
          </Button>
        </>
      ) : (
        <>
          <li>
            <CustomLink to={'/login'}>Login</CustomLink>
          </li>
        </>
      )}
    </>
  )
}

export default MenuItems
