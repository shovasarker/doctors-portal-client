import { createContext, useState } from 'react'

const DateContext = createContext()

export const DateProvider = ({ children }) => {
  const [selected, setSelected] = useState(new Date())
  return (
    <DateContext.Provider value={{ selected, setSelected }}>
      {children}
    </DateContext.Provider>
  )
}

export default DateContext
