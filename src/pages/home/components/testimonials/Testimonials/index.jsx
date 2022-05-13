import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TestimonialCard from '../components/TestimonialCard'

import TestimonialHeader from '../components/TestimonialHeader'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const getTesitmonials = async () => {
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/testimonial.json`
      )
      setTestimonials(data)
    }

    getTesitmonials()
  }, [])

  return (
    <section className='container px-6 my-20 text-neutral'>
      <TestimonialHeader />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
        {testimonials?.map(({ id, ...otherProps }) => (
          <TestimonialCard key={id} {...otherProps} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
