import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon1 from './assets/j1.png';
import icon2 from './assets/j2.png';
import icon3 from './assets/j3.png';
import ApplyForm from './ApplyForm';

const ReactDev = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleApplyClick = () => {
        setShowPopup(true);
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }
    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[70%] max-xl:w-[80%] max-md:w-[90%] flex flex-col gap-10 max-sm:gap-5 text-[#666666]'>
                    <Link to='/career'><p className='text-[20px] max-lg:text-[16px] max-sm:text-[14px] font-semibold flex items-center gap-4'><FaArrowLeftLong /> Career</p></Link>
                    <h2 className='font-semibold text-[44px] max-xl:text-[35px] max-lg:text-[28px]'>React.js Developer</h2>
                    <div className='flex flex-col max-sm:gap-2'>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon1} alt='icon1' />
                            <h2 className='font-semibold'>Location :</h2>
                            <p className='font-light'>Remote</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon2} alt='icon1' />
                            <h2 className='font-semibold'>Type :</h2>
                            <p className='font-light'>Full Time</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon2} alt='icon1' />
                            <h2 className='font-semibold'>Experience :</h2>
                            <p className='font-light'>2-3 Years</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon3} alt='icon1' />
                            <h2 className='font-semibold'>Compensation :</h2>
                            <p className='font-light'>Up to ₹ 8 LPA</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {/* <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Job Description</h3>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                We are seeking energetic and customer-oriented freshers to join our BPO team. As a BPO Fresher, you will be responsible for handling customer inquiries, resolving issues, and providing excellent service. This role is perfect for individuals looking to start their career in the BPO industry with a competitive salary and growth opportunities.
                            </p>
                        </div> */}
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold ">
                                Responsibilities
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Develop new user-facing features using React.js.
                                </li>
                                <li>
                                    Build reusable components and front-end libraries for future use.
                                </li>
                                <li>
                                    Translate designs and wireframes into high-quality code.
                                </li>
                                <li>
                                    Optimize components for maximum performance across a vast array of web-capable devices and browsers.
                                </li>
                                <li>
                                    Collaborate with other team members and stakeholders.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">
                                Requirements:
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.
                                </li>
                                <li>
                                    Thorough understanding of React.js and its core principles.
                                </li>
                                <li>
                                    Experience with popular React.js workflows (such as Flux or Redux).
                                </li>
                                <li>
                                    Familiarity with RESTful APIs.
                                </li>
                                <li>
                                    Knowledge of modern authorization mechanisms, such as JSON Web Token.
                                </li>
                                <li>
                                    Familiarity with modern front-end build pipelines and tools.
                                </li>
                                <li>
                                    Ability to understand business requirements and translate them into technical requirements.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <button
                            onClick={handleApplyClick}
                            className='text-[#fff] font-medium text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] bg-[#007BFF] rounded-3xl text-center py-2 px-20 max-xl:px-10'
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {/* Render PopupForm Component */}
            {showPopup && <ApplyForm onClose={handleClosePopup} />}
        </>
    )
}

export default ReactDev