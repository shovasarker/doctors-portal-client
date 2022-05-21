import React from 'react'

const DoctorRow = ({ _id, name, img, email, speciality, position }) => {
  return (
    <tr key={_id}>
      <td>{position}</td>
      <td>
        <div class='flex items-center space-x-3'>
          <div class='avatar-group'>
            <div class='mask mask-squircle w-12 h-12'>
              <img src={img} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{speciality}</td>
      <th>
        <button class='btn btn-outline btn-error btn-sm'>Delete</button>
      </th>
    </tr>
  )
}

export default DoctorRow
