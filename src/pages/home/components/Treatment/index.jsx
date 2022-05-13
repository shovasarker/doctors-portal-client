import React from 'react'
import { TREATMENT } from '../../../../data'
import Button from '../../../standalone/Button'

const Treatment = () => {
  const { img, title, details } = TREATMENT
  return (
    <section className='container px-6 my-24'>
      <div className='hero bg-base-100'>
        <div className='hero-content !p-0 !max-w-full xl:!max-w-[80%] !gap-10 xl:!gap-20 flex-col md:flex-row'>
          <img
            src={img}
            alt={title}
            className='max-w-[90%] md:max-w-[40%] rounded-lg'
          />
          <div className=''>
            <h1 className='text-5xl leading-tight md:text-4xl lg:text-5xl lg:leading-tight font-bold'>
              {title}
            </h1>
            <p className='py-5 lg:py-10'>{details}</p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Treatment
