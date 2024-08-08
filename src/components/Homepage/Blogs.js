import React from 'react'
import img1 from './assets/b1.svg'
import img2 from './assets/b2.svg'
import img3 from './assets/b3.svg'
import { MdOutlineArrowOutward } from "react-icons/md";

const blogPosts = [
    {
        img: img1,
        title: 'The Future of IT Training: Why Hands-On Experience Matters',
        description: 'Understanding the practical applications of technology.',
    },
    {
        img: img2,
        title: 'Transforming Careers with BPOTraining',
        description: 'Developing the skills needed to excel in the BPO industry.',
    },
    {
        img: img3,
        title: 'Embracing Data Science: A Career Path with Endless Possibilities',
        description: 'Covering data analysis, machine learning, and more.',
    }
];

const Blogs = () => {
    return (
        <div className='w-full flex justify-center py-20 max-sm:py-0'>
            <div className='w-[90%]'>
                <h2 className='text-[#666666] text-center text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] font-semibold'>
                    Our Blog <span className='text-[#FB861E]'>Posts</span>
                </h2>
                <div className='text-[#666666] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-20 max-sm:gap-10 mx-20 max-md:mx-10 max-sm:mx-0 py-10'>
                    {blogPosts.map((post, index) => (
                        <div key={index} className='flex flex-col gap-3'>
                            <img src={post.img} alt='blog post' />
                            <div className='flex items-center gap-5'>
                                <h2 className='text-[20px] max-xl:text-[16px] font-medium'>{post.title}</h2>
                                <MdOutlineArrowOutward className='text-[#FB861E] text-[44px] m-auto' />
                            </div>
                            <p className='font-normal text-[16px] max-xl:text-[14px]'>{post.description}</p>
                            <div className='flex gap-5 max-xl:gap-2'>
                                <button className='text-[#007BFF] max-xl:text-[14px] bg-[#007BFF] hover:text-[#fff] hover:bg-[#007BFF] bg-opacity-[0.1] rounded-[20px] py-1 px-4'>Leadership</button>
                                <button className='text-[#666666] max-xl:text-[14px] bg-[#666666] hover:text-[#fff] hover:bg-[#666666] bg-opacity-[0.1] rounded-[20px] py-1 px-4'>Management</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs
