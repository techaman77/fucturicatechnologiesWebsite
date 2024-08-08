import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth';
import logo from './assets/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaXmark } from 'react-icons/fa6';
import { IoLogOutOutline } from "react-icons/io5";
import './navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const username = localStorage.getItem('name');  // Assuming user is a string

    const handleToggleMenu = () => setOpen(!open);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        navigate('/admin-login');
    };

    return (
        <div className='w-full flex justify-center py-5 max-sm:py-4 border-b border-[#000]'>
            <div className='h-full w-[90%] text-[#666666] max-sm:text-[#fff] flex items-center justify-between max-sm:items-center'>
                <Link to="/">
                    <img className='max-lg:w-[200px] max-md:w-[180px] max-sm:w-[150px]' src={logo} alt='logo' />
                </Link>
                <div className={`${currentPath === '/admin-panel' || currentPath === '/employee-panel' ? 'hidden' : ''}`}>
                    <ul className={`w-full gap-5 max-lg:gap-3 justify-end flex items-center max-sm:flex-col max-sm:justify-center max-sm:gap-10 max-sm:absolute max-sm:bg-black max-sm:bg-opacity-95 z-[5] max-sm:w-[100%] max-sm:h-screen ${open ? 'top-[0%] left-0' : 'top-[-1490px]'}`}>
                        <Link to="/" onClick={handleToggleMenu}>
                            <li className={`text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-semibold text-center hover max-sm:mb-5 ${currentPath === '/' ? 'active' : ''}`}>About Us</li>
                        </Link>
                        <Link to="/services" onClick={handleToggleMenu}>
                            <li className={`text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-semibold text-center hover max-sm:mb-5 ${currentPath === '/services' ? 'active' : ''}`}>Services</li>
                        </Link>
                        <Link to="/career" onClick={handleToggleMenu}>
                            <li className={`text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-semibold text-center hover max-sm:mb-5 ${currentPath === '/career' ? 'active' : ''}`}>Career</li>
                        </Link>
                        <Link to="/courses" onClick={handleToggleMenu}>
                            <li className={`text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-semibold text-center hover max-sm:mb-5 ${currentPath === '/courses' ? 'active' : ''}`}>Courses</li>
                        </Link>
                        <Link to="/blogs" onClick={handleToggleMenu}>
                            <li className={`text-[18px] max-lg:text-[16px] max-md:text-[12px] max-sm:text-[14px] tracking-wide font-semibold text-center hover max-sm:mb-5 ${currentPath === '/blogs' ? 'active' : ''}`}>Blogs</li>
                        </Link>
                        <Link to="/contact" onClick={handleToggleMenu}>
                            <li className={`text-[18px] max-lg:text-[16px] text-[#fff] bg-[#FB861E] borde rounded-[40px] py-2 max-md:text-[14px] max-sm:text-[14px] tracking-wide font-semibold px-3 text-center ${currentPath === '/contact' ? 'active' : ''}`}>Contact Us</li>
                        </Link>
                    </ul>
                    <div onClick={handleToggleMenu} className='block text-[#666666] sm:hidden absolute right-[5%] top-[3%] z-[6]'>
                        {open ? <FaXmark className='w-[30px] h-[30px]' /> : <GiHamburgerMenu className='w-[20px] h-[25px]' />}
                    </div>
                </div>
                <div className={`${currentPath === '/admin-panel' || currentPath === '/employee-panel' ? 'flex' : 'hidden'} gap-5`}>
                    <h2 className='border-2 border-opacity-[0.6] border-[#666666] rounded-[30px] p-2 px-4 text-[18px] font-bold'>{username}</h2>
                    <button
                        onClick={handleLogout}
                        className='flex flex-col items-center text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-semibold text-[#666666]'
                    >
                        <IoLogOutOutline className='text-[24px] max-xl:text-[20px] max-lg:text-[18px]' />
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
