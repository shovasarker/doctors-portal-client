import React from 'react'

const Input = ({
  register,
  label,
  error,
  name,
  required,
  placeholder,
  type,
}) => {
  return (
    <div>
      {label && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${error && 'border-red-500'}`}
        {...register(name, { required: required })}
      />
      {error && (
        <label className='label'>
          <span className='label-text-alt text-red-500'>{error?.message}</span>
        </label>
      )}
    </div>
  )
}

export default Input
