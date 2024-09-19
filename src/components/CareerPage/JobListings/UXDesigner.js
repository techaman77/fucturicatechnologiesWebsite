import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon1 from './assets/j1.png';
import icon2 from './assets/j2.png';
import icon3 from './assets/j3.png';
import ApplyForm from './ApplyForm';
const UXDesigner = () => {
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
                    <h2 className='font-semibold text-[44px] max-xl:text-[35px] max-lg:text-[28px]'>UI/UX Designer</h2>
                    <div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon1} alt='icon1' />
                            <h2 className='font-semibold'>Location :</h2>
                            <p className='font-light'>Remote</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon2} alt='icon1' />
                            <h2 className='font-semibold max-sm:w-[90px]'>Type :</h2>
                            <p className='font-light'>Internship (3 Months) with potential full-time opportunity</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon2} alt='icon1' />
                            <h2 className='font-semibold'>Experience :</h2>
                            <p className='font-light'>2-3 Year</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon3} alt='icon1' />
                            <h2 className='font-semibold'>Compensation :</h2>
                            <p className='font-light'>Up to ₹8LPA</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Job Description</h3>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                Collaborate with product managers and developers to define and implement innovative solutions for the product direction, visuals, and experience.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold ">
                                Key Responsibilities
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Create wireframes, storyboards, user flows, process flows, and site maps to effectively communicate interaction and design ideas.
                                </li>
                                <li>
                                    Execute all visual design stages from concept to final hand-off to engineering.
                                </li>
                                <li>
                                    Conduct user research and evaluate user feedback.
                                </li>
                                <li>
                                    Establish and promote design guidelines, best practices, and standards.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">
                                Requirements
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Proven UI/UX experience with a strong portfolio.
                                </li>
                                <li>
                                    Proficiency in design software like Sketch, Figma, Adobe XD, or similar.
                                </li>
                                <li>
                                    Excellent visual design skills with sensitivity to user-system interaction.
                                </li>
                                <li>
                                    Ability to present your designs and sell your solutions to various stakeholders.
                                </li>
                                <li>
                                    Up-to-date with the latest UI trends, techniques, and technologies.
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

export default UXDesigner