import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon1 from './assets/j1.png';
import icon2 from './assets/j2.png';
import icon3 from './assets/j3.png';
import ApplyForm from './ApplyForm';

const BpoFresher = () => {
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
                    <h2 className='font-semibold text-[44px] max-xl:text-[35px] max-lg:text-[28px]'>BPO Fresher</h2>
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
                            <p className='font-light'>Freshers, Graduates</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon3} alt='icon1' />
                            <h2 className='font-semibold'>Compensation :</h2>
                            <p className='font-light'>₹2.8 LPA</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Job Description</h3>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                We are seeking energetic and customer-oriented freshers to join our BPO team. As a BPO Fresher, you will be responsible for handling customer inquiries, resolving issues, and providing excellent service. This role is perfect for individuals looking to start their career in the BPO industry with a competitive salary and growth opportunities.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold ">
                                Key Responsibilities
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Handle inbound and outbound customer calls professionally and efficiently.
                                </li>
                                <li>
                                    Address customer inquiries and provide accurate information.
                                </li>
                                <li>
                                    Resolve customer issues and complaints promptly and effectively.
                                </li>
                                <li>
                                    Maintain customer records and update information as required.
                                </li>
                                <li>
                                    Collaborate with team members to improve overall customer satisfaction.
                                </li>
                                <li>
                                    Meet or exceed performance targets and quality standards.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">
                                Qualifications
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Recent graduates or final-year students in any discipline.
                                </li>
                                <li>
                                    Excellent communication skills in English (additional languages are a plus).
                                </li>
                                <li>
                                    Strong problem-solving abilities and attention to detail.
                                </li>
                                <li>
                                    Ability to work in a fast-paced environment and handle multiple tasks.
                                </li>
                                <li>
                                    Basic computer skills and familiarity with CRM systems.
                                </li>
                                <li>
                                    Positive attitude and willingness to learn.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Benefits</h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Competitive Salary: ₹2.8 LPA.
                                </li>
                                <li>
                                    Training: Comprehensive training to equip you with the skills needed for success.
                                </li>
                                <li>
                                    Career Growth: Opportunities for career advancement and skill development.
                                </li>
                                <li>
                                    Work Environment: Supportive and dynamic work environment.
                                </li>
                                <li>
                                    Employee Benefits: Health insurance, paid time off, and more.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">How to Apply</h3>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                Submit your resume and a brief cover letter to{" "}
                                <a
                                    href="mailto:hr@fucturicatechnologies.com"
                                    className="text-blue-500 underline"
                                >
                                    hr@fucturicatechnologies.com
                                </a>{" "}
                                with the subject line "Fresher Intern Application."
                            </p>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                Fucturica Technologies is an equal opportunity employer. Join us and
                                be part of a dynamic team dedicated to accuracy and efficiency.
                            </p>
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

export default BpoFresher