import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon1 from './assets/j1.png';
import icon2 from './assets/j2.png';
import icon3 from './assets/j3.png';
import ApplyForm from './ApplyForm';

const ResumeFilling = () => {
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
                    <h2 className='font-semibold text-[44px] max-xl:text-[35px] max-lg:text-[28px]'>Resume Form Filling Specialist</h2>
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
                            <p className='font-light'>Freshers, Graduates</p>
                        </div>
                        <div className='flex items-center text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] gap-3'>
                            <img src={icon3} alt='icon1' />
                            <h2 className='font-semibold'>Compensation :</h2>
                            <p className='font-light max-sm:w-[150px]'>Hourly/Per Form Completed</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Company Overview</h3>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                Fucturica Technologies provides innovative tech solutions and consulting services. We're growing and seeking detail-oriented individuals for remote resume form filling.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold ">
                                Key Responsibilities
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Extract data from resumes (personal details, education, experience, skills).
                                </li>
                                <li>
                                    Accurately fill online forms with the extracted information.
                                </li>
                                <li>
                                    Maintain data consistency and confidentiality.
                                </li>
                                <li>
                                    Meet productivity and accuracy targets.
                                </li>
                                <li>
                                    Communicate with team members to resolve issues.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">
                                Qualifications
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    High school diploma or equivalent.
                                </li>
                                <li>
                                    Experience in data entry or form filling preferred.
                                </li>
                                <li>
                                    Proficient in MS Office and online form systems.
                                </li>
                                <li>
                                    Excellent attention to detail and organizational skills.
                                </li>
                                <li>
                                    Ability to work independently and meet deadlines.
                                </li>
                                <li>
                                    Reliable internet and suitable home working environment.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">What We Offer</h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Flexible working hours (part-time/full-time).
                                </li>
                                <li>
                                    Competitive compensation.
                                </li>
                                <li>
                                    Remote work opportunity.
                                </li>
                                <li>
                                    Training and support.
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

export default ResumeFilling