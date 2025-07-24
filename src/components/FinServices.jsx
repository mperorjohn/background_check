import React from 'react';

const FinServices = () => {
  return (
    <section className='flex flex-col items-center justify-center my-20 px-4 sm:px-6 lg:px-20'>
      {/* Header */}
      <div className='flex flex-col items-center pb-10 text-center max-w-3xl'>
        <h4 className='font-bold text-blue-700 tracking-widest'>SERVICES</h4>
        <h2 className='font-extrabold text-2xl sm:text-3xl p-3'>
          Find the financial services you need
        </h2>
        <p className='text-black/80 text-sm sm:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum eveniet incidunt
          veniam et quam rem enim iste porro nemo veritatis.
        </p>
      </div>

      {/* Steps */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl'>

        {/* Step 1 */}
        <div className='w-full pb-10'>
          <span className='bg-pink-600 p-5 text-white text-2xl sm:text-3xl font-bold rounded-lg shadow-2xl shadow-pink-500'>
            01
          </span>
          <h1 className='font-extrabold text-lg sm:text-xl mt-6 mb-3'>Answer a few questions</h1>
          <p className='text-sm text-black/80'>
            Quos nemo consequatur officia temporibus ullam soluta autem, molestias, sunt ea aut nulla saepe.
          </p>
          <img
            src='https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399917/dashed-line-arrow-vector-removebg-preview_vrfy5f.png'
            className='rotate-[-15deg] mt-6 sm:mt-10 w-32'
            alt='arrow'
          />
        </div>

        {/* Step 2 */}
        <div className='w-full pb-10'>
          <span className='bg-blue-600 p-5 text-white text-2xl sm:text-3xl font-bold rounded-lg shadow-2xl shadow-blue-500'>
            02
          </span>
          <h1 className='font-extrabold text-lg sm:text-xl mt-6 mb-3'>
            Get matched with top <br className='hidden sm:block' /> providers
          </h1>
          <p className='text-sm text-black/80'>
            Based on the info you provide and your creditworthiness, we match you with the right offer to meet your needs.
          </p>
          <img
            src='/src/assets/dashed-line-arrow-vector-removebg-preview.png'
            className='rotate-[-5deg] mt-6 sm:mt-10 w-32'
            alt='arrow'
          />
        </div>

        {/* Step 3 */}
        <div className='w-full pb-10'>
          <span className='bg-purple-600 p-5 text-white text-2xl sm:text-3xl font-bold rounded-lg shadow-2xl shadow-purple-500'>
            03
          </span>
          <h1 className='font-extrabold text-lg sm:text-xl mt-6 mb-3'>Answer a few questions</h1>
          <p className='text-sm text-black/80'>
            Quos nemo consequatur officia temporibus ullam soluta autem, molestias, sunt ea aut nulla saepe.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinServices;
