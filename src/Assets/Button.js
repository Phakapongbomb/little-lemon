import React from 'react'
import { Link } from 'react-router-dom'

function Button({text, link}) {
  return (
    <button aria-label="On Click" className='shadow-lg px-8 py-2 rounded-lg border-Primary2 flex justify-center roumded-lg bg-Primary2 text-Secondary4 items-center text-base font-extrabold font-["Karla"] disabled:opacity-75'><Link to={link}>{text}</Link></button>
  )
}

export default Button