import React from 'react'

const ServiceCard = ({ img, title, details }) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl pt-10'>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title !block'>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default ServiceCard
