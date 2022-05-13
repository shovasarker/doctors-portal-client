import React from 'react'

const TestimonialCard = ({ img, name, address, quote }) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body !gap-8'>
        <p>{quote}</p>
        <div className='flex justify-start items-center gap-4'>
          <div className='avatar'>
            <div className='w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2'>
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='mt-0.5'>{address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
