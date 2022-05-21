import { createContext, useState } from 'react'

const DeleteContext = createContext()

export const DeleteProvider = ({ children }) => {
  const [deleted, setDeleted] = useState({})
  return (
    <DeleteContext.Provider value={{ deleted, setDeleted }}>
      {children}
    </DeleteContext.Provider>
  )
}

export default DeleteContext
