import React from 'react';
import Card from '../components/Card';

const Services = () => {
    const card = [{
        image: '/src/assets/react.svg',
        alt: 'Credit Card',
        heading: 'CREDIT CARD',
        details: 'compare and choose offers from top providers to find the credit card that suits your needs'
    },
        {
        image: '/src/assets/react.svg',
        alt: 'Credit Card',
        heading: 'CREDIT CARD',
        details: 'compare and choose offers from top providers to find the credit card that suits your needs'
        },
        {
        image: '/src/assets/react.svg',
        alt: 'Credit Card',
        heading: 'LOAN',
        details: 'compare and choose offers from top providers to find the credit card that suits your needs'
        },
        {
        image: '/src/assets/react.svg',
        alt: 'Credit Card',
        heading: 'CREDIT CARD',
        details: 'compare and choose offers from top providers to find the credit card that suits your needs'
    },
        {
        image: '/src/assets/react.svg',
        alt: 'Credit Card',
        heading: 'CREDIT CARD',
        details: 'compare and choose offers from top providers to find the credit card that suits your needs'
        },
        {
        image: '/src/assets/react.svg',
        alt: 'Credit Card',
        heading: 'CREDIT CARD',
        details: 'compare and choose offers from top providers to find the credit card that suits your needs'
    }
    ]
  return (
      <div className='items-center justify-center flex flex-col p-10'>
          <div className=' w-300 items-center justify-center flex flex-col '>
          <div className='flex flex-col items-center pb-10'>
              <h4 className='font-bold text-blue-700 tracking-widest'> SERVICES</h4>
                  <h2 className='font-extrabold text-3xl p-3'>Find the financial services you need </h2>
                  <p className='text-center text-black/80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum eveniet incidunt veniam <br/> et quam rem enim iste porro nemo veritatis</p>
          </div>
              <div className='grid grid-cols-3 gap-4' >
                  {card.map((card) => (
                      <Card image={card.image} alt={card.alt} heading={card.heading} details={card.details} />
                  ))}
              
              
      </div>
    </div>
      </div>
  )
}

export default Services
