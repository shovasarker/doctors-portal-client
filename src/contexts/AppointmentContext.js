import { createContext, useState } from 'react'

const AppointmentContext = createContext()

export const AppointmentProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [slot, setSlot] = useState('')
  const [selected, setSelected] = useState(new Date())
  return (
    <AppointmentContext.Provider
      value={{ name, setName, slot, setSlot, selected, setSelected }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentContext
