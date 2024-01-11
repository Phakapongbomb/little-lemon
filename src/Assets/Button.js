import React from 'react'
import styled from 'styled-components'

function Button({text}) {
  return (
    <ButtonC>{text}</ButtonC>
  )
}

export default Button

const ButtonC = styled.button`

  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 0px solid transparent;
  background: #f4ce14;
  color: #333;

  font-family: Karla;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  & :hover {

    background: #f4ce14;

  }

`