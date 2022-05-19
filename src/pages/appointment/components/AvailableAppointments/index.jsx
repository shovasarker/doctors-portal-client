import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppointmentContext from '../../../../contexts/AppointmentContext'
import Spinner from '../../../standalone/Spinner'
import AppointmentCard from '../AppointmentCard'
import AppointmentModal from '../AppointmentModal'

const AvailableAppointments = () => {
  const { serviceName } = useParams()
  const [appointment, setAppointment] = useState({})
  const [loading, setLoading] = useState(false)
  const { _id, name, slots } = appointment
  const { name: treatmentName } = useContext(AppointmentContext)

  useEffect(() => {
    const getAppointment = async () => {
      setLoading(true)
      const { data } = await axios.get(
        `https://dpss-server.herokuapp.com/appointment/${serviceName}`
      )

      setAppointment(data)
      setLoading(false)
    }

    getAppointment()
  }, [serviceName])

  if (loading) return <Spinner colored center />

  return (
    <section className='my-20'>
      <h2 className='text-2xl text-secondary text-center font-semibold'>
        {slots?.length > 0 ? 'Available Slots for ' : 'No Slots Abailable for '}
        {name}
      </h2>

      {slots?.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 2 lg:grid-cols-3 gap-5 my-10'>
          {slots?.map((slot) => (
            <AppointmentCard key={slot.id} _id={_id} name={name} slot={slot} />
          ))}
        </div>
      )}

      {treatmentName && <AppointmentModal />}
    </section>
  )
}

export default AvailableAppointments
