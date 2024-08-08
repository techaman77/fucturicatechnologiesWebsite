import React from 'react'
import img from './assets/a1.svg'
const Approach = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-[90%] flex max-sm:flex-col-reverse items-center gap-20 max-sm:gap-5 justify-between'>
                    <img src={img} alt='approach' className='max-xl:w-[500px] max-lg:w-[350px] max-md:w-[250px] max-sm:w-full' />
                    <div>
                        <h2 className='text-[#666666] text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold'>Our <span className='text-[#FB861E]'>Approach</span></h2>
                        <p className='text-[#666666] font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px]'>At Fucturica Technologies, we believe in an innovative approach to training. Our programs focus on practical, real-world skills and continuous learning. We use the latest technologies and methodologies to keep our curriculum relevant, ensuring that our students are always ahead of the curve.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Approach