import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Spinner from '../../../standalone/Spinner'
import User from '../User'

const Users = () => {
  const getUsers = async () => {
    const { data } = await axios.get('https://dpss-server.herokuapp.com/user', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })

    return data
  }

  const { data: users, isLoading, refetch } = useQuery('users', getUsers)

  if (isLoading) return <Spinner center colored />

  return (
    <div>
      <h2 className='text-2xl text-neutral mt-10'>All Users</h2>
      <div className='overflow-x-auto'>
        <table className='table w-full my-10'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(({ ...props }, i) => (
              <User {...props} position={i + 1} key={i} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
