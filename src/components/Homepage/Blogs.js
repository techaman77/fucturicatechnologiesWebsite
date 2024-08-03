import React from 'react'
import img1 from './assets/b1.svg'
import img2 from './assets/b2.svg'
import img3 from './assets/b3.svg'
import './story.css'
const Blogs = () => {
    return (
        <div className='w-full flex justify-center py-20'>
            <div className='w-[90%]'>
                <h2 className='text-[#666666] text-[48px] font-semibold'>Blogs</h2>
                <p className='text-[21px] text-[#666666] text-right'>See more</p>
                <div className='grid grid-cols-2 gap-x-20 gap-y-10 pt-5'>
                    <div className='overflow-hidden rounded-[40px]'>
                        <img src={img1} className='w-full hover-zoom rounded-[40px]' alt='img1' />
                    </div>
                    <div className='overflow-hidden rounded-[40px]'>
                        <img src={img2} className='w-full hover-zoom' alt='img2' />
                    </div>
                    <div className='overflow-hidden rounded-[40px] col-span-2'>
                        <img src={img3} className='w-full hover-zoom ' alt='img3' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blogs