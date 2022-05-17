import React, { useContext } from 'react'
import AppointmentContext from '../../../../contexts/AppointmentContext'

const AppointmentCard = ({ name, timeSlots }) => {
  const { setName, setSlot } = useContext(AppointmentContext)
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body text-center'>
        <h2 className='text-lg text-secondary font-semibold'>{name}</h2>
        <p>{timeSlots}</p>
        <div className='card-actions'>
          <label
            htmlFor='appointment-modal'
            className={
              'btn modal-button bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary border-0 text-base-100 font-bold mt-8 mx-auto'
            }
            onClick={() => {
              console.log('called')
              setName(name)
              setSlot(timeSlots)
            }}
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard
