import React from 'react'
import quote from '../../../../../../assets/icons/quote.svg'

const TestimonialHeader = () => {
  return (
    <div className='flex flex-row justify-between items-center md:items-start'>
      <div>
        <h3 className='text-xl font-bold text-secondary'>Testimonial</h3>
        <h2 className='text-4xl mt-3'>What Our Patients Says</h2>
      </div>
      <img src={quote} alt='' className='w-1/4 lg:w-1/6' />
    </div>
  )
}

export default TestimonialHeader
