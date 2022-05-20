import axios from 'axios'
import { useEffect, useState } from 'react'

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    const getAdmin = async () => {
      if (!user) return
      const { data } = await axios.get(
        `http://localhost:5000/admin.${user?.email}`
      )

      setAdmin(data?.admin)
    }

    getAdmin()
  }, [user])

  return [admin]
}

export default useAdmin
