import React from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import facebookLogo from './assets/facebook.svg';
import instagramLogo from './assets/Instagram.svg';
import linkedinLogo from './assets/linkedin.svg';
import twitterLogo from './assets/twitter.svg';
import youtubeLogo from './assets/youtube.svg';
import img from './assets/icon.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="w-full py-5 bg-[#000]  curved-top text-[#fff] flex flex-col gap-5">
      <div className='flex flex-col items-center pt-10 max-sm:pt-5'>
        <img src={logo} alt="Fucturica Tech Logo" className="max-xl:w-[300px] max-md:w-[250px] max-sm:w-[200px]" />
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-lg:gap-y-10 w-[90%] py-10">
          <div className='flex flex-col gap-5 max-sm:col-span-2'>
            <h2 className='text-2xl max-xl:text-lg font-bold'>Subscribe To Newsletter</h2>
            <div className='relative'>
              <input type='text' placeholder='Your email' className='bg-[#666666] rounded-[30px] w-full p-4' />
              <img src={img} alt='message' className='absolute top-0 right-0 mt-1' />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl max-xl:text-lg font-semibold">Links</h3>
            <ul className="space-y-2 flex flex-col max-lg:items-center">
              <Link to='/login'><li className='font-bold max-md:text-[14px]'>Admin Login</li></Link>
              <li className=' max-md:text-[14px]'>About Us</li>
              <li className=' max-md:text-[14px]'>Services</li>
              <li className=' max-md:text-[14px]'>Courses</li>
              <li className=' max-md:text-[14px]'>Blogs</li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-2xl max-xl:text-lg font-semibold mb-[32px]">Office</h3>
            <address className="not-italic space-y-[16px] max-md:text-[14px]">
              <div>32/A New Alipore,<br />Kolkata South, Kolkata<br />Nearby Metro Station, Bus Stand.</div>
            </address>
          </div>

          <div className="flex flex-col items-center max-sm:hidden">
            <h3 className="text-2xl max-xl:text-lg font-semibold mb-[32px]">Reach Us</h3>
            <div className="space-y-2 flex flex-col max-md:text-[14px] max-lg:items-center">
              <div>Phone: +91-77488 35207</div>
              <div>Phone: +91-8962068877</div>
              <div>Email: hr@fucturicatechnologies.com</div>
              <div className="flex space-x-[12px] mt-[16px]">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src={youtubeLogo} alt="YouTube" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter" className="w-[36px] h-[36px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:hidden">
            <h3 className="text-2xl max-xl:text-lg font-semibold mb-[32px]">Reach Us</h3>
            <div className="space-y-2 flex flex-col max-md:text-[14px] max-lg:items-center">
              <div>Phone: +91-77488 35207</div>
              <div>Phone: +91-8962068877</div>
              <div>Email: hr@fucturicatechnologies.com</div>
              <div className="flex space-x-[12px] mt-[16px]">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <img src={youtubeLogo} alt="YouTube" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebookLogo} alt="Facebook" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagramLogo} alt="Instagram" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn" className="w-[36px] h-[36px]" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="Twitter" className="w-[36px] h-[36px]" />
                </a>
              </div>
            </div>
          </div>

        <div className="border-t w-[90%] mt-[20px] mx-auto" />

        <div className="flex justify-between max-sm:flex-col gap-5 w-full px-[100px] max-xl:px-10 mt-[12px]">
          <div className="text-left font-montserrat text-[16px] max-sm:text-[14px] max-sm:text-center leading-[32px]">
            Copyright © 2024 Fucturica Technologies, All rights reserved
          </div>
          <div className="flex flex-wrap justify-center space-x-[48px] max-sm:space-x-4 max-lg:space-x-5 text-left font-montserrat text-[16px] font-[400] leading-[32px]">
            <h3>Privacy Policy</h3>
            <h3>Terms and Conditions</h3>
            <h3>Sitemap</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
