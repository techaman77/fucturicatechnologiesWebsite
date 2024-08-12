import React from 'react'
import img from './assets/t1.svg'
import { GoArrowRight } from "react-icons/go";
import { IoAddOutline } from "react-icons/io5";
const Header = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col items-center gap-20 max-sm:gap-0 justify-between'>
                    <div className='flex flex-col justify-center gap-5 max-sm:gap-2 max-md:w-full'>
                        <h2 className='text-[#666666] text-[44px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold'>Training Modules for <span className='text-[#FB861E]'>Guaranteed </span>Job Placement</h2>
                        <p className='text-[#666666] font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px]'>We empower individuals with the skills to succeed in IT and BPO industries. Our training programs offer practical knowledge and real-world experience, ensuring job readiness, with guaranteed job placement to kickstart your career.</p>
                        <div className='flex gap-10 max-lg:gap-5'>
                            <p className='hover:bg-[#007BFF] max-sm:border-[1px] border-2 border-[#007BFF] py-2 px-4 max-lg:py-1 max-lg:px-3 text-[#007BFF] hover:text-[#fff] flex items-center gap-3 text-[20px] max-lg:text-[16px] max-md:text-[12px] rounded-[30px]'>Get in touch<GoArrowRight className='text-[30px] max-lg:text-[20px]' /></p>
                            <p className='border-2 max-sm:border-[1px] border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-[#fff] text-[20px] max-lg:text-[16px] max-md:text-[12px] rounded-[30px] px-4 py-2 max-lg:py-1 max-lg:px-3 flex gap-3 items-center'>Learn More<IoAddOutline className='text-[30px] max-lg:text-[20px]' /></p>
                        </div>
                    </div>
                    <img src={img} alt='who we are?' className='max-xl:w-[500px] max-lg:w-[350px] max-md:w-[250px] max-sm:w-full' />
                </div>
            </div>
        </>
    )
}

export default Header