import React from 'react'
import Button from '../Assets/Button'
import styled from 'styled-components'

function HeroSection() {
  return (
    <Div>
      <div>
        <TextHead>Little Lemon</TextHead>
        <SubHead>Chicago</SubHead>
        <Paragraph>
          We are a family owned Mediterranean restaurant,
          focused on traditional
          recipes served with a modern
          twist.
        </Paragraph>
        <Button
        text="Reserv a Table"
        />
      </div>
      <Img src='./icons_assets/restauranfood.jpg'></Img>
    </Div>
  )
}

export default HeroSection

const Img = styled.img`

  border-radius: 16px;
  width: 360px;
  height: 400px;
  background: cover no-repeat;

`

const Div = styled.div`

  display: flex;
  height: 362px;
  padding: 5vh 10vh 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 220px;
  flex-shrink: 0;
  background: #495e57;

`

const TextHead = styled.h1`

  color: #F4CE14;
  /* Display Title */
  font-family: Markazi Text;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px;

`

const SubHead = styled.h3`

  color: #FFF;
  /* Sub Title */
  font-family: Markazi Text;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px 0px;


`

const Paragraph = styled.p`

  width: 280px;
  color: #FFF;
  /* Paragraph Text */
  font-family: Karla;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

`