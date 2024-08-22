import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon1 from './assets/j1.png';
import icon2 from './assets/j2.png';
import icon3 from './assets/j3.png';
import ApplyForm from './ApplyForm';

const ReactNativeDev = () => {
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
                    <h2 className='font-semibold text-[44px] max-xl:text-[35px] max-lg:text-[28px]'>React Native Developer</h2>
                    <div className='flex flex-col max-sm:gap-2'>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon1} alt='icon1' />
                            <h2 className='font-semibold'>Location :</h2>
                            <p className='font-light'>Remote</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon2} alt='icon1' />
                            <h2 className='font-semibold'>Type :</h2>
                            <p className='font-light'>Part-Time/Full-Time</p>
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
                                    Develop and maintain mobile applications for iOS and Android using React Native.
                                </li>
                                <li>
                                    Collaborate with cross-functional teams to define, design, and ship new features.
                                </li>
                                <li>
                                    Ensure the performance, quality, and responsiveness of applications.
                                </li>
                                <li>
                                    Identify and correct bottlenecks and fix bugs.
                                </li>
                                <li>
                                    Continuously discover, evaluate, and implement new technologies to maximize development efficiency.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">
                                Requirements:
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Proven experience in React Native development.
                                </li>
                                <li>
                                    Strong knowledge of mobile app development lifecycle.
                                </li>
                                <li>
                                    Familiarity with native build tools, like XCode, Android Studio.
                                </li>
                                <li>
                                    Experience with integrating third-party APIs and services.
                                </li>
                                <li>
                                    Solid understanding of mobile UI/UX best practices.
                                </li>
                                <li>
                                    Ability to write clean, well-documented code.
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

export default ReactNativeDev