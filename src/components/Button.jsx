import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-pink-500 rounded-md px-7 py-2 text-white drop-shadow-lg drop-shadow-pink-600  '>{name}</button>
    </div>
  )
}

export default Button
