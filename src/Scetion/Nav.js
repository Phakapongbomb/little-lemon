import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <Navbar>
        <Link to="/"><img src='./icons_assets/logo.svg' className='h-auto' /></Link>
        <Ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Menu'>Menu</Link></li>
            <li><Link to='/Reservation'>Reservation</Link></li>
            <li><Link to='/OrderOnline'>Order online</Link></li>
            <li><Link to='/Login'>Login</Link></li>
        </Ul>
    </Navbar>
  )
}

export default Nav;

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