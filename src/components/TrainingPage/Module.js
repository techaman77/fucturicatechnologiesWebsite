import React from 'react';
import img1 from './assets/m1.svg';
import img2 from './assets/m2.svg';
import img3 from './assets/m3.svg';
import img4 from './assets/m4.svg';
import img5 from './assets/m5.svg';

const modules = [
    {
        img: img1,
        title: 'IT Hiring and Placement',
        description: 'Comprehensive training for IT roles with guaranteed placement.'
    },
    {
        img: img2,
        title: 'BPO Hiring and Placement',
        description: 'Skill development for BPO positions with job assurance.'
    },
    {
        img: img3,
        title: 'Technical Skill Development',
        description: 'Hands-on training in the latest technologies.'
    },
    {
        img: img4,
        title: 'Soft Skills and Communication Training',
        description: 'Enhancing interpersonal and communication skills.'
    },
    {
        img: img5,
        title: 'Job Interview Preparation',
        description: 'Preparing you to ace your interviews with confidence.'
    }
];

const Module = () => {
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%]'>
                    <h2 className='text-[#666666] text-[44px] text-center max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold'>
                        Our Training <span className='text-[#FB861E]'>Modules Include</span>
                    </h2>
                    <div className='flex flex-wrap items-center justify-center gap-20 max-md:gap-5 py-10'>
                        {modules.map((module, index) => (
                            <div key={index} className='flex flex-col'>
                                <img src={module.img} alt={`module${index + 1}`} className='m-auto translate-y-[50px]' />
                                <div className='text-[#666666] bg-[#FFEAD7] p-5 pt-20 rounded-[30px] w-[350px] max-xl:w-[250px] max-sm:w-full flex flex-col gap-3 items-center'>
                                    <h2 className='font-medium text-[24px] max-xl:text-[20px] max-sm:text-[18px] text-center'>{module.title}</h2>
                                    <p className='text-[20px] max-xl:text-[16px] max-sm:text-[14px] font-light text-center'>{module.description}</p>
                                    <button className='border border-[#007BFF] py-3 w-full text-center text-[#007BFF] font-semibold rounded-md hover:bg-[#007BFF] hover:text-[#fff]'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Module;
