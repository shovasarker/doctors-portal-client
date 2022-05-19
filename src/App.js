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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={<Appointment />}>
          <Route
            path='/appointment/:serviceName'
            element={
              <RequireAuth>
                <AvailableAppointments />
              </RequireAuth>
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
