import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../../standalone/CustomLink'

const Dashboard = () => {
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
              <CustomLink to='/dashboard'>My Appointments</CustomLink>
            </li>
            <li>
              <CustomLink to='/dashboard/reviews'>My Reviews</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
