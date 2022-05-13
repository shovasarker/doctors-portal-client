import React from 'react'

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary border-0 text-base-100 font-bold ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  )
}

export default Button
