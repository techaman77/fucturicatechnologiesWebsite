import React from 'react';
import img1 from './assets/innovative.svg';
import img2 from './assets/growth.svg';
import img3 from './assets/environment.svg';
import img4 from './assets/work.svg';

const features = [
    {
        img: img1,
        bgColor: 'bg-[#FB861E]',
        title: 'Innovative Projects',
        description: 'Be part of groundbreaking projects that push the boundaries of technology and innovation.'
    },
    {
        img: img2,
        bgColor: 'bg-[#007BFF]',
        title: 'Professional Growth',
        description: 'Access continuous learning opportunities, mentorship programs, and career advancement paths.'
    },
    {
        img: img3,
        bgColor: 'bg-[#666666]',
        title: 'Collaborative Environment',
        description: 'Work in a supportive and inclusive environment where your ideas are valued and collaboration is key.'
    },
    {
        img: img4,
        bgColor: 'bg-[#749B32]',
        title: 'Work-Life Balance',
        description: 'Enjoy flexible working hours, remote work options, and a healthy work-life balance.'
    }
];

const Choose = () => {
    return (
        <div className="w-full flex justify-center py-20 max-sm:py-10 font-Montserrat">
            <div className="w-[90%] flex flex-col items-center">
                <h2 className="text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[24px] text-[#666666] font-semibold text-center mb-6">Why Work <span className='text-[#FB861E]'>With Us?</span></h2>
                <div className='text-[#666666] grid grid-cols-2 max-sm:grid-cols-1 gap-10 mx-40 max-xl:mx-10 max-lg:mx-0 max-md:gap-5'>
                    {features.map((feature, index) => (
                        <div key={index} className={`p-8 max-xl:p-4 rounded-3xl max-md:rounded-xl ${feature.bgColor} bg-opacity-[0.1] flex gap-5`}>
                            <img src={feature.img} alt={feature.title} className='w-[60px] max-md:w-[40px]'/>
                            <h2 className='text-[24px] max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-md:leading-5 font-semibold'>
                                {feature.title} <br/>
                                <span className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] font-light'>{feature.description}</span>
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Choose;
