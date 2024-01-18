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
    people: 1,
    occasion: 'None',
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

  const submitAPI = async (formData) => {
    try {

      const response = await fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      return true;
    } catch (error) {
      console.error('Error submitting data:', error);
      return false;
    }
  };


  const fetchAPI = async (date) => {
    try {
      const response = await fetch(`https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js`)

      if(!response.ok) {
        throw new Error('failed to fetch data');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error fetching API data:', error);
      throw error;
    }
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    updateTimes(state.date);
  },[state.date])

  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const isSubmissionSuccessful = await submitAPI(formData);

    if (isSubmissionSuccessful) {
      navigate('/ConfirmedBooking')
    } else {
      console.log("Booking submission failed");
    }
  }

  const initializeTimes = async () => {
    try{
      const today = new Date();
      const availableTime = await fetchAPI(today);
      console.log('Available times: ', availableTime);
    } catch ( error ) {
      console.error ('Error fetching available times: ', error);
    }
  }

  initializeTimes()

  const updateTimes = async(selectedDate) => {
    try {
      const availableTime = await fetchAPI(selectedDate);
      console.log('Available times for selected date:',availableTime);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  }

  updateTimes(dispatch)



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
            submitForm={submitForm}
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