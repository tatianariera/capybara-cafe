import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Capybaras from './pages/Capybaras'
import Navbar from './components/Navbar'
import Prices from './pages/Prices'
import Reservations from './pages/Reservations'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capybaras" element={<Capybaras />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
