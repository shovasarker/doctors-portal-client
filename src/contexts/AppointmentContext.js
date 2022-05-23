import { createContext, useState } from 'react'

const AppointmentContext = createContext()

export const AppointmentProvider = ({ children }) => {
  const [_id, set_Id] = useState('')
  const [name, setName] = useState('')
  const [slot, setSlot] = useState({})
  const [price, setPrice] = useState(0)
  const [selected, setSelected] = useState(new Date())
  return (
    <AppointmentContext.Provider
      value={{
        name,
        setName,
        slot,
        price,
        setSlot,
        selected,
        setSelected,
        setPrice,
        _id,
        set_Id,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export default AppointmentContext
