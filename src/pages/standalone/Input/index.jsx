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
        <label class='label'>
          <span class='label-text'>{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full ${error && 'border-red-500'}`}
        {...register(name, { required: required })}
      />
      {error && (
        <label class='label'>
          <span class='label-text-alt text-red-500'>{error?.message}</span>
        </label>
      )}
    </div>
  )
}

export default Input
