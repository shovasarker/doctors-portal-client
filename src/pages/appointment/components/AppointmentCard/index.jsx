import React, { useContext } from 'react'
import AppointmentContext from '../../../../contexts/AppointmentContext'

const AppointmentCard = ({ _id, name, slot, price }) => {
  const { setName, setSlot, set_Id, setPrice } = useContext(AppointmentContext)
  const { time } = slot
  return (
    <div className='card w-full bg-base-100 shadow-xl'>
      <div className='card-body text-center'>
        <h2 className='text-lg text-secondary font-semibold'>{name}</h2>
        <p>{time}</p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className='card-actions'>
          <label
            htmlFor='appointment-modal'
            className={
              'btn btn-md modal-button bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary border-0 text-base-100 font-bold mt-8 mx-auto'
            }
            onClick={() => {
              setName(name)
              setSlot(slot)
              set_Id(_id)
              setPrice(price)
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
