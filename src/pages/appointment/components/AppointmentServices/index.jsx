import React, { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'
import DateContext from '../../../../contexts/DateContext'
import axios from 'axios'
import AppointmentServiceCard from '../AppointmentServiceCard'

const AppointmentServices = () => {
  const { selected } = useContext(DateContext)
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/services.json`
      )

      setServices(data)
    }

    getServices()
  }, [])

  return (
    <section className='container px-6 my-10'>
      <h3 className='font-2xl text-center text-secondary'>
        Available Services on {format(selected, 'PP')}
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 2 lg:grid-cols-3 gap-5 my-10'>
        {services?.map((service) => (
          <AppointmentServiceCard service={service} key={service.id} />
        ))}
      </div>
    </section>
  )
}

export default AppointmentServices
