import React from 'react';
import welcomeImage from './assets/w1.svg';
import { GoArrowRight } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";

const Welcome = () => {
    return (
        <div className="w-full flex justify-center py-10 max-md:py-5 overflow-x-hidden font-Montserrat">
            <div className="flex justify-between items-center w-[90%] max-md:flex-col">
                <div className="flex flex-col justify-center gap-5 max-md:w-full">
                    <h1 className="text-[52px] max-xl:text-[40px] max-lg:text-[32px] max-sm:text-[24px] text-[#666666] font-semibold tracking-tight leading-tight">
                        Welcome to <br /> <span className='text-[#FB861E]'>Fucturica Technologies</span>
                    </h1>


                    <p className="text-[20px] max-xl:text-[14px] max-lg:text-[14px] text-[#666666] font-light opacity-85">
                        Our mission is to bridge the gap between academia and <br /> industry through personalized, hands-on learning <br /> experiences.
                    </p>
                    <div className='flex gap-10 max-lg:gap-5'>
                        <p className='hover:bg-[#007BFF] border-2 max-sm:border-[1px] border-[#007BFF] py-2 px-4 max-lg:py-1 max-lg:px-3 text-[#007BFF] hover:text-[#fff] flex items-center gap-3 text-[20px] max-lg:text-[16px] max-md:text-[12px] rounded-[30px]'>Get in touch<GoArrowRight className='text-[30px] max-lg:text-[20px]' /></p>
                        <p className='border-2 max-sm:border-[1px] border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-[#fff] text-[20px] max-lg:text-[16px] max-md:text-[12px] rounded-[30px] px-4 py-2 max-lg:py-1 max-lg:px-3 flex gap-3 items-center'>Learn More<IoAddOutline className='text-[30px] max-lg:text-[20px]'/></p>
                    </div>
                </div>
                <img src={welcomeImage} alt="Welcome" className="w-[504px] max-xl:w-[450px] max-lg:w-[320px] max-md:w-full" />
            </div>
        </div>
    );
}

export default Welcome;
