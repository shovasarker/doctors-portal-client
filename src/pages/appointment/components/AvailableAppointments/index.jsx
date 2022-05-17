import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppointmentCard from '../AppointmentCard'

const AvailableAppointments = () => {
  const { serviceId } = useParams()
  const [appointment, setAppointment] = useState({})
  const { name, slots } = appointment

  useEffect(() => {
    const getAppointment = async () => {
      const { data } = await axios.get(
        `${process.env.PUBLIC_URL}/appointment.json`
      )

      setAppointment(data.find(({ _id }) => _id === parseInt(serviceId)))
    }

    getAppointment()
  }, [serviceId])

  return (
    <section className='my-20'>
      <h2 className='text-2xl text-secondary text-center font-semibold'>
        {slots?.length > 0 ? 'Available Slots for ' : 'No Slots Abailable for '}
        {name}
      </h2>

      {slots?.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 2 lg:grid-cols-3 gap-5 my-10'>
          {slots?.map((timeSlots, i) => (
            <AppointmentCard key={i} name={name} timeSlots={timeSlots} />
          ))}
        </div>
      )}
    </section>
  )
}

export default AvailableAppointments
