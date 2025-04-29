import React from 'react';
import Button from './Button';

const Offers = () => {
  return (
    <div className='bg-gray-200 items-center justify-center flex flex-col p-20'>
          <div className=' w-200 grid grid-cols-2'>
              <div className='bg-[url(./assets/images.jpeg)] rounded-full h-70 w-70'>
                  <img src='/src/assets/5bb2b9217795001.Y3JvcCwyNDI0LDE4OTYsMCww.png' className='w-30 h-50 -rotate-35 rounded-3xl -m-7' />
                  <img src='/src/assets/5bb2b9217795001.Y3JvcCwyNDI0LDE4OTYsMCww.png' className='w-30 h-50  rounded-3xl m-30 -mt-20 rotate-25'/>
              </div>
              <div className='flex flex-col'>
                  <h4 className='font-bold text-blue-700 tracking-widest'> OFFERS</h4>
                  <h2 className='font-extrabold text-3xl p-3 pl-0'>Find top credit card offers from our partners. </h2>
                  <p className=' text-black/80 mb-8'>Easily compare credit card offers and apply dirrectly with the issuer</p>
                  <Button  name="See Offers"  />
              </div>
      </div>
    </div>
  )
}

export default Offers
