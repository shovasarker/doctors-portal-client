import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import About from './pages/About'
import Appointment from './pages/appointment/Appintment'
import AvailableAppointments from './pages/appointment/components/AvailableAppointments'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Header from './pages/shared/header/Header'

import 'react-toastify/dist/ReactToastify.css'
import Register from './pages/register/Register'
import RequireAuth from './pages/shared/requireauth/RequireAuth'
import Dashboard from './pages/dashboard/Dashboard'
import MyAppointments from './pages/dashboard/components/MyAppointments'
import MyReviews from './pages/dashboard/components/MyReviews'
import Users from './pages/dashboard/components/Users'
import RequireAdmin from './pages/standalone/RequireAdmin'
import AddDoctor from './pages/dashboard/components/AddDoctor'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/appointment'
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        >
          <Route
            path='/appointment/:serviceName'
            element={<AvailableAppointments />}
          />
        </Route>
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path='reviews' element={<MyReviews />} />
          <Route
            path='users'
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path='add-doctor'
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
