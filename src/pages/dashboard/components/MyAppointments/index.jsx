import axios from 'axios'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
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
      `https://dpss-server.herokuapp.com/booking?date=${formattedDate}&email=${email}`
    )
    return data
  }

  const { data, isLoading } = useQuery(
    ['my-appointments', formattedDate],
    getMyAppointments
  )

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
