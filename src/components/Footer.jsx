import React from 'react';
import Button from './Button';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='text-white bg-[url(./assets/images.jpeg)] bg-cover bg-center flex items-center justify-center flex-col m-2 pt-20 '>
          <div className='w-250 '>
               <div className='flex items-center justify-center flex-col mb-9'>
              <h2 className='text-3xl font-bold'>Get In Touch With Us</h2>
              <p className='text-white/80 p-3 text-center'>This is a big one and i consider it one of the most important things for <br/> a designer </p>
              <div className='flex flex-row gap-6 '><input placeholder='Enter your business email' className='bg-white text-black/60 rounded-md px-20' type='email'/> <Button name="Get Started"/></div>
             </div>
          <hr className='text-white/30' />
          <div className='grid grid-cols-2 p-8'>
              <div className='w-70 ' >
                  <h2 className='text-xl font-semibold '> compareoffers</h2>
                  <p className='text-white/80 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat eum, impedit beatae quam nemo fuga unde </p>
              </div>
                  <div className='grid grid-cols-3 gap-6'>
                      <div>
                  <h3 className='text-xl font-semibold '>Quick Links</h3>
                  <ul className='text-white/90 pt-5'>
                      <li ><Link to="/">Home</Link></li>
                      <li ><Link>Portfolio</Link></li>
                      <li><Link>Features</Link></li>
                      <li><Link>Team</Link></li>
                      <li><Link>Blog</Link></li>
                      
                  </ul>
              </div>
              <div>
                  <h3 className='text-xl font-semibold text-white/'>Company</h3>
                  <ul className='text-white/90 pt-5'>
                      <li><Link to='/'>About</Link></li>
                      <li><Link>Contact</Link></li>
                      <li><Link>Careers</Link></li>
                      <li><Link>Press</Link></li>
                     
                  </ul>
              </div>
              <div>
                  <h3 className='text-xl font-semibold text-white/'>Information</h3>
                  <ul className='text-white/80 pt-5'>
                      <li><Link>Privacy Policy</Link></li>
                      <li><Link>Terms & Condition</Link></li>
                      <li><Link>FAQ</Link></li>
                  </ul>
              </div>
                  </div>
                  
              </div>
              <hr className='text-white/30' />
              <div className='flex justify-between text-white/70 p-3'>
                  <p> Copyright @ 22020 Compareoffers. All Rights Reserved</p>
                  <Link>Terms & Condition</Link>
              </div>
         </div>
    </div>
  )
}

export default Footer
