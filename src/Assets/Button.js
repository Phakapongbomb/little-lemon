import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Button({text, link}) {
  return (
    <ButtonC className='px-8 py-2 border-2 rounded-lg border-Primary2 rounded-4 flex justify-center roumded-lg bg-Primary2 text-Secondary4 items-center text-base font-extrabold font-["Karla"]'><Link to={link}>{text}</Link></ButtonC>
  )
}

export default Button

const ButtonC = styled.button`



  & :hover {

    background: #f4ce14;

  }

`