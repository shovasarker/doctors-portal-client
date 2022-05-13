import React from 'react'
import Appointment from '../components/Appointment'
import Banner from '../components/Banner'
import Info from '../components/info/Info'
import Services from '../components/services/Services'
import Testimonials from '../components/testimonials/Testimonials'
import Treatment from '../components/Treatment'

const Home = () => {
  return (
    <main>
      <Banner />
      <Info />
      <Services />
      <Treatment />
      <Appointment />
      <Testimonials />
    </main>
  )
}

export default Home
