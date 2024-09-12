import React from 'react'
import img from './assets/fucturica-support.svg';

const GetInTouch = () => {
    return (
        <>
            <div className='w-full flex justify-center py-15 max-sm:py-5'>
                <div className='w-[90%] flex max-sm:flex-col items-center gap-20 max-sm:gap-5 justify-between'>
                    <div>
                        <h2 className='text-gray font-montserrat text-large max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold'>Get In <span className='text-secondary'>Touch</span></h2>
                        <p className='text-gray font-light font-montserrat text-medium max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px]'>We'd love to hear from you! Fill out the form below for any inquiries, or reach us directly through our contact details:</p>
                    </div>
                    <img src={img} alt='fucturicatechnologies.com' className='max-xl:w-[500px] max-lg:w-[350px] max-md:w-[250px] max-sm:w-full' />
                </div>
            </div>
        </>
    )
}

export default GetInTouch