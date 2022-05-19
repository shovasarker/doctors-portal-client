import React, { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'
import axios from 'axios'
import AppointmentServiceCard from '../AppointmentServiceCard'
import AppointmentContext from '../../../../contexts/AppointmentContext'
import Spinner from '../../../standalone/Spinner'

const AppointmentServices = () => {
  const { selected } = useContext(AppointmentContext)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getServices = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `https://dpss-server.herokuapp.com/services`
      )

      setServices(data)
      setLoading(false)
    }

    getServices()
  }, [])

  if (loading) return <Spinner colored center />

  return (
    <section className='container px-6 my-10'>
      <h3 className='font-2xl text-center text-secondary'>
        Available Services on {format(selected, 'PP')}
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 2 lg:grid-cols-3 gap-5 my-10'>
        {services?.map((service) => (
          <AppointmentServiceCard service={service} key={service._id} />
        ))}
      </div>
    </section>
  )
}

export default AppointmentServices
