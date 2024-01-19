import React, { useReducer, useEffect } from 'react'
import HeroSection from '../Scetion/HeroSection'
import About from '../Scetion/About'
import Menu from '../Scetion/Menu'
import Reservation from '../Scetion/Reservation'
import OrderOnline from '../Scetion/OrderOnline'
import Login from '../Scetion/Login'
import ConfirmedBooking from '../Assets/ConfirmedBooking'
import { Route, Routes, useNavigate } from 'react-router-dom'


function Main() {

  const initalState = {
    date: '',
    time: '',
    people: 0,
    occasion: '',
  };

  const reducer = (state, action) => {
    switch( action.type ) {
      case 'SET_DATE':
        return { ...state, date: action.payload };
      case 'SET_TIME':
        return { ...state, time: action.payload };
      case 'SET_PEOPLE':
        return { ...state, people: action.payload };
      case 'SET_OCCASION':
        return { ...state, occasion: action.payload };
      default:
        return state;
    }
  }

  const [ state, dispatch ] = useReducer( reducer, initalState )

  



  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<HeroSection
           state={ state }
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
            state={ state }
            dispatch={ dispatch }
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
        <Route
          path='/ConfirmedBooking'
          element={<ConfirmedBooking />}
        ></Route>
      </Routes>
    </main>
  )
}

export default Main