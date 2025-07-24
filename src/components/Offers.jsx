import React from 'react';
import Button from '../components/Button';

const Offers = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center justify-center px-4 py-16 sm:px-8 md:px-16'>
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

        {/* Image Area */}
        <div className='relative flex justify-center items-center'>
          <div className='bg-[url(https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399955/images_k0p3bh.jpg)] bg-cover bg-center rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center'>
            <img
              src='https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399917/5bb2b9217795001.Y3JvcCwyNDI0LDE4OTYsMCww_ndcys7.png'
              alt="Card One"
              className='w-24 h-36 sm:w-28 sm:h-40 rounded-2xl transform -rotate-12 -translate-x-8'
            />
            <img
              src='https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399917/5bb2b9217795001.Y3JvcCwyNDI0LDE4OTYsMCww_ndcys7.png'
              alt="Card Two"
              className='w-24 h-36 sm:w-28 sm:h-40 rounded-2xl transform rotate-12 translate-x-8 -mt-8'
            />
          </div>
        </div>

        {/* Text Area */}
        <div className='flex flex-col text-center md:text-left'>
          <h4 className='font-bold text-blue-700 tracking-widest mb-2'>OFFERS</h4>
          <h2 className='font-extrabold text-3xl sm:text-4xl leading-snug mb-4'>
            Find top credit card offers from our partners.
          </h2>
          <p className='text-black/80 mb-6 text-base sm:text-lg'>
            Easily compare credit card offers and apply directly with the issuer.
          </p>
          <div className='flex justify-center md:justify-start'>
            <Button name="See Offers" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Offers;
