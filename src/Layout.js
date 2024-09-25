// Layout.js
import React, { useCallback, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { logout } from '../src/store/auth';

const Layout = ({ children }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);

  const handleTabClose = useCallback(async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      await axios.post(`${process.env.REACT_APP_API_URL}/logout`, { userId },
        { 
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         }
        });

      dispatch(logout());
      localStorage.removeItem('token');

      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, [dispatch, navigate, userId]);

  useEffect(() => {
    //Tab close
    window.addEventListener("beforeunload", handleTabClose);
    //Back button
    window.addEventListener('popstate', handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);

      window.removeEventListener('popstate', handleTabClose);
    };
  }, [handleTabClose]);

  return (
    <div>
      <Navbar />
      <main className=''>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
