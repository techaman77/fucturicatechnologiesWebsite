import React from 'react';
import logo from './assets/logo.svg';
import facebookLogo from './assets/facebook.svg';
import instagramLogo from './assets/Instagram.svg';
import linkedinLogo from './assets/linkedin.svg';
import twitterLogo from './assets/twitter.svg';
import youtubeLogo from './assets/youtube.svg';

const Footer = () => {
  return (
    <div className="w-full h-[439px] bg-white flex flex-col">
      <div className="flex flex-row justify-between w-full px-[100px] pt-[67px]">
        <img src={logo} alt="Fucturica Tech Logo" className="w-[250px] h-[86.45px] pt-0 px-2" />
        
        <div className="flex flex-col items-start w-[193px]">
          <h3 className="text-lg font-semibold mb-[32px]">Links</h3>
          <ul className="space-y-[10px]">
            <li>About Us</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Blogs</li>
          </ul>
        </div>
        
        <div className="flex flex-col items-start w-[185px]">
          <h3 className="text-lg font-semibold mb-[32px]">Office</h3>
          <address className="not-italic space-y-[16px]">
            <div>123 Fucturica Lane,<br />Tech Park, Bengaluru,<br />Karnataka 560001</div>
          </address>
        </div>
        
        <div className="flex flex-col items-start w-[278px]">
          <h3 className="text-lg font-semibold mb-[32px]">Reach Us</h3>
          <div className="space-y-[16px]">
            <div>Phone: +91-9876543210</div>
            <div>Email: contact@fucturicatech.com</div>
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
      
      <div className="border-t w-[1240px] mt-[20px] mx-auto" />
      
      <div className="flex justify-between w-full px-[100px] mt-[12px] text-[#666666]">
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
