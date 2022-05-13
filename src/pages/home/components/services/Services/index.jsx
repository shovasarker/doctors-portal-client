import React from 'react'
import { SERVICES } from '../../../../../data'
import ServiceCard from '../ServiceCard'

const Services = () => {
  return (
    <section className='container px-6 my-20 text-center text-neutral'>
      <h3 className='text-xl text-primary font-bold uppercase'>Our Services</h3>
      <h2 className='text-4xl mt-2'>Services We Provide</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-20'>
        {SERVICES?.map(({ id, ...otherProps }) => (
          <ServiceCard key={id} id={id} {...otherProps} />
        ))}
      </div>
    </section>
  )
}

export default Services
