import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const getTesitmonials = async () => {
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/testimonial.json`
      )
      console.log(data)
    }

    getTesitmonials()
  }, [])

  return <section></section>
}

export default Testimonials
