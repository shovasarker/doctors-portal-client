import React from 'react'
import { Outlet } from 'react-router-dom'
import { DateProvider } from '../../../contexts/DateContext'
import Footer from '../../shared/footer/Footer'
import AppointmentServices from '../components/AppointmentServices'
import BannerAppointment from '../components/BannerAppointment'

const Appointment = () => {
  return (
    <main className='container px-6'>
      <DateProvider>
        <BannerAppointment />
        <AppointmentServices />
        <Outlet />
      </DateProvider>
      <Footer />
    </main>
  )
}

export default Appointment
