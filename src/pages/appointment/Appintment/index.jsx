import React from 'react'
import { DateProvider } from '../../../contexts/DateContext'
import BannerAppointment from '../components/BannerAppointment'

const Appointment = () => {
  return (
    <main className='container px-6'>
      <DateProvider>
        <BannerAppointment />
      </DateProvider>
    </main>
  )
}

export default Appointment
