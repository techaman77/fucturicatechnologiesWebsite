import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './hero.css';
import { addCount, addSessionCount, removeCount, removeSessionCount } from '../../store/forms';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from '../../store/auth';
const Employee = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sessionCount, setSessionCount] = useState(() => {
        // Initialize sessionCount from localStorage, or default to 0 if not available
        const storedCount = localStorage.getItem('totalCount');
        return storedCount ? parseInt(storedCount, 10) : 0;
    });
    const count = useSelector((state) => state.form.count);
    const id = useSelector((state) => state.auth.userId);
    useEffect(() => {
        localStorage.setItem('totalCount', sessionCount);
        dispatch(addSessionCount(sessionCount))
        console.log('useEffect block',sessionCount)
    }, [sessionCount, dispatch]);

    const totalCount = useSelector((state) => state.form.sessionCount)




    const [timeLeft, setTimeLeft] = useState(() => {
        // Restore timeLeft from localStorage, or default to 24 hours if not available
        const savedTime = localStorage.getItem('timeLeft');
        return savedTime ? parseInt(savedTime, 10) : 1500 * 60 * 60;
    });

    const timerRef = useRef(null);

    // Memoized function to stop the timer
    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const userId = useSelector((state) => state.auth.userId);

    // Memoized function to handle logout
    const handleEmployeeLogout = useCallback(async () => {
        try {
            stopTimer();
            await axios.post('https://futurica-backend.vercel.app/logout', { userId });

            dispatch(logout());
            navigate('/admin-login');

        } catch (error) {
            console.error('Logout failed:', error);
        }
    }, [stopTimer, dispatch, navigate, userId]);

    // Memoized function to start the timer
    const startTimer = useCallback(() => {
        if (timerRef.current) return; // Prevent multiple timers

        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current);
                    timerRef.current = null;

                    // Safely reset session count only after stopping the timer
                    setSessionCount(0);
                    dispatch(removeCount());
                    dispatch(removeSessionCount());
                    handleEmployeeLogout();
                    localStorage.removeItem('timeLeft');
                    localStorage.removeItem('count');
                    localStorage.removeItem('totalCount');

                    return 0;
                }

                const newTime = prevTime - 1;
                localStorage.setItem('timeLeft', newTime); // Save the new timeLeft to localStorage
                return newTime;
            });
        }, 1000);
    }, [handleEmployeeLogout, dispatch]);

    useEffect(() => {
        startTimer();

        return () => {
            stopTimer(); // Clean up on unmount
        };
    }, [startTimer, stopTimer]);

    useEffect(() => {
        // Sync sessionCount with localStorage only when necessary
        localStorage.setItem('totalCount', sessionCount);
        dispatch(addSessionCount(sessionCount));
    }, [sessionCount, dispatch]);

    // Function to format time left
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };


    const [formData, setFormData] = useState({
        employeeId: id,
        name: '',
        contactNumber: '',
        email: '',
        languages: [],
        profile: '',
        motherName: '',
        fatherName: '',
        dateOfBirth: '',
        maritalStatus: '',
        permanentAddress: '',
        qualification: '',
        qualificationDetails: {
            10: '',
            12: '',
            Graduation: ''
        },  // Added qualification details state
        extraQualifications: '',
        extraQualificationsDetails: {
            Certification: '',
            Diploma: ''
        },
        experience: ['', '', ''],
        roleResponsibilities: '',
        softSkills: [],
        technicalSkills: [],
        linkedIn: ''
    });


    useEffect(() => {
        const dateInput = document.getElementById('dateOfBirth');

        dateInput.addEventListener('focus', handleFocus);
        dateInput.addEventListener('blur', handleBlur);

        return () => {
            dateInput.removeEventListener('focus', handleFocus);
            dateInput.removeEventListener('blur', handleBlur);
        };
    }, []);

    const handleFocus = (e) => {
        const target = e.target;
        if (target.type === 'text') {
            target.type = 'date';
        }
    };

    const handleBlur = (e) => {
        const target = e.target;
        if (target.value === '') {
            target.type = 'text';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleQualificationChange = (key, value) => {
        setFormData(prevData => ({
            ...prevData,
            qualificationDetails: {
                ...prevData.qualificationDetails,
                [key]: value
            }
        }));
    };
    const handleExtraQualificationChange = (key, value) => {
        setFormData(prevData => ({
            ...prevData,
            extraQualificationsDetails: {
                ...prevData.extraQualificationsDetails,
                [key]: value
            }
        }));
    };
    const handleExperienceChange = (e, index) => {
        const { value } = e.target;
        setFormData((prevData) => {
            const newExperience = [...prevData.experience];
            newExperience[index] = value;
            return {
                ...prevData,
                experience: newExperience
            };
        });
    };


    const handleOptionClick = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const allFieldsFilled = Object.entries(formData).every(([key, value]) => {
            if (Array.isArray(value)) {
                return value.length > 0;
            }
            return value !== '';
        });

        if (!allFieldsFilled) {
            console.error('Error: All fields are required.');
            console.log('formData:', formData);
            setIsSubmitting(false);
            return;
        }
        console.log('formData:', formData);

        try {
            const response = await axios.post('https://futurica-backend.vercel.app/formData', formData);
            console.log('Success:', response.data);
            localStorage.setItem('count', response.data.count)
            dispatch(addCount(response.data.count));
            setSessionCount((prevCount) => prevCount + 1);

            setFormData({
                employeeId: id,
                name: '',
                contactNumber: '',
                profile: '',
                email: '',
                languages: [],
                motherName: '',
                fatherName: '',
                dateOfBirth: '',
                maritalStatus: '',
                permanentAddress: '',
                qualification: '',
                qualificationDetails: {
                    10: '',
                    12: '',
                    Graduation: ''
                },
                extraQualifications: '',
                extraQualificationsDetails: {
                    Certification: '',
                    Diploma: ''
                },
                experience: ['', '', ''],
                roleResponsibilities: '',
                softSkills: [],
                technicalSkills: [],
                linkedIn: ''
            });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const disableCopyPaste = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%] flex flex-col items-center'>
                    <div className='flex justify-end w-full'>
                        <button
                            onClick={handleEmployeeLogout}
                            className={`flex flex-col items-center text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-semibold text-[#666666]`}
                        >
                            <IoLogOutOutline className='text-[24px] max-xl:text-[20px] max-lg:text-[18px]' />
                            Log Out
                        </button>
                    </div>
                    <div>
                        <h2 className='text-[#666666] text-[48px] text-center font-semibold'>
                            Form <span className='text-[#FB861E]'>Submission Metrics</span>
                        </h2>
                        <div className='flex justify-center gap-10 py-5 text-[20px] text-[#666666]'>
                            <div className='flex flex-col items-center'>
                                <p className='opacity-[0.6]'>Forms Submitted in Session</p>
                                <p>{totalCount}/1500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='opacity-[0.6]'>Forms Submitted Today</p>
                                <p>{count || 0}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='opacity-[0.6]'>Countdown Timer</p>
                                <p>{formatTime(timeLeft)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-[#016DE2] w-full pb-10'></div>
                    <div className='w-[80%]'>
                        <h2 className='text-[#666666] text-[40px] text-center font-semibold'>
                            Resume <span className='text-[#FB861E]'>Details Form</span>
                        </h2>
                        <p className='text-[#fff] font-light text-[20px] text-center'>Please fill in the required details</p>
                        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-10'>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter First_Name Last_Name"
                                value={formData.name}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="Enter your contact number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="profile"
                                placeholder="Enter Profile/ Summary"
                                value={formData.profile}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent col-span-2 border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email Adress"
                                value={formData.email}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="languages"
                                placeholder="Enter Languages Known (comma-separated)"
                                value={formData.languages.join(', ')}
                                onChange={(e) => setFormData({ ...formData, languages: e.target.value.split(',').map(language => language.trim()) })}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="motherName"
                                placeholder="Enter mother's name"
                                value={formData.motherName}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="fatherName"
                                placeholder="Enter father's name"
                                value={formData.fatherName}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                placeholder="Enter your date of birth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="maritalStatus"
                                placeholder="Enter your marital status"
                                value={formData.maritalStatus}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="permanentAddress"
                                placeholder="Enter your permanent address"
                                value={formData.permanentAddress}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent col-span-2 border border-[#666666] rounded-lg p-4'
                            />

                            {/* Qualification Options */}
                            <div className='flex gap-5 items-center'>
                                <label>Qualification:</label>
                                <div
                                    className={`option ${formData.qualification === '10th' ? 'active' : ''}`}
                                    onClick={() => handleOptionClick('qualification', '10th')}
                                >
                                    10th
                                </div>
                                <div
                                    className={`option ${formData.qualification === '12th' ? 'active' : ''}`}
                                    onClick={() => handleOptionClick('qualification', '12th')}
                                >
                                    12th
                                </div>
                                <div
                                    className={`option ${formData.qualification === 'Graduation' ? 'active' : ''}`}
                                    onClick={() => handleOptionClick('qualification', 'Graduation')}
                                >
                                    Graduation
                                </div>
                            </div>

                            {/* Dynamic input fields */}
                            {formData.qualification && (
                                <>
                                    <input
                                        type="text"
                                        name="qualificationDetails.10"
                                        placeholder="Enter details for 10th"
                                        value={formData.qualificationDetails['10']}
                                        onChange={(e) => handleQualificationChange('10', e.target.value)}
                                        className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                    />
                                    {(formData.qualification === '12th' || formData.qualification === 'Graduation') && (
                                        <input
                                            type="text"
                                            name="qualificationDetails.12"
                                            placeholder="Enter details for 12th"
                                            value={formData.qualificationDetails['12']}
                                            onChange={(e) => handleQualificationChange('12', e.target.value)}
                                            className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                        />
                                    )}
                                    {formData.qualification === 'Graduation' && (
                                        <input
                                            type="text"
                                            name="qualificationDetails.Graduation"
                                            placeholder="Enter details for Graduation"
                                            value={formData.qualificationDetails['Graduation']}
                                            onChange={(e) => handleQualificationChange('Graduation', e.target.value)}
                                            className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                        />
                                    )}
                                </>
                            )}
                            {/* // JSX for Extra-Qualification Options */}
                            <div className='flex gap-5 items-center'>
                                <label>Extra Qualification:</label>
                                <div
                                    className={`option ${formData.extraQualifications === 'Certification' ? 'active' : ''}`}
                                    onClick={() => handleOptionClick('extraQualifications', 'Certification')}
                                >
                                    Certification
                                </div>
                                <div
                                    className={`option ${formData.extraQualifications === 'Diploma' ? 'active' : ''}`}
                                    onClick={() => handleOptionClick('extraQualifications', 'Diploma')}
                                >
                                    Diploma
                                </div>
                                <div
                                    className={`option ${formData.extraQualifications === 'Both' ? 'active' : ''}`}
                                    onClick={() => handleOptionClick('extraQualifications', 'Both')}
                                >
                                    Both
                                </div>
                            </div>

                            {/* // JSX for Dynamic Input Fields */}
                            {formData.extraQualifications === 'Certification' && (
                                <input
                                    type="text"
                                    name="extraQualificationsDetails.Certification"
                                    placeholder="Enter details for Certification"
                                    value={formData.extraQualificationsDetails['Certification']}
                                    onChange={(e) => handleExtraQualificationChange('Certification', e.target.value)}
                                    className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                />
                            )}
                            {formData.extraQualifications === 'Diploma' && (
                                <input
                                    type="text"
                                    name="extraQualificationsDetails.Diploma"
                                    placeholder="Enter details for Diploma"
                                    value={formData.extraQualificationsDetails['Diploma']}
                                    onChange={(e) => handleExtraQualificationChange('Diploma', e.target.value)}
                                    className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                />
                            )}
                            {formData.extraQualifications === 'Both' && (
                                <>
                                    <input
                                        type="text"
                                        name="extraQualificationsDetails.Certification"
                                        placeholder="Enter details for Certification"
                                        value={formData.extraQualificationsDetails['Certification']}
                                        onChange={(e) => handleExtraQualificationChange('Certification', e.target.value)}
                                        className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                    />
                                    <input
                                        type="text"
                                        name="extraQualificationsDetails.Diploma"
                                        placeholder="Enter details for Diploma"
                                        value={formData.extraQualificationsDetails['Diploma']}
                                        onChange={(e) => handleExtraQualificationChange('Diploma', e.target.value)}
                                        className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                    />
                                </>
                            )}
                            <div className='col-span-2 flex flex-col gap-5'>
                                <label>Experience:</label>
                                {[0, 1, 2].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        name={`experience${index}`}
                                        placeholder={`Enter your experience ${index + 1}`}
                                        value={formData.experience[index] || ''}
                                        onChange={(e) => handleExperienceChange(e, index)}
                                        onCopy={disableCopyPaste}
                                        onPaste={disableCopyPaste}
                                        onCut={disableCopyPaste}
                                        className='bg-transparent border border-[#666666] rounded-lg p-4 col-span-2'
                                    />
                                ))}
                            </div>

                            <input
                                type="text"
                                name="roleResponsibilities"
                                placeholder="Enter your role & responsibilities"
                                value={formData.roleResponsibilities}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent col-span-2 border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="softSkills"
                                placeholder="Enter your softSkills (comma-separated)"
                                value={formData.softSkills.join(', ')}
                                onChange={(e) => setFormData({ ...formData, softSkills: e.target.value.split(',').map(skill => skill.trim()) })}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="technicalSkills"
                                placeholder="Enter your technicalSkills (comma-separated)"
                                value={formData.technicalSkills.join(', ')}
                                onChange={(e) => setFormData({ ...formData, technicalSkills: e.target.value.split(',').map(techskill => techskill.trim()) })}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="linkedIn"
                                placeholder="Enter your linkedIn URL"
                                value={formData.linkedIn}
                                onChange={handleChange}
                                onCopy={disableCopyPaste}
                                onPaste={disableCopyPaste}
                                onCut={disableCopyPaste}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />

                            <div className='col-span-2 flex justify-center w-full'>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className=' bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-[#fff] py-3 px-6 rounded-[30px]'
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employee;
