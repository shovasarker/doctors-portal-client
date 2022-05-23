import React from 'react'
import { Link } from 'react-router-dom'

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
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {myAppointments?.map(
            ({ _id, patient, treatment, slot, price, paid, transactionId }, i) => {
              return (
                <tr key={_id}>
                  <td>{i + 1}</td>
                  <td>{patient?.name}</td>
                  <td>{treatment}</td>
                  <td>{slot}</td>
                  <td>
                    {price ? (
                      !paid ? (
                        <Link
                          to={`/dashboard/payment/${_id}`}
                          className='btn btn-xs md:btn-sm btn-outline capitalize btn-secondary hover:!text-base-100'
                        >
                          Pay
                        </Link>
                      ) : (
                        <div>
                          <span className='text-success'>Paid</span>
                          <p>
                            Transaction Id:{' '}
                              <span className='text-success'>{transactionId}</span>
                          </p>
                        </div>
                      )
                    ) : (
                      <></>
                    )}
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MyAppintmentsTable
