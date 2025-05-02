import React from 'react'

const FinServices = () => {
  return (
    
      <section className='  items-center justify-center flex flex-col my-20 mb-40'>
          <div className='flex flex-col items-center pb-10'>
              <h4 className='font-bold text-blue-700 tracking-widest'> SERVICES</h4>
                  <h2 className='font-extrabold text-3xl p-3'>Find the financial services you need </h2>
                  <p className='text-center text-black/80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum eveniet incidunt veniam <br/> et quam rem enim iste porro nemo veritatis</p>
          </div>
          <div className='grid grid-cols-3 gap-10'>
              
              <div className='w-70 pb-10 '>
                  <span className='bg-pink-600 p-5 text-white text-3xl font-bold rounded-lg shadow-2xl  shadow-pink-500'>01</span>
                  <h1 className='font-extrabold text-xl mt-9 mb-3'> Answer a few questions</h1>
                  <p>Quos nemo consequatur officia temporibus ullam soluta autem, molestias, sunt ea aut nulla saepe. </p>
                 <img src='/src/assets/dashed-line-arrow-vector-removebg-preview.png' className='rotate-x-180 rotate-15 ml-15 -mt-60'/>
              </div> 
              <div className='w-70 mt-15 '>
                  <span className='bg-blue-600 p-5 text-white text-3xl font-bold rounded-lg shadow-2xl  shadow-blue-500'>02</span>
                  <h1 className='font-extrabold text-xl mt-9 mb-3'> Get matched with top <br/> providers</h1>
                  <p>Based on the info you provide and your creditworthiness, we match you with the right offer to meet your needs.</p>
                 <img src='/src/assets/dashed-line-arrow-vector-removebg-preview.png' className='-rotate-5 ml-12 -mt-70'/>
              </div> 
              <div className='w-70 pb-10 '>
                  <span className='bg-purple-600 p-5 text-white text-3xl font-bold rounded-lg shadow-2xl  shadow-purple-500'>03</span>
                  <h1 className='font-extrabold text-xl mt-9 mb-3'> Answer a few questions</h1>
                  <p>Quos nemo consequatur officia temporibus ullam soluta autem, molestias, sunt ea aut nulla saepe. </p>
                 
                 </div> 
          </div>
              
    </section>
  )
}

export default FinServices
