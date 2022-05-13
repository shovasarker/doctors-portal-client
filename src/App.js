import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/home/Home'
import Footer from './pages/shared/footer/Footer'
import Header from './pages/shared/header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
