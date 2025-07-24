import React from 'react';
import Button from './Button';

const Safety = () => {
  return (
    <div className='bg-gray-200 text-black flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-20 gap-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl w-full'>

        {/* Text Content */}
        <div>
          <h4 className='font-bold text-blue-700 tracking-widest'>SAFETY</h4>
          <h2 className='font-extrabold text-3xl sm:text-4xl p-3 pl-0 leading-tight'>
            Your card score always <br className='hidden sm:block' /> Safe and Secure
          </h2>

          <div className='border-l-4 border-purple-700 pl-5 mt-5 mb-10 space-y-6'>
            <div>
              <h2 className='font-bold text-lg'>Cryptocoin</h2>
              <p className='text-black/80'>We use 256-bit encryption to secure your information.</p>
            </div>
            <div>
              <h2 className='font-bold text-lg'>Bank-Level Security</h2>
              <p className='text-black/80'>Your data is protected just like at a financial institution.</p>
            </div>
          </div>

          <Button name="See Offers" />
        </div>

        {/* Image */}
        <div className='rounded-full w-full h-72 sm:h-80 md:h-96 bg-cover bg-center' style={{ backgroundImage: `url('https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399955/images_k0p3bh.jpg')` }}>
          {/* Image shown as background for better responsiveness */}
        </div>
      </div>
    </div>
  );
};

export default Safety;
