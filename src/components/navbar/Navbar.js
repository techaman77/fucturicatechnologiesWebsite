import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaXmark } from 'react-icons/fa6';
import './navbar.css';

function Navbar() {
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full flex justify-center py-5 border-b border-[#000]'>
            <div className='h-full w-[90%] text-[#666666] flex items-center justify-between max-sm:items-center'>
            <Link to="/">
                <img className='max-md:w-[200px] max-sm:w-[150px]' src={logo} alt='logo' />
            </Link>
            <ul className={`w-full gap-5 max-lg:gap-3 justify-end flex items-center max-sm:flex-col max-sm:justify-center max-sm:gap-10 max-sm:absolute max-sm:bg-black max-sm:bg-opacity-95 z-[5] max-sm:w-[100%] max-sm:h-screen ${open ? 'top-[0%]' : 'top-[-1490px]'}`}>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li className='text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold hover text-center max-sm:mb-5'>About Us</li>
                </Link>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li className='text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold text-center hover max-sm:mb-5'>Services</li>
                </Link>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li className='text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold hover text-center max-sm:mb-5'>Career</li>
                </Link>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li className='text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold hover text-center max-sm:mb-5'>Courses</li>
                </Link>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li className='text-[18px] max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold hover text-center max-sm:mb-5'>Blogs</li>
                </Link>
                <Link to="/" onClick={() => setOpen(!open)}>
                    <li className='text-[18px] text-[#007BFF] border border-[#007BFF] rounded-[40px] px-5 py-2 max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold hover px-2 text-center '>Login</li>
                </Link>
            </ul>
            <div onClick={() => setOpen(!open)} className='block sm:hidden absolute right-[5%] z-[6] flex '>
                {
                    open ? <FaXmark className='w-[30px] h-[30px]' /> : <GiHamburgerMenu className='w-[25px] h-[25px]' />
                }
            </div>
        </div>
        </div>
    );
}

export default Navbar;
