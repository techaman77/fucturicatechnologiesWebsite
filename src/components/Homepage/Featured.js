import React from 'react'
import img1 from './assets/f1.png'
import img2 from './assets/f2.svg'
import img3 from './assets/f3.svg'
import img4 from './assets/f4.svg'
const Featured = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-full h-[750px] rounded-t-[100%] bg-gradient-to-t from-[#007BFF] to-[#0056B3] my-10'>
                    <div className='flex flex-col items-center pt-10'>
                        <img src={img1} alt='img'/>
                        <h2 className='text-[#fff] text-[48px] font-semibold'>Featured <span className='text-[#FB861E]'>Courses</span></h2>
                        <p className='text-[#fff] font-light text-[20px] text-center'>Lorem ipsum dolor sit amet consectetur. Neque gravida purus proin sagittis sem tellus cras consectetur pellentesque.</p>
                    </div>
                    <div className='flex justify-evenly pt-10'>
                        <img src={img2} alt='img'/>
                        <img src={img3} alt='img'/>
                        <img src={img4} alt='img'/>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured