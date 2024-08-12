import React from 'react'
import img from './assets/ad.svg'
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaArrowRightLong } from "react-icons/fa6";

const faqs = [
    {
        question: "Mobile App Development",
        answer: "Cutting-edge apps for iOS and Android platforms."
    },
    {
        question: "Web Application Development:",
        answer: "Scalable web apps tailored to your business needs."
    },
    {
        question: "UX/UI Design",
        answer: "Intuitive and engaging user interfaces."
    },
    {
        question: "API Integration",
        answer: "Seamless integration with third-party services."
    },
    {
        question: "App Testing and Quality Assurance",
        answer: "Rigorous testing to ensure reliability and performance."
    }
    
];
const AppDev = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%]'>
                    <h2 className='text-[#666666] text-[44px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold text-center'>Application <span className='text-[#FB861E]'>Development</span></h2>
                    <p className='text-[#666666] mx-20 max-md:mx-0 font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] text-center'>We develop high-performance applications that are not only functional but also provide an exceptional user experience.</p>
                    <div className='flex flex-row-reverse items-center max-md:flex-col-reverse py-10 justify-between mx-20 max-xl:mx-0'>
                        <img src={img} alt='web dev' className='max-lg:w-[400px]'/>
                        <div>
                            {faqs.map((faq, index) => (
                                <div key={index} className=" max-lg:mb-1">
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex justify-between items-center w-full p-4 max-lg:p-3 "
                                    >
                                        <span className='font-medium text-start text-[20px] text-[#666666] max-xl:text-[18px] max-lg:text-[14px] flex items-center gap-5'><FaArrowRightLong className='text-[#007BFF] text-[20px]'/> {faq.question}</span>
                                        {activeIndex === index ? (
                                            <FiChevronUp className="text-[#007BFF] w-6 h-6" />
                                        ) : (
                                            <FiChevronDown className="text-[#007BFF] w-6 h-6" />
                                        )}
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 linear ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                                            }`}
                                    >
                                        <div className="p-4 max-sm:p-2 text-[#666666] ml-10 text-opacity-[0.8] max-xl:text-[18px] max-lg:text-[14px]">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDev