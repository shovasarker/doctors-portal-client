import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../../../firebase/firebase.init'
import Spinner from '../../../standalone/Spinner'

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) return <Spinner colored center />

  if (!user) return <Navigate replace to='/login' state={{ from: location }} />

  return children
}

export default RequireAuth
