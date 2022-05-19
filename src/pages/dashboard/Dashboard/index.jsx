import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { RiMenuUnfoldFill } from 'react-icons/ri'

const Dashboard = () => {
  return (
    <main className='container lg:px-6'>
      <div className='drawer drawer-mobile'>
        <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col items-center justify-start bg-secondary/5 px-4 md:px-6 pt-4 lg:pt-0'>
          <label
            htmlFor='my-drawer-2'
            className='btn btn-outline btn-square drawer-button lg:hidden ml-auto'
          >
            <RiMenuUnfoldFill className='w-7 h-7' />
          </label>
          <Outlet />
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to='/dashboard'>My Appointments</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
