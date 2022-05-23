import axios from 'axios'
import { format } from 'date-fns'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import AppointmentContext from '../../../../contexts/AppointmentContext'
import Spinner from '../../../standalone/Spinner'
import AppointmentCard from '../AppointmentCard'
import AppointmentModal from '../AppointmentModal'

const AvailableAppointments = () => {
  const { serviceName } = useParams()
  const { name: treatmentName, selected } = useContext(AppointmentContext)

  const formattedDate = format(selected, 'PP')

  const getAppointment = async () => {
    return await axios.get(
      `https://dpss-server.herokuapp.com/appointment/${serviceName}?date=${formattedDate}`
    )
  }

  const { data, isLoading, refetch } = useQuery(
    ['available', formattedDate + serviceName],
    getAppointment
  )
  if (isLoading) return <Spinner colored center />
  const { _id, name, available, price } = data?.data

  return (
    <section className='my-20'>
      <h2 className='text-2xl text-secondary text-center font-semibold'>
        {available?.length > 0
          ? 'Available Slots for '
          : 'No Slots Abailable for '}
        {name}
      </h2>

      {available?.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 2 lg:grid-cols-3 gap-5 my-10'>
          {available?.map((slot) => (
            <AppointmentCard
              key={slot.id}
              _id={_id}
              name={name}
              slot={slot}
              price={price}
            />
          ))}
        </div>
      )}

      {treatmentName && <AppointmentModal refetch={refetch} />}
    </section>
  )
}

export default AvailableAppointments
