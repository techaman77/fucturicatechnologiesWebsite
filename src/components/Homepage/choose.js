import React from 'react';
import img1 from './assets/c1.svg';
import img2 from './assets/c2.svg';
import img3 from './assets/c3.svg';
import img4 from './assets/c4.svg';

const features = [
    {
        img: img1,
        bgColor: 'bg-[#FB861E]',
        title: 'Innovative Approach',
        description: 'Focus on practical, real-world skills and continuous learning.'
    },
    {
        img: img2,
        bgColor: 'bg-[#007BFF]',
        title: 'Commitment to Quality',
        description: 'We adhere to the highest standards of quality in all our projects.'
    },
    {
        img: img3,
        bgColor: 'bg-[#666666]',
        title: 'Experienced Team',
        description: 'Our team consists of industry experts with years of experience.'
    },
    {
        img: img4,
        bgColor: 'bg-[#749B32]',
        title: 'Ongoing Support',
        description: 'We provide continuous support to ensure your success.'
    }
];

const Choose = () => {
    return (
        <div className="w-full flex justify-center py-20 max-sm:py-10 font-Montserrat">
            <div className="w-[90%] flex flex-col items-center">
                <h2 className="text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[24px] text-[#666666] font-semibold text-center mb-6">Why <span className='text-[#FB861E]'>Choose Us?</span></h2>
                <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] font-light text-[#666666] text-center mb-12">Our dedicated team and innovative solutions set us apart in the industry. Here&apos;s why you should choose us</p>
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
