import { format } from 'date-fns'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import AppointmentContext from '../../../../contexts/AppointmentContext'
import auth from '../../../../firebase/firebase.init'
import Button from '../../../standalone/Button'
import Input from '../../../standalone/Input'

const AppointmentModal = () => {
  const { name, selected, slot, setName, setSlot, set_Id } =
    useContext(AppointmentContext)
  const [{ email, displayName }] = useAuthState(auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
