import React from 'react'
import quote from '../../../../../../assets/icons/quote.svg'
import SectionTitle from '../../../../../standalone/SectionTitle'

const TestimonialHeader = () => {
  return (
    <div className='flex flex-row justify-between items-center md:items-start'>
      <SectionTitle
        title={'Testimonial'}
        subTitle='What Our Patients Says'
        normal
      />
      <img src={quote} alt='' className='w-1/4 lg:w-1/6' />
    </div>
  )
}

export default TestimonialHeader
