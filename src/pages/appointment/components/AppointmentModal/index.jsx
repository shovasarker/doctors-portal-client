import { format } from 'date-fns'
import React, { useContext } from 'react'
import AppointmentContext from '../../../../contexts/AppointmentContext'

const AppointmentModal = () => {
  const { name, selected, slot } = useContext(AppointmentContext)
  return (
    <>
      <input type='checkbox' id='appointment-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box relative'>
          <label
            htmlFor='appointment-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h2 className='text-neutral text-lg font-semibold'>{name}</h2>
          <form
            className='space-y-4 my-5'
            onSubmit={() => console.log('called')}
          >
            <input
              type='text'
              placeholder='Date'
              className='input w-full bg-neutral/10'
              value={format(selected, 'PP')}
              readOnly
            />
            <input
              type='text'
              placeholder='Time'
              className='input w-full bg-neutral/10'
              value={slot}
              readOnly
            />
            <div className='form-control w-full'>
              <input
                type='text'
                placeholder='Full Name'
                className='input input-bordered w-full'
              />
              <p className='text-red-500 text-xs px-2 mt-2'></p>
            </div>
            <div className='form-control w-full'>
              <input
                type='number'
                placeholder='Phone Number'
                className='input input-bordered w-full'
              />
              <p className='text-red-500 text-xs px-2 mt-2'></p>
            </div>
            <div className='form-control w-full'>
              <input
                type='email'
                placeholder='Email'
                className='input input-bordered w-full'
              />
              <p className='text-red-500 text-xs px-2 mt-2'></p>
            </div>

            <button
              type='submit'
              htmlFor='appointment-modal'
              className='btn bg-neutral text-base-100 w-full uppercase !mt-6'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AppointmentModal
