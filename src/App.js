import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Homepage from "./components/Homepage/homepage"
import Layout from './Layout';

import Login from './components/loginpage/Login';
import Hero from './components/Adminpage/Hero';
import { useSelector } from 'react-redux';
import Employee from './components/employeepage/Hero';
import About from './components/AboutUsPage/Hero';
import Service from './components/ServicePage/Hero';
import Training from './components/TrainingPage/Hero';
import BpoHiring from './components/TrainingPage/ModulePage/BpoHiring';
import ITHiring from './components/TrainingPage/ModulePage/ItHiring';
import Jobinterview from './components/TrainingPage/ModulePage/JobInterview';
import Softskill from './components/TrainingPage/ModulePage/Softskill';
import TechnicalSkill from './components/TrainingPage/ModulePage/TechnicalSkill';

const ProtectedRoute = ({ element }) => {
  const role = useSelector((state) => state.auth.role);

  return role === "admin" ? element : <Navigate to="/" />;
};
const ProtectedRoute1 = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
  return (
    
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/admin-login" element={<Login/>}/>
          <Route path='/admin-panel' element={<ProtectedRoute element={<Hero/>}/>}/>
          <Route path='/employee-panel' element={<ProtectedRoute1 element={<Employee/>}/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/training/bpo-hiring' element={<BpoHiring/>}/>
          <Route path='/training/it-hiring' element={<ITHiring/>}/>
          <Route path='/training/job-interview' element={<Jobinterview/>}/>
          <Route path='/training/Soft-skill' element={<Softskill/>}/>
          <Route path='/training/technical' element={<TechnicalSkill/>}/>
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
