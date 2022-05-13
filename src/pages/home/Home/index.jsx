import React from 'react'
import Banner from '../components/Banner'
import Info from '../components/info/Info'
import Services from '../components/services/Services'
import Treatment from '../components/Treatment'

const Home = () => {
  return (
    <main>
      <Banner />
      <Info />
      <Services />
      <Treatment />
    </main>
  )
}

export default Home
