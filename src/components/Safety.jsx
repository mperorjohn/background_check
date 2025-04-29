import React from 'react';
import Button from './Button';

const Safety = () => {
  return (
    <div  className='bg-gray-200 items-center justify-center flex flex-col p-20 text-black gap-8'>
          <div className='w-200 grid grid-cols-2'>
              <div>
                  <h4 className='font-bold text-blue-700 tracking-widest'> SAFETY</h4>
                  <h2 className='font-extrabold text-3xl p-3 pl-0'>Your card score always <br /> Safe and Secure </h2>
                  
                      
                      <div className='border-l-2 border-purple-700 pl-7 mt-5 mb-10'>
                          <h2 className='font-bold text-lg'>Cryptocoin</h2>
                          <p className=' text-black/80 mb-8'>We use 256-bit encryption to secure your information</p>
                          <h2 className='font-bold text-lg'>Cryptocoin</h2>
                          <p className=' text-black/80'>We use 256-bit encryption to secure your information</p>
                          
                    
                  </div>
                  
                  <Button  name="See Offers"  />
          </div>
          <div className='bg-[url(./assets/images.jpeg)] rounded-full h-70 w-70'>
              {/* <img src="/src/assets/006d23213797631.Y3JvcCwyNDI0LDE4OTYsMCww.png" alt="Insurance" className='w-50 h-70 -mt-4 ' />
              <img src='/src/assets/vite.svg' alt='' className='-mt-10 ml-10 shadow-3xl shadow-amber-700'/> */}
          </div>
      </div>
    </div>
  )
}

export default Safety
