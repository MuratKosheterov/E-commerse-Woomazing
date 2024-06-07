import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Review from './pages/Review'
import Cart from './pages/Cart'
import Contacts from './components/Contacts'
import Brand from './pages/Brand'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

function App() {
  return (
    <div className=' overflow-hidden font-Raleway '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path=':id' element={<Review />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/succecc' element={<Success />} />
        <Route path='/contact' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App