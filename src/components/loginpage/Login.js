import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { useForm } = require('react-hook-form');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loader
    setErrorMessage(''); // Clear previous error message

    try {
      const response = await axios.post('https://futurica-backend.vercel.app/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response.data;
      console.log(data);

      dispatch(login(data));
      localStorage.setItem('token', data.token);
      localStorage.setItem('name', data.user.name);
      localStorage.setItem('role', data.user.role);
      if (data.user.role) {
        // Role is present
        if (data.user.role === 'admin') {
          // Navigate to 'admin-panel' if role is 'admin'
          navigate('/admin-panel');
        }
      } else {
        // Role is not present
        if (data.user.selfDeclaration) {
          // Navigate to 'employee-panel' if selfDeclaration is true
          navigate('/employee-panel');
        } else {
          // Navigate to 'self-declaration' if selfDeclaration is false
          navigate('/self-declaration');
        }
      }
      
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error.response) {
        // Handle known API errors
        setErrorMessage(error.response.data.message || 'An error occurred');
      } else {
        // Handle unknown errors
        setErrorMessage('An unexpected error occurred');
      }
    } finally {
      setIsSubmitting(false); // Stop loader
    }
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row sm:flex-row min-h-screen font-montserrat">
        <div className="w-full md:w-1/2 h-64 md:h-screen bgimage bg-cover bg-center relative">
          <div className='logo absolute top-8 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-contain bg-no-repeat'></div>
        </div>
        <div className="flex w-full md:w-1/2 flex-col justify-center items-center p-4 md:p-8">
          <div className='absolute md:top-44 sm:top-36 right-0 md:w-40 sm:w-10 h-10 bg-contain bg-no-repeat plane-icon'></div>
          <h2 className="text-3xl md:text-5xl text-gradient font-semibold tracking-wide">WELCOME</h2>
          <p className="text-gray-600 text-base md:text-lg text-center mb-4">Login with Email</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md mx-auto items-center">
            <input
              placeholder="Email Id"
              type="email"
              className="bg-transparent border-2 border-gray-600 rounded-lg p-2 w-full max-w-xs email-icon"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              className="bg-transparent border-2 border-gray-600 rounded-lg p-2 w-full max-w-xs password-icon"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-lg w-full max-w-xs" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            {errorMessage && (
              <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
            )}

            <div className="flex w-full justify-end">
              <span className="px-3 text-gray-500 cursor-pointer">forgot password?</span>
            </div>

            <div className="flex items-center justify-center w-full mt-4">
              <hr className="w-full border-t border-gray-300" />
              <span className="px-3 text-gray-500">OR</span>
              <hr className="w-full border-t border-gray-300" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
