import { format } from 'date-fns'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DateContext from '../../../../contexts/DateContext'

const AvailableAppointments = () => {
  const { serviceId } = useParams()
  const { selected } = useContext(DateContext)
  return (
    <div>
      <h2>
        Available {serviceId} id service on {format(selected, 'PP')}
      </h2>
    </div>
  )
}

export default AvailableAppointments
