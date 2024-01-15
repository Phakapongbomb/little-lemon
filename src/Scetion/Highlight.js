import React from 'react'
import Button from '../Assets/Button'
import styled from 'styled-components'
import Card from '../Assets/Card'

function Highlight() {
  return (
    <Div>
        <Content className="w-screen h-full flex flex-col justify-center items-center gap-16 mt-32">
            <HeadText className="w-full h-20 flex justify-center gap-56 items-stretch flex">
                <h1 className="text-black text-6xl font-medium font-['Markazi Text']">This weeks specials!</h1>
                <Button className="w-48 self-stretch px-12 py-3 bg-yellow-400 rounded-lg justify-center items-center inline-flex text-zinc-800 text-base font-extrabold font-['Karla'] capitalize"
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
    </Div>
  )
}


export default Highlight

const HeadText = styled.div`

`

const Content = styled.div`

`


const Div = styled.div`

    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;

`