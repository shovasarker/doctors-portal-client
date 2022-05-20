import axios from 'axios'
import { useEffect, useState } from 'react'

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAdmin = async () => {
      if (!user) return
      setLoading(true)
      const { data } = await axios.get(
        `http://localhost:5000/admin/${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )

      setAdmin(data?.admin)
      setLoading(false)
    }

    getAdmin()
  }, [user])

  return [admin, loading]
}

export default useAdmin
