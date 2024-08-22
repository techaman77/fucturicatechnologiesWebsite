import React from 'react'
import img from './assets/drive.svg'
const Top = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col items-center gap-20 max-sm:gap-5 justify-between'>
                    <div>
                        <h2 className='text-[#666666] text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold'>Join Our <span className='text-[#FB861E]'>Team</span> and <span className='text-[#FB861E]'>Drive Innovation</span></h2>
                        <p className='text-[#666666] font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px]'>At Futurica, we believe in the power of teamwork, creativity, and continuous learning. If you're passionate about technology, dedicated to excellence, and eager to make a difference, we want you on our team.</p>
                    </div>
                    <img src={img} alt='who we are?' className='max-xl:w-[500px] max-lg:w-[350px] max-md:w-[250px] max-sm:w-full'/>
                </div>
            </div>
        </>
    )
}

export default Top