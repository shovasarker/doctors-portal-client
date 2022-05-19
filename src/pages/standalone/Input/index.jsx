import React from 'react'

const Input = ({
  register,
  label,
  error,
  name,
  required,
  pattern,
  minLength,
  placeholder,
  type,
}) => {
  return (
    <div>
      {label && (
        <label className='label !py-1'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${error && 'border-red-500'}`}
        {...register(name, {
          required: required,
          pattern: pattern,
          minLength: minLength,
        })}
      />
      {error && (
        <label className='label !py-1'>
          <span className='label-text-alt text-red-500'>{error?.message}</span>
        </label>
      )}
    </div>
  )
}

export default Input
