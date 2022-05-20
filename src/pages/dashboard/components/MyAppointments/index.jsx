import axios from 'axios'
import { format } from 'date-fns'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import auth from '../../../../firebase/firebase.init'
import Button from '../../../standalone/Button'
import Spinner from '../../../standalone/Spinner'
import MyAppintmentsTable from '../MyAppointmentsTable'

const MyAppointments = () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const formattedDate = format(date, 'PP')
  const [{ email }] = useAuthState(auth)

  const getMyAppointments = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/booking?date=${formattedDate}&email=${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    )
    return data
  }

  const { data, isLoading, error } = useQuery(
    ['my-appointments', formattedDate],
    getMyAppointments
  )
  useEffect(() => {
    if (!error) return
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      console.log(error)
      toast.error(error?.response?.data?.message)
      signOut(auth)
      localStorage.setItem('accessToken', '')
    }
  }, [error])

  return (
    <section className='my-10 w-full'>
      <div className='w-full flex flex-row justify-between items-center'>
        <h2 className='text-2xl text-neutral'>My Appointments</h2>
        <div className='relative'>
          <Button outlined onClick={() => setOpen(!open)}>
            {formattedDate}
          </Button>
          {open && (
            <DayPicker
              className='absolute z-50 top-16 p-4 bg-base-100 right-0 shadow-2xl rounded-lg'
              mode='single'
              selected={date}
              onSelect={setDate}
              onDayClick={() => setOpen(false)}
            />
          )}
        </div>
      </div>
      {isLoading ? (
        <Spinner colored center />
      ) : (
        <div className='my-10'>
          <MyAppintmentsTable myAppointments={data} />
        </div>
      )}
    </section>
  )
}

export default MyAppointments
