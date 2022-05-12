import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ to, children }) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })

  return (
    <Link
      to={to}
      className={`btn ${
        match ? 'btn-neutral text-base-100' : 'btn-ghost text-neutral'
      }`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
