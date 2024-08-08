import React from 'react'
import img from './assets/w1.svg'
const WhoWeAre = () => {
    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col items-center gap-20 max-sm:gap-5 justify-between'>
                    <div>
                        <h2 className='text-[#666666] text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold'>Who We <span className='text-[#FB861E]'>Are?</span></h2>
                        <p className='text-[#666666] font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px]'>Fucturica Technologies was established with a vision to address the evolving needs of the IT and BPO industries. Our core values include innovation, commitment to excellence, and a student-first approach.</p>
                    </div>
                    <img src={img} alt='who we are?' className='max-xl:w-[500px] max-lg:w-[350px] max-md:w-[250px] max-sm:w-full'/>
                </div>
            </div>
        </>
    )
}

export default WhoWeAre