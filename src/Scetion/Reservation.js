import React,{ useState } from 'react'
import Button from '../Assets/Button'


function Reservation({ state, dispatch }) {

  const { date, time, people, occasion } = state;
  const [ isFormValid, setIsFormValid ] = useState(false);

  const handleSubmit = (e) => {
    console.log("Reserv a table",{ date, time, people, occasion });
    e.preventDefault();
  }

  const validateForm = () => {
    const isDateValid = date !== '';
    const isTimeValid = time !== '';
    const isPeopleValid = people >= 1 && people <= 10;
    const isOccasionValid = occasion !== '';

    setIsFormValid( isDateValid && isTimeValid && isPeopleValid && isOccasionValid);
  }

  return (
    <div className='bg-Primary1 '>
      <div className='flex justify-center items-center w-full'>
        <form className='flex flex-col w-2/6 gap-5 bg-Secondary3 p-10 rounded-lg m-16 shadow-lg' onSubmit={handleSubmit}>
          <label
            htmlFor="res-date"
            className='text-black text-base font-medium font-["Karla"]'
            >
              Choose date
            </label>
          <input
            type="date"
            id="res-date"
            className="border border-gray-300 px-3 py-2 rounded-lg"
            onChange={ (e) => {
              dispatch({ type: 'SET_DATE', payload: e.target.value })
              validateForm();
            }}
            value={ date }
            required
          />
          <label
            htmlFor="res-time"
            className='text-black text-base font-medium font-["Karla"]'
          >
            Choose time
          </label>
          <select
            id="res-time"
            className="border border-gray-300 px-3 py-2 rounded-lg"
            onChange={ (e) => {
              dispatch({ type: 'SET_TIME', payload: e.target.value })
              validateForm();
            }}
            value={ time }
            required
          >
              <option value='' disabled>Choose Time</option>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
          </select>
          <label
           htmlFor="guests"
           className='text-black text-base font-medium font-["Karla"]'
          >
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            className='border border-gray-300 px-3 py-2 rounded-lg'
            onChange={ (e) => {
              dispatch({ type: 'SET_PEOPLE', payload: e.target.value })
              validateForm();
            }}
            value={ people }
          />
          <label
           htmlFor="occasion"
           className='text-black text-base font-medium font-["Karla"]'
          >
            Occasion
          </label>
          <select
            id="occasion"
            className='border border-gray-300 px-3 py-2 rounded-lg'
            onChange={ (e) => {
              dispatch({ type: 'SET_OCCASION', payload: e.target.value })
              validateForm();
            }}
            value={ occasion }
            required
          >
            <option value='' disabled>Choose Occasion</option>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <Button
            className="disabled:opacity-75"
            type="submit"
            text="Make Your Reservation"
            disabled={!isFormValid}
          />
        </form>
      </div>
    </div>
  );
};

export default Reservation