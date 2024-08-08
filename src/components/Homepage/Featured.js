import React from 'react';
import f1 from './assets/f1.svg';
import f2 from './assets/f2.svg';
import f3 from './assets/f3.svg';

const courses = [
    {
        img: f1,
        title: 'Web Development',
        description: 'Learn HTML, CSS, JavaScript, and modern frameworks like Angular and React.'
    },
    {
        img: f2,
        title: 'Data Science',
        description: 'Master data analysis, machine learning, and big data technologies.'
    },
    {
        img: f3,
        title: 'BPO Courses',
        description: 'Enhance your customer service skills and learn best practices for BPO.'
    }
];

const Featured = () => {
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className='w-[90%]'>
                    <h2 className='text-[#666666] text-center text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] font-semibold'>Featured <span className='text-[#FB861E]'>Courses</span></h2>
                    <p className='text-[#666666] font-light text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] text-center'>Explore our top courses designed to enhance your skills and career prospects:</p>
                    <div className='flex max-md:flex-wrap justify-center gap-20 mx-20 max-xl:mx-10 max-xl:gap-10 max-lg:mx-0 py-10 max-sm:py-5'>
                        {courses.map((course, index) => (
                            <div key={index} className='text-[#666666] bg-[#fff] hover:shadow-xl flex justify-between flex-col gap-5 p-4 rounded-2xl'>
                                <div className='flex flex-col gap-2'>
                                    <img src={course.img} alt={course.title} className='w-full'/>
                                    <h2 className='text-[24px] max-xl:text-[22px] max-lg:text-[20px] font-semibold'>{course.title}</h2>
                                    <p className='text-[16px] max-lg:text-[14px] font-light'>{course.description}</p>
                                </div>
                                <button className='border border-[#007BFF] py-3 text-center text-[#007BFF] font-semibold rounded-md hover:bg-[#007BFF] hover:text-[#fff]'>Learn More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Featured;
