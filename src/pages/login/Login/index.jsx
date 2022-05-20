import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../../firebase/firebase.init'
import useToken from '../../../hooks/useToken'
import SocialLogin from '../../shared/sociallogin/SocialLogin'
import EmailLogin from '../EmailLogin'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [user] = useAuthState(auth)

  const [token] = useToken(user)

  useEffect(() => {
    if (!token) return
    navigate(from, { replace: true })
  }, [token, navigate, from])

  return (
    <main>
      <div className='card max-w-full md:max-w-sm bg-base-100 shadow-xl mx-auto my-20'>
        <div className='card-body'>
          <h2 className='text-xl text-neutral text-center'>Login</h2>
          <EmailLogin />
          <p className='text-center text-sm'>
            New to Doctor's Portal?
            <button
              className='btn btn-link !text-secondary underline-offset-1 ml-2 !p-0 !capitalize'
              onClick={() =>
                navigate('/register', {
                  replace: true,
                  state: { from: { pathname: from } },
                })
              }
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
