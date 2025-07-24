import React from 'react';
import Button from './Button';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className='text-white bg-[url(https://res.cloudinary.com/dqyda9hcz/image/upload/v1753399955/images_k0p3bh.jpg)] bg-cover bg-center flex items-center justify-center flex-col pt-16 px-4 sm:px-8'>
      <div className='w-full max-w-7xl'>

        {/* CTA Section */}
        <div className='flex flex-col items-center text-center mb-12 px-4'>
          <h2 className='text-2xl sm:text-3xl font-bold'>Get In Touch With Us</h2>
          <p className='text-white/80 mt-4'>
            This is a big one and I consider it one of the most important things for <br className='hidden sm:inline' />
            a designer.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto'>
            <input
              type='email'
              placeholder='Enter your business email'
              className='w-full sm:w-auto px-4 py-2 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <Button name="Get Started" />
          </div>
        </div>

        <hr className='border-white/30 mb-8' />

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>

          {/* About Section */}
          <div>
            <h2 className='text-xl font-semibold'>compareoffers</h2>
            <p className='text-white/80 pt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat eum, impedit beatae quam nemo fuga unde.
            </p>
          </div>

          {/* Link Sections */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-6'>
            <div>
              <h3 className='text-lg font-semibold'>Quick Links</h3>
              <ul className='text-white/90 pt-4 space-y-1'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Portfolio</Link></li>
                <li><Link to="/">Features</Link></li>
                <li><Link to="/">Team</Link></li>
                <li><Link to="/">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold'>Company</h3>
              <ul className='text-white/90 pt-4 space-y-1'>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Press</Link></li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold'>Information</h3>
              <ul className='text-white/90 pt-4 space-y-1'>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms & Conditions</Link></li>
                <li><Link to="/">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className='border-white/30 my-8' />

        {/* Bottom Copyright */}
        <div className='flex flex-col sm:flex-row justify-between items-center text-white/70 px-4 pb-6 gap-4 text-center sm:text-left'>
          <p>&copy; 2020 Compareoffers. All Rights Reserved.</p>
          <Link to="/" className="hover:text-white">Terms & Conditions</Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
