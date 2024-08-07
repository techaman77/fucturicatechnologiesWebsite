import React from 'react';
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import facebookLogo from './assets/facebook.svg';
import instagramLogo from './assets/Instagram.svg';
import linkedinLogo from './assets/linkedin.svg';
import twitterLogo from './assets/twitter.svg';
import youtubeLogo from './assets/youtube.svg';

const Footer = () => {
  return (
    <div className="w-full py-5 bg-[#000] text-[#fff] flex flex-col gap-5">
      <div className="flex flex-row justify-between w-full px-[100px] pt-10">
        <img src={logo} alt="Fucturica Tech Logo" className="" />
        
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-[32px]">Links</h3>
          <ul className="space-y-[16px]">
            <Link to='/admin-login'><li className='font-bold'>Admin Login</li></Link>
            <li>About Us</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Blogs</li>
          </ul>
        </div>
        
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-[32px]">Office</h3>
          <address className="not-italic space-y-[16px]">
            <div>32/A New Alipore,<br />Kolkata South, Kolkata<br />Nearby Metro Station, Bus Stand.</div>
          </address>
        </div>
        
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-[32px]">Reach Us</h3>
          <div className="space-y-[16px]">
            <div>Phone: +91-9876543210</div>
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
      
      <div className="border-t w-[90%] mt-[20px] mx-auto" />
      
      <div className="flex justify-between w-full px-[100px] mt-[12px]">
        <div className="text-left font-montserrat text-[16px] font-[400] leading-[32px]">
          Copyright © 2024 Fucturica Technologies, All rights reserved
        </div>
        <div className="flex space-x-[48px] text-left font-montserrat text-[16px] font-[400] leading-[32px]">
          <div>Privacy Policy</div>
          <div>Terms and Conditions</div>
          <div>Sitemap</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
