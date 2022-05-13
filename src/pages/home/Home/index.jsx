import React from 'react'

import MakeAppointment from '../components/MakeAppointment'
import Info from '../components/info/Info'
import Services from '../components/services/Services'
import Testimonials from '../components/testimonials/Testimonials'
import Treatment from '../components/Treatment'
import ContactUs from '../components/contactus/ContactUs'
import BannerHome from '../components/BannerHome'

const Home = () => {
  return (
    <main>
      <BannerHome />
      <Info />
      <Services />
      <Treatment />
      <MakeAppointment />
      <Testimonials />
      <ContactUs />
    </main>
  )
}

export default Home
