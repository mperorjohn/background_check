import React from 'react'

const Card = ({image, alt, heading, details}) => {
  return (
    <div className='text-black flex flex-col items-center justify-center w-60 h-60 p-2 text-center rounded-lg border-2 border-gray-200'>
          <img src={image} alt={alt} className='shadow-2xl bg-blue-100 p-2 rounded-lg ' />
          <h3 className='font-bold m-2'>{heading} </h3>
          <p className='text-black/70'>{details}</p>
    </div>
  )
}

export default Card
