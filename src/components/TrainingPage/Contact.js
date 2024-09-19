import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
      <div className='w-full flex justify-center py-10'>
        <div className='w-[90%] bg-[#E6F2FF] flex max-md:flex-col max-md:gap-5 items-center justify-between px-10 py-10 rounded-[40px]'>
          <p className='text-[20px] max-md:text-[16px] font-light text-[#666666]'>Join hands with Fucturica Technologies and let us help you achieve your business and career goals.</p>
          <Link to='/contact-us'><p className='hover:bg-[#007BFF] w-[200px] max-lg:w-[250px] max-sm:border-[1px] max-md:w-[150px] border-2 border-[#007BFF] py-2 px-4 max-lg:py-1 max-lg:px-3 text-[#007BFF] hover:text-[#fff] flex items-center gap-3 text-[20px] max-xl:text-[16px] max-md:text-[12px] rounded-[30px]'>Get in touch<GoArrowRight className='text-[30px] max-lg:text-[20px]' /></p></Link>
        </div>
      </div>
    </>
  )
}

export default Contact