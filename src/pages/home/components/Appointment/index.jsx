import React from 'react'
import { useNavigate } from 'react-router-dom'
import { APPOINTMENT } from '../../../../data'
import Button from '../../../standalone/Button'

const Appointment = () => {
  const navigate = useNavigate()
  const { img, sectionTitle, title, details } = APPOINTMENT
  return (
    <section className='mt-40 mb-20'>
      <div
        className='hero bg-base-200'
        style={{
          backgroundImage: 'url(https://i.ibb.co/xXfm9Dv/appointment.png)',
        }}
      >
        <div className='hero-content !container !px-6 !p-0 flex-col lg:flex-row'>
          <img
            src={img}
            alt={title}
            className='hidden lg:block lg:w-1/2 xl:w-[45%] lg:-mt-12 xl:-mt-20'
          />
          <div className='lg:pr-6 xl:pr-32 py-10 lg:py-4 xl:py-16 text-base-100'>
            <h3 className='text-lg font-bold text-secondary'>{sectionTitle}</h3>
            <h1 className='text-4xl font-semibold mt-5'>{title}</h1>
            <p className='py-6'>{details}</p>
            <Button onClick={() => navigate('/appointment')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment
