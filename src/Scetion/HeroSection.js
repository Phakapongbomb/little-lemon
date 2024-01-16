import React from 'react'
import Button from '../Assets/Button'
import styled from 'styled-components'
import Card from '../Assets/Card'
import Testimonials from './Testimonials'

function HeroSection() {
  return (
    <div>
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
      <div className='flex w-full h-auto justify-center items-center'>
        <Content className="w-screen h-full flex flex-col justify-center items-center gap-16 mt-32">
            <HeadText className="w-full  flex justify-center gap-56 items-stretch flex">
                <h1 className="text-black text-6xl font-medium font-['Markazi Text']">This weeks specials!</h1>
                <Button
                    text='Online Menu'
                />
            </HeadText>
            <div className='gap-20 justify-between items-start flex'>
                <Card
                img="./icons_assets/greek salad.jpg"
                NameMenu="Greek salad"
                price="$12.99"
                Ptext="The famous greek salad of crispy lettuce, pepers, olives and our Chicago style feta cheese. garlic and rosemary croutons"
                />
                <Card
                img="./icons_assets/bruchetta.svg"
                NameMenu="Bruchetta"
                price="$5.99"
                Ptext="Our Bruschetta is made form grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                <Card
                img="./icons_assets/lemon dessert.jpg"
                NameMenu="Greek salad"
                price="$12.99"
                Ptext="The famous greek salad of crispy lettuce, pepers, olives and our Chicago style feta cheese. garlic and rosemary croutons"
                />
            </div>
        </Content>
      </div>
      <Testimonials />
    </div>
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

const HeadText = styled.div`

`

const Content = styled.div`

`