import React from 'react'
import styled from 'styled-components'

function Nav() {
  return (
    <Navbar>
        <Img src='./icons_assets/logo.svg'></Img>
        <Ul>
            <li><A href='/'>Home</A></li>
            <li><A href='/'>About</A></li>
            <li><A href='/'>Menu</A></li>
            <li><A href='/'>Reservation</A></li>
            <li><A href='/'>Order online</A></li>
            <li><A href='/'>Login</A></li>
        </Ul>
    </Navbar>
  )
}

export default Nav;

const Img = styled.img`

    height: auto;
    weiht: 100%;

`

const Navbar = styled.nav`

    display: flex;
    list-style-type: none;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;

`

const Ul = styled.ul`

    list-style-type: none;
    display: flex;
    gap: 45px;
    align-items: center;
    justify-content: center;
    padding: 0px;

`

const A = styled.a`

    text-decoration: none;
    color: #000;
    text-align: center;

    /* Lead Text */
    font-family: Karla;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

`