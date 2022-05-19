import React from 'react'

const Button = ({ children, neutral, onClick, className, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${
        !neutral
          ? 'bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary'
          : 'bg-neutral'
      } border-0 text-base-100 font-bold ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}

export default Button
