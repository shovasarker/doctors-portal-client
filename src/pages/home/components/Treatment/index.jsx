import React from 'react'
import { TREATMENT } from '../../../../data'

const Treatment = () => {
  const { img, title, details } = TREATMENT
  return (
    <section className='container px-6 my-24'>
      <div className='hero bg-base-100'>
        <div className='hero-content !p-0 !max-w-full xl:!max-w-[80%] !gap-6 xl:!gap-20 flex-col lg:flex-row'>
          <img
            src={img}
            alt={title}
            className='mx-w-full lg:max-w-[40%] rounded-lg'
          />
          <div className=''>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='py-10'>{details}</p>
            <button className='btn bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary border-0 text-base-100 font-bold'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Treatment
