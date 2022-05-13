import React from 'react'

const Input = ({ register, name, required, placeholder, type }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className='input w-full'
        {...register(name, { required: required })}
      />
    </div>
  )
}

export default Input
