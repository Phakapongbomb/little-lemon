import React from 'react'
import HeroSection from '../Scetion/HeroSection'
import About from '../Scetion/About'
import Menu from '../Scetion/Menu'
import Reservation from '../Scetion/Reservation'
import OrderOnline from '../Scetion/OrderOnline'
import Login from '../Scetion/Login'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

function Main() {
  const [ date,setDate ] = useState("")
  const [ availableTimes,setAvailableTimes ] = useState("")
  const [ people,setPeople ] = useState("")
  const [ occasion,setOccasion ] = useState("")

  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<HeroSection
            date={ date }
            availableTimes={ availableTimes }
            people={ people }
            occasion={ occasion }
          />}
        ></Route>
        <Route
          path='/About'
          element={<About />}
        ></Route>
        <Route
          path='/Menu'
          element={<Menu />}
        ></Route>
        <Route
          path='/Reservation'
          element={<Reservation
            date={ date }
            setDate={ setDate }
            availableTimes={ availableTimes }
            setAvailableTimes={ setAvailableTimes }
            people={ people }
            setPeople={ setPeople }
            occasion={ occasion }
            setOccasion={ setOccasion }
            />}
        ></Route>
        <Route
          path='/OrderOnline'
          element={<OrderOnline />}
        ></Route>
        <Route
          path='/Login'
          element={<Login />}
        ></Route>
      </Routes>
    </main>
  )
}

export default Main