import React from 'react'
import CardReview from '../Assets/CardReview'

function Testimonials() {
  return (
    <div className='flex flex-col w-full h-full justify-center items-center bg-Primary1 gap-16'>
      <h1 className="text-Primary2 text-6xl font-medium font-['Markazi Text'] mt-8">Testimonials</h1>
        <div className='flex gap-8 mb-8'>
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
          <CardReview />
        </div>
    </div>
  )
}

export default Testimonials