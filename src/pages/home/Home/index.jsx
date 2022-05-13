import React from 'react'
import MakeAppointment from '../components/MakeAppointment'
import Banner from '../components/Banner'
import Info from '../components/info/Info'
import Services from '../components/services/Services'
import Testimonials from '../components/testimonials/Testimonials'
import Treatment from '../components/Treatment'
import ContactUs from '../components/contactus/ContactUs'

const Home = () => {
  return (
    <main>
      <Banner />
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
