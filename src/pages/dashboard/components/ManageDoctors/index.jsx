import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import Spinner from '../../../standalone/Spinner'
import DoctorRow from '../DoctorRow'

const ManageDoctors = () => {
  const getDoctors = async () => {
    const { data } = await axios.get('http://localhost:5000/doctor', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    return data
  }

  const { data: doctors, isLoading, refetch } = useQuery('doctors', getDoctors)
  if (isLoading) return <Spinner center colored />
  return (
    <div className='my-10'>
      <h2 className='text-2xl text-neutral'>Manage Doctors</h2>
      {doctors?.length > 0 ? (
        <div className='overflow-x-auto w-full my-10'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Index</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Speciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors?.map(({ _id, ...otherProps }, i) => (
                <DoctorRow
                  key={_id}
                  position={i + 1}
                  _id={_id}
                  {...otherProps}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='my-10 text-center text-lg text-neutral/80'>
          No Doctors Data Found
        </p>
      )}
    </div>
  )
}

export default ManageDoctors
