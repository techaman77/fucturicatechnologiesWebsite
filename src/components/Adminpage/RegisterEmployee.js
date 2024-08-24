import React, { useState } from 'react';
import axios from 'axios';

const RegisterEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const formData = {
            name,
            email,
            password,
        };

        try {
            const response = await axios.post('https://futurica-backend.vercel.app/register', formData);
            console.log('Employee created successfully:', response.data);
            setSuccess('Employee created successfully!');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            // Clear the error message if any
            setError('');
        } catch (error) {
            console.error('Error creating employee:', error);
            setError('There was an error creating the employee.');
        }finally {
            setIsSubmitting(false); // Stop loader
          }
    };

    return (
        <div className='w-full flex h-[650px] justify-center'>
            <div className='w-[90%] flex'>
                <div className='w-[50%] flex flex-col justify-center items-center'>
                    <h2 className='text-[#666666] text-[48px] font-semibold'>
                        Create <span className='text-[#FB861E]'>New Employee</span>
                    </h2>
                    <p className='text-[#666666] font-light text-[20px] text-center'>
                        Fill in the details below to create a new employee
                    </p>
                </div>
                <div className='w-[50%] flex justify-center items-center rounded-xl shadow-lg bg-[#fff] my-10'>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[60%] gap-5 py-10">
                        <input
                            placeholder="Username"
                            type="text"
                            className="bg-transparent border-2 border-[#666666] rounded-lg p-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="Email Id"
                            type="email"
                            className="bg-transparent border-2 border-[#666666] rounded-lg p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="bg-transparent border-2 border-[#666666] rounded-lg p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            placeholder="Confirm Password"
                            type="password"
                            className="bg-transparent border-2 border-[#666666] rounded-lg p-2"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                        <button type="submit" className="mt-4 bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-white p-2 rounded-lg" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterEmployee;
