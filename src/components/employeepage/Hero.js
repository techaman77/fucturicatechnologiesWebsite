import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'; // Import axios
import './hero.css';

const Employee = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [count, setCount] = useState('0');
    const id = useSelector((state) => state.auth.userId);
    const [formData, setFormData] = useState({
        employeeId: id,
        name: '',
        contactNumber: '',
        motherName: '',
        fatherName: '',
        dateOfBirth: '',
        maritalStatus: '',
        permanentAddress: '',
        qualification: '',
        extraQualifications: [],  // Changed to array
        experience: '',
        roleResponsibilities: '',
        skills: []  // Changed to array
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

    const handleOptionClick = (name, value) => {
        setFormData(prevData => {
            let updatedValue;
            if (Array.isArray(prevData[name])) {
                updatedValue = prevData[name].includes(value)
                    ? prevData[name].filter(v => v !== value)
                    : [...prevData[name], value];
            } else {
                updatedValue = value;
            }
            return { ...prevData, [name]: updatedValue };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Check if all fields are filled
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
            setCount(response.data.count); // Update the count state variable
            setFormData({
                employeeId: id,
                name: '',
                contactNumber: '',
                motherName: '',
                fatherName: '',
                dateOfBirth: '',
                maritalStatus: '',
                permanentAddress: '',
                qualification: '',
                extraQualifications: [],  // Reset array
                experience: '',
                roleResponsibilities: '',
                skills: []  // Reset array
            });
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className='w-full flex justify-center py-10'>
                <div className='w-[90%] flex flex-col items-center'>
                    <div>
                        <h2 className='text-[#666666] text-[48px] font-semibold'>
                            Form <span className='text-[#FB861E]'>Submission Metrics</span>
                        </h2>
                        <div className='flex justify-center gap-10 py-5 text-[20px] text-[#666666]'>
                            <div className='flex flex-col items-center'>
                                <p className='opacity-[0.6]'>Forms Submitted</p>
                                <p>{count}/1500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='opacity-[0.6]'>Countdown Timer</p>
                                <p>12:34:40</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-[#016DE2] w-full pb-10'></div>
                    <div>
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
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="Enter your contact number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="motherName"
                                placeholder="Enter mother's name"
                                value={formData.motherName}
                                onChange={handleChange}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="fatherName"
                                placeholder="Enter father's name"
                                value={formData.fatherName}
                                onChange={handleChange}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                placeholder="Enter your date of birth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="maritalStatus"
                                placeholder="Enter your marital status"
                                value={formData.maritalStatus}
                                onChange={handleChange}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="permanentAddress"
                                placeholder="Enter your permanent address"
                                value={formData.permanentAddress}
                                onChange={handleChange}
                                className='bg-transparent col-span-2 border border-[#666666] rounded-lg p-4'
                            />
                            <div className='flex gap-5 items-center'>
                                <label>Qualification:</label>
                                <div
                                    className={`option ${formData.qualification === '10' ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('qualification', '10')}
                                >
                                    10th
                                </div>
                                <div
                                    className={`option ${formData.qualification === '12' ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('qualification', '12')}
                                >
                                    12th
                                </div>
                                <div
                                    className={`option ${formData.qualification === 'Graduation' ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('qualification', 'Graduation')}
                                >
                                    Graduation
                                </div>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <label>Extra Qualifications:</label>
                                <div
                                    className={`option ${formData.extraQualifications.includes('None') ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('extraQualifications', 'None')}
                                >
                                    None
                                </div>
                                <div
                                    className={`option ${formData.extraQualifications.includes('Certification') ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('extraQualifications', 'Certification')}
                                >
                                    Certification
                                </div>
                                <div
                                    className={`option ${formData.extraQualifications.includes('Diploma') ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('extraQualifications', 'Diploma')}
                                >
                                    Diploma
                                </div>
                            </div>

                            <div className='flex col-span-2 gap-5 items-center'>
                                <label>Experience:</label>
                                <div
                                    className={`option ${formData.experience === 'Fresher' ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('experience', 'Fresher')}
                                >
                                    Fresher
                                </div>
                                <div
                                    className={`option ${formData.experience === 'Experienced' ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick('experience', 'Experienced')}
                                >
                                    Experienced
                                </div>
                            </div>
                            <input
                                type="text"
                                name="roleResponsibilities"
                                placeholder="Enter your role and responsibilities"
                                value={formData.roleResponsibilities}
                                onChange={handleChange}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <input
                                type="text"
                                name="skills"
                                placeholder="Enter your skills (comma-separated)"
                                value={formData.skills.join(', ')}
                                onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',').map(skill => skill.trim()) })}
                                className='bg-transparent border border-[#666666] rounded-lg p-4'
                            />
                            <button type="submit" className='mx-20 bg-gradient-to-r from-[#007BFF] text-xl to-[#0056B3] text-white p-2 rounded-xl col-span-2'>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee;
