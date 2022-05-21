import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import useAdmin from '../../../hooks/useAdmin'
import CustomLink from '../../standalone/CustomLink'

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <main className='container lg:px-6'>
      <div className='drawer drawer-mobile'>
        <input
          id='dashboard-sidebar'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content bg-secondary/5 px-4 md:px-6 pt-4 lg:pt-0'>
          <Outlet />
        </div>
        <div className='drawer-side'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='menu py-4 overflow-y-auto w-64 lg:w-56 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <CustomLink className={'!rounded-none'} to='/dashboard'>
                My Appointments
              </CustomLink>
            </li>
            <li>
              <CustomLink className={'!rounded-none'} to='/dashboard/reviews'>
                My Reviews
              </CustomLink>
            </li>
            {admin && (
              <>
                <li>
                  <CustomLink className={'!rounded-none'} to='/dashboard/users'>
                    All Users
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className={'!rounded-none'}
                    to='/dashboard/add-doctor'
                  >
                    Add a Doctor
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className={'!rounded-none'}
                    to='/dashboard/manage-doctors'
                  >
                    Manage Doctors
                  </CustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
