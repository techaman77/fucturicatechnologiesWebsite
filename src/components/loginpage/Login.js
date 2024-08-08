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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loader
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
      if (data.user.role === 'admin') {
        navigate('/admin-panel');
      } else{
        navigate('/employee-panel');
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false); // Stop loader
    }
  };

  return (
    <>
      <div className="w-full flex h-[700px] font-montserrat">
        <div className="w-[50%] h-full bgimage"></div>
        <div className="flex w-[50%] flex-col justify-center items-center">
          <h2 className="text-[50px] text-gradient font-semibold tracking-wide">WELCOME</h2>
          <p className="text-[#666666] text-[18px] text-center">Login with Email</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-10">
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
            <button type="submit" className="mt-4 bg-gradient-to-r from-[#007BFF] to-[#0056B3] text-white p-2 rounded-lg" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;