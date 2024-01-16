import React from 'react'
import HeroSection from '../Scetion/HeroSection'
import About from '../Scetion/About'
import Menu from '../Scetion/Menu'
import Reservation from '../Scetion/Reservation'
import OrderOnline from '../Scetion/OrderOnline'
import Login from '../Scetion/Login'
import { Route, Routes } from 'react-router-dom'

function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HeroSection />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Reservation' element={<Reservation />}></Route>
        <Route path='/OrderOnline' element={<OrderOnline />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </main>
  )
}

export default Main