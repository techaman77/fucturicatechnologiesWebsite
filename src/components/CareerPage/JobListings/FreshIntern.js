import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon1 from './assets/j1.png';
import icon2 from './assets/j2.png';
import ApplyForm from './ApplyForm';
const FreshIntern = () => {
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
                    <h2 className='font-semibold text-[44px] max-xl:text-[35px] max-lg:text-[28px]'>Fresher Intern</h2>
                    {/* <div className='font-semibold text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px]'>
                        <h2 className=' flex items-center gap-4 max-sm:gap-2'><span><img src={icon1} alt='icon1' /></span>Location : <span className='font-light'>Remote</span></h2>
                        <h2 className=' flex items-center gap-4 max-sm:gap-2'><span><img src={icon1} alt='icon1' /></span>Type : <span className='font-light'>Internship (3 Months) with potential full-time opportunity</span></h2>
                        <h2 className=' flex items-center gap-4 max-sm:gap-2'><span><img src={icon2} alt='icon1' /></span>Experience : <span className='font-light'>Freshers, Graduates</span></h2>
                    </div> */}
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
                            <p className='font-light'>Freshers, Graduates</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Job Description</h3>
                            <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px]">
                                We are seeking motivated and enthusiastic freshers to join our
                                team as interns. During the 3-month training and internship period,
                                you will work on live projects, gain hands-on experience, and
                                develop your skills under the guidance of experienced professionals.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold ">
                                Key Responsibilities
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Participate in comprehensive training sessions covering various
                                    aspects of IT and software development.
                                </li>
                                <li>
                                    Collaborate with team members on live projects to apply
                                    theoretical knowledge in practical scenarios.
                                </li>
                                <li>
                                    Assist in coding, testing, debugging, and documentation of
                                    software applications.
                                </li>
                                <li>
                                    Contribute to the development and implementation of new features
                                    and functionalities.
                                </li>
                                <li>
                                    Engage in continuous learning and skill enhancement activities.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">
                                Qualifications
                            </h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    Recent graduates or final-year students in Computer Science,
                                    Information Technology, or related fields.
                                </li>
                                <li>
                                    Basic understanding of programming languages such as Java,
                                    Python, C++, or similar.
                                </li>
                                <li>
                                    Strong problem-solving skills and a keen interest in technology.
                                </li>
                                <li>
                                    Excellent communication and teamwork abilities.
                                </li>
                                <li>
                                    Eagerness to learn and adapt to new technologies and
                                    methodologies.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px] font-semibold">Benefits</h3>
                            <ul className="list-disc text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-sm:text-[14px] list-inside space-y-2">
                                <li>
                                    <strong>3-Month Training and Internship:</strong> Gain practical
                                    experience and industry knowledge.
                                </li>
                                <li>
                                    <strong>Stipend:</strong> Receive a competitive stipend during
                                    the internship period.
                                </li>
                                <li>
                                    <strong>On Live Projects:</strong> Work on real-world projects
                                    and enhance your technical skills.
                                </li>
                                <li>
                                    <strong>On-Roll Job Offer:</strong> Opportunity to secure a
                                    full-time position with a salary range of ₹3.6 LPA to ₹4.5 LPA
                                    based on performance after the internship.
                                </li>
                                <li>
                                    <strong>Welcome Kit:</strong> Receive a comprehensive kit with
                                    necessary tools and resources to kickstart your journey with us.
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

export default FreshIntern