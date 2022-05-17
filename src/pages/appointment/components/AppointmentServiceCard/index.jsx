import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppointmentServiceCard = ({ service: { id, name } }) => {
  const navigate = useNavigate()
  return (
    <div
      className='card w-full bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300'
      onClick={() => navigate(`/appointment/${id}`)}
    >
      <div className='card-body'>
        <h2 className='text-lg font-semibold text-secondary text-center'>
          {name}
        </h2>
      </div>
    </div>
  )
}

export default AppointmentServiceCard
