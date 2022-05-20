import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import Button from '../../../standalone/Button'

const User = ({ _id, displayName, email, position, role, refetch }) => {
  const makeAdmin = async () => {
    try {
      const res = await axios.put(
        `https://dpss-server.herokuapp.com/user/admin/${email}`,
        null,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )

      if (res?.status !== 200) return

      if (res?.data?.modifiedCount > 0) {
        toast?.success(`${displayName} is Now an Admin`)
        refetch()
      }
    } catch (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast?.error('You are not Authorized to Make Other Users Admin!')
        return
      }
    }
  }

  return (
    <tr>
      <td>{position}</td>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>
        {role === 'admin' ? (
          <p>Admin</p>
        ) : (
          <Button className={'btn-xs'} onClick={makeAdmin}>
            Make Admin
          </Button>
        )}
      </td>
      <td>
        <button className='btn btn-square btn-error btn-xs'>X</button>
      </td>
    </tr>
  )
}

export default User
