import React from 'react'
import SocialLogin from '../../shared/sociallogin/SocialLogin'
import EmailLogin from '../EmailLogin'

const Login = () => {
  return (
    <main>
      <div className='card max-w-full md:max-w-md bg-base-100 shadow-xl mx-auto my-20'>
        <div className='card-body'>
          <h2 className='text-xl text-neutral text-center'>Login</h2>
          <EmailLogin />
          <SocialLogin />
        </div>
      </div>
    </main>
  )
}

export default Login
