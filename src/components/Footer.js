import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" h-[50vh] w-full bg-Secondary3 justify-center items-center inline-flex">
      <div className="grow shrink basis-0 justify-center items-start gap-48 flex">
        <img className="h-48" src="./icons_assets/secondary.png"/>
        <div className="w-28 h-full pt-px flex-col justify-end items-start gap-8 inline-flex text-Secondary4">
          <div className="text-zinc-100 text-xl font-extrabold font-['Karla'] uppercase text-Primary2">Navigation</div>
          <div className="flex-col justify-start items-start gap-4 inline-flex">
            <Link to="/" className="text-center text-white text-lg font-medium font-['Karla']">Home</Link>
            <Link to="About" className="text-center text-white text-lg font-medium font-['Karla']">About</Link>
            <Link to="Menu" className="text-center text-white text-lg font-medium font-['Karla']">Menu</Link>
            <Link to="Reservation" className="text-center text-white text-lg font-medium font-['Karla']">Reservation</Link>
            <Link to="OrderOnline" className="text-center text-white text-lg font-medium font-['Karla']">Order online</Link>
            <Link to="Login" className="text-center text-white text-lg font-medium font-['Karla']">Login</Link>
          </div>
        </div>
        <div className="h-full flex-col gap-8 flex text-Secondary4 items-start justify-start">
          <div className="text-zinc-100 text-xl font-extrabold font-['Karla'] uppercase text-Primary2">Contect</div>
            <div className="self-stretch h-24 flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-center text-white text-lg font-medium font-['Karla']">Chicago</div>
              <div className="text-center text-white text-lg font-medium font-['Karla']">Tel. 1237892468</div>
              <div className="text-center text-white text-lg font-medium font-['Karla']">LittleLemon@Email.com</div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

