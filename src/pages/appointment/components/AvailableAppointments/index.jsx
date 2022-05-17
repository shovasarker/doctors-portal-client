import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppointmentContext from '../../../../contexts/AppointmentContext'
import AppointmentCard from '../AppointmentCard'
import AppointmentModal from '../AppointmentModal'

const AvailableAppointments = () => {
  const { serviceId } = useParams()
  const [appointment, setAppointment] = useState({})
  const { _id, name, slots } = appointment
  const { name: treatmentName } = useContext(AppointmentContext)

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
            <AppointmentCard
              key={i}
              _id={_id}
              name={name}
              timeSlots={timeSlots}
            />
          ))}
        </div>
      )}

      {treatmentName && <AppointmentModal />}
    </section>
  )
}

export default AvailableAppointments
