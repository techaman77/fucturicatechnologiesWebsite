import React from 'react'
import img from './assets/bd.svg'
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaArrowRightLong } from "react-icons/fa6";

const faqs = [
    {
        question: "Market Analysis and Strategy",
        answer: "In-depth market research and strategic planning."
    },
    {
        question: "Business Process Optimization",
        answer: "Enhancing efficiency and productivity."
    },
    {
        question: "Digital Transformation Consulting",
        answer: "Leveraging technology to transform your business."
    },
    {
        question: "Sales and Marketing Strategy",
        answer: "Developing tactics to boost your sales and brand presence."
    },
    {
        question: "Financial Planning and Analysis",
        answer: "Insightful financial strategies to drive growth."
    }
    
];
const BusinessDev = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='w-full flex justify-center py-20 max-sm:py-5'>
                <div className='w-[90%]'>
                    <h2 className='text-[#666666] text-[44px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold text-center'>Business <span className='text-[#FB861E]'>Development</span> and <span className='text-[#FB861E]'>Consulting</span></h2>
                    <p className='text-[#666666] mx-20 max-md:mx-0 font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] text-center'>Our team of skilled developers and designers works collaboratively to create custom websites tailored to your specific needs, ensuring they are responsive, user-friendly, and optimized for search engines.</p>
                    <div className='flex items-center max-md:flex-col py-10 justify-between mx-20 max-xl:mx-0'>
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

export default BusinessDev