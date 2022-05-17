import { format } from 'date-fns'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AppointmentContext from '../../../../contexts/AppointmentContext'

const AppointmentModal = () => {
  const { name, selected, slot, setName, setSlot, set_Id } =
    useContext(AppointmentContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
    setName('')
    setSlot('')
    set_Id('')
  }
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
          <form className='space-y-4 my-5' onSubmit={handleSubmit(onSubmit)}>
            <input
              type='text'
              placeholder='Date'
              className='input w-full bg-neutral/10'
              {...register('date')}
              value={format(selected, 'PP')}
              readOnly
            />
            <input
              type='text'
              placeholder='Time'
              className='input w-full bg-neutral/10'
              {...register('slot')}
              value={slot}
              readOnly
            />
            <div className='form-control w-full'>
              <input
                type='text'
                placeholder='Full Name'
                className={`input input-bordered w-full ${
                  errors?.fullName && '!border-red-500'
                }`}
                {...register('fullName', { required: 'Full Name is Required' })}
              />
              <p className='text-red-500 text-xs px-2 mt-2'>
                {errors?.fullName?.message}
              </p>
            </div>
            <div className='form-control w-full'>
              <input
                type='number'
                placeholder='Phone Number'
                className={`input input-bordered w-full ${
                  errors?.phoneNumber && '!border-red-500'
                }`}
                {...register('phoneNumber', {
                  required: 'Phone Number is Required',
                })}
              />
              <p className='text-red-500 text-xs px-2 mt-2'>
                {errors?.phoneNumber?.message}
              </p>
            </div>
            <div className='form-control w-full'>
              <input
                type='email'
                placeholder='Email'
                className={`input input-bordered w-full ${
                  errors?.email && '!border-red-500'
                }`}
                {...register('email', { required: 'Email is Required' })}
              />
              <p className='text-red-500 text-xs px-2 mt-2'>
                {errors?.email?.message}
              </p>
            </div>

            <button
              type='submit'
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
