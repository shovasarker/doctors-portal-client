import React from 'react'

const MyAppintmentsTable = ({ myAppointments }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-compact md:table-normal w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Service</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {myAppointments?.map(({ patient, treatment, slot }, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{patient?.name}</td>
                <td>{treatment}</td>
                <td>{slot}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MyAppintmentsTable
