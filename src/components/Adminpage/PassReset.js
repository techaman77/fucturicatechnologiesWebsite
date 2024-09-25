import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import img from './assets/up.svg'

const PassReset = () => {
    const userId = useSelector((state) => state.auth.userId);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess('');

        if (newPassword !== confirmNewPassword) {
            setError('New passwords do not match.');
            setIsSubmitting(false);
            return;
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please login to access this page');
                setIsSubmitting(false);
                return;
            }
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/updatePassword`, {
                userId,
                currentPassword,
                newPassword,
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });

            setSuccess(res.data.msg);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            navigate('/admin-panel');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.msg);
            } else {
                setError('An error occurred while updating the password.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full flex justify-center py-40">
            <Link to='/admin-panel' className='absolute top-5 left-20'><p className='text-[20px] text-[#666666] font-semibold flex items-center gap-4'><FaArrowLeftLong /> Go back</p></Link>
            <div className="w-[50%] h-[50%] bg-[#fff] flex flex-row-reverse justify-center gap-10 shadow-2xl rounded-[30px] p-8">
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className='text-[#666666] font-semibold text-[24px]'>
                        Update Your <span className='text-[#FB861E]'>Password</span>
                    </h2>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    {success && <div className="text-green-500 mb-4">{success}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter current password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full p-2 border rounded-xl"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 border rounded-xl"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                className="w-full p-2 border rounded-xl"
                            />
                        </div>
                        <div>
                            <button type="submit" className="mt-4 w-full bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-white p-2 rounded-lg" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
                <img src={img} alt='update' className='w-[300px]' />
            </div>
        </div>
    );
};

export default PassReset;
