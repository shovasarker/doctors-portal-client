import React from 'react'
import { useNavigate } from 'react-router-dom'
import SocialLogin from '../../shared/sociallogin/SocialLogin'
import EmailLogin from '../EmailLogin'

const Login = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className='card max-w-full md:max-w-md bg-base-100 shadow-xl mx-auto my-20'>
        <div className='card-body'>
          <h2 className='text-xl text-neutral text-center'>Login</h2>
          <EmailLogin />
          <p className='text-center text-sm'>
            New to Doctor's Portal?
            <button
              className='btn btn-link !text-secondary underline-offset-1 ml-2 !p-0 !capitalize'
              onClick={() => navigate('/register', { replace: true })}
            >
              Create New Accouunt
            </button>
          </p>
          <SocialLogin />
        </div>
      </div>
    </main>
  )
}

export default Login
