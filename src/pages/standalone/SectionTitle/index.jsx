import React from 'react'

const SectionTitle = ({ title, subTitle, center, uppercase }) => {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      <h3
        className={`text-xl font-bold text-secondary ${
          uppercase ? 'uppercase' : ''
        }`}
      >
        {title}
      </h3>
      <h2 className='text-4xl mt-3'>{subTitle}</h2>
    </div>
  )
}

export default SectionTitle
