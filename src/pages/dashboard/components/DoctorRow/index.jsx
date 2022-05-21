import React, { useContext } from 'react'
import DeleteContext from '../../../../contexts/DeleteContext'

const DoctorRow = ({ name, img, email, speciality, position }) => {
  const { setDeleted } = useContext(DeleteContext)
  const handleDeleteDoctor = async () => {
    setDeleted({ name, email })
  }
  return (
    <tr>
      <td>{position}</td>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar-group'>
            <div className='mask mask-squircle w-12 h-12'>
              <img src={img} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <th>
        <label
          htmlFor='confirmation-modal'
          className='btn btn-outline btn-error btn-sm'
          onClick={handleDeleteDoctor}
        >
          Delete
        </label>
      </th>
    </tr>
  )
}

export default DoctorRow
