import React, { useContext } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import DateContext from '../../../../contexts/DateContext'

import Banner from '../../../shared/Banner'

const BannerAppointment = () => {
  const { selected, setSelected } = useContext(DateContext)
  return (
    <Banner largeGap>
      <DayPicker mode='single' selected={selected} onSelect={setSelected} />
    </Banner>
  )
}

export default BannerAppointment
