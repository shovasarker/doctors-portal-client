import { Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Appointment from './pages/appointment/Appintment'
import AvailableAppointments from './pages/appointment/components/AvailableAppointments'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Header from './pages/shared/header/Header'

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
            element={<AvailableAppointments />}
          />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
