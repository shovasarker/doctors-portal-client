import React from 'react'
import { SERVICES } from '../../../../../data'
import SectionTitle from '../../../../standalone/SectionTitle'
import ServiceCard from '../ServiceCard'

const Services = () => {
  return (
    <section className='container px-6 my-20 text-center text-neutral'>
      <SectionTitle
        title={'Our Services'}
        subTitle='Services We Provide'
        center
        uppercase
      />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-20'>
        {SERVICES?.map(({ id, ...otherProps }) => (
          <ServiceCard key={id} id={id} {...otherProps} />
        ))}
      </div>
    </section>
  )
}

export default Services
