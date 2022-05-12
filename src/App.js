import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home/Home'
import Header from './pages/shared/header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
