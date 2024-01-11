import React from 'react'

function Card({img, NameMenu, price, Ptext}) {
  return (
    <>
        <img src={img}/>
        <div>
            <h1>{NameMenu}</h1>
            <p>{price}</p>
        </div>
        <p>{Ptext}</p>
        <h1>Order & Delivery</h1>
    </>
  )
}

export default Card