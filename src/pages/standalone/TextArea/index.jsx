import React from 'react'

const TextArea = ({ register, name, required, placeholder, type }) => {
  return (
    <div>
      <textarea
        type={type}
        placeholder={placeholder}
        className='textarea w-full h-32'
        {...register(name, { required: required })}
      />
    </div>
  )
}

export default TextArea
