import React from 'react'
import styled from 'styled-components'

function Card({img, NameMenu, price, Ptext}) {
  return (
    <Div className="w-64 h-full pb-4 bg-black bg-opacity-5 rounded-lg flex-col justify-start items-center gap-4 inline-flex shadow-lg">
        <Img src={img} className=" w-full max-w-64 h-full max-h-40 "/>
        <TextContent className="flex-col justify-center items-center gap-4 flex">
          <ProductName className="justify-between items-start gap-14 inline-flex">
              <h1 className="text-black text-lg font-bold font-['Karla']">{NameMenu}</h1>
              <p className="text-right text-orange-300 text-base font-medium font-['Karla']">{price}</p>
          </ProductName>
          <p className="w-56 text-black text-opacity-60 text-base font-normal font-['Karla']">{Ptext}</p>
          <h3 className="w-56 h-7 text-black text-base font-normal font-['Karla']">Order & Delivery</h3>
        </TextContent>
    </Div>
  )
}

export default Card

const Div = styled.div`


`

const TextContent = styled.div`

`

const ProductName = styled.div`

`

const Img = styled.img`

`