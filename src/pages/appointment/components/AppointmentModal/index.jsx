import { format } from 'date-fns'
import React, { useContext } from 'react'
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import AppointmentContext from '../../../../contexts/AppointmentContext'
import auth from '../../../../firebase/firebase.init'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'
import { toast } from 'react-toastify'

const AppointmentModal = ({ refetch }) => {
  const { name, selected, slot, _id, setName, setSlot, set_Id } =
    useContext(AppointmentContext)
  const [{ email, displayName }] = useAuthState(auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const addBooking = async (booking) => {
    const { data } = await axios.post(
      'https://dpss-server.herokuapp.com/booking',
      booking
    )
    if (data.insertedId) {
      toast.success(
        `Succefully Booked Your Appointment of ${booking.treatment} at ${booking.slot} on ${booking.date}`
      )
      refetch()
      return
    }

    if (!data.success) {
      return toast.warning(
        `You Already Have an Appointment of ${data.booking.treatment} on ${data.booking.date} at ${data.booking.slot}`
      )
    }
  }

  const onSubmit = (data) => {
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: format(selected, 'PP'),
      slot: slot.time,
      patient: {
        name: displayName,
        email: email,
        phone: data.phoneNumber,
      },
    }

    addBooking(booking)
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
              value={slot?.time}
              readOnly
            />
            <input
              type='text'
              className='input w-full bg-neutral/10'
              placeholder='Full Name'
              {...register('fullName')}
              value={displayName}
              readOnly
            />
            <input
              type='email'
              placeholder='Email'
              className='input w-full bg-neutral/10'
              {...register('name')}
              value={email}
              readOnly
            />
            <Input
              type='number'
              name='phoneNumber'
              placeholder='Phone Number'
              register={register}
              required='Phone Number is Required'
              error={errors?.phoneNumber}
            />

            <Button type='submit' neutral className={'!w-full !mt-6'}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AppointmentModal
