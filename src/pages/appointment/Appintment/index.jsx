import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppointmentProvider } from '../../../contexts/AppointmentContext'
import Footer from '../../shared/footer/Footer'
import AppointmentModal from '../components/AppointmentModal'
import AppointmentServices from '../components/AppointmentServices'
import BannerAppointment from '../components/BannerAppointment'

const Appointment = () => {
  return (
    <main className='container px-6'>
      <AppointmentProvider>
        <BannerAppointment />
        <AppointmentServices />
        <Outlet />
        <AppointmentModal />
      </AppointmentProvider>
      <Footer />
    </main>
  )
}

export default Appointment
