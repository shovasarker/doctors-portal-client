import { format } from 'date-fns'
import React, { useContext } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { toast } from 'react-toastify'
import AppointmentContext from '../../../../contexts/AppointmentContext'

import Banner from '../../../shared/Banner'

const BannerAppointment = () => {
  const { selected, setSelected } = useContext(AppointmentContext)

  const compareDate = (firstDate, secondDate) => {
    if (format(firstDate, 't') < format(secondDate, 't')) return true
    else return false
  }

  const handleDayClick = (day) => {
    if (format(day, 'PP') === format(new Date(), 'PP'))
      return setSelected(new Date())
    if (compareDate(day, new Date())) {
      toast.warning('Please! Select a Day After Todays Date.')
      setSelected(new Date())
    }
  }
  return (
    <Banner largeGap>
      <DayPicker
        mode='single'
        selected={selected}
        onSelect={setSelected}
        onDayClick={handleDayClick}
        className='bg-base-100 shadow-lg p-4 rounded-xl'
      />
    </Banner>
  )
}

export default BannerAppointment
