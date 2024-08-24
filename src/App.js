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
import FreshIntern from './components/CareerPage/JobListings/FreshIntern';
import BpoFresher from './components/CareerPage/JobListings/BpoFresher';
import ResumeFilling from './components/CareerPage/JobListings/ResumeFilling';
import UXDesigner from './components/CareerPage/JobListings/UXDesigner';
import ReactDev from './components/CareerPage/JobListings/ReactDev';
import ReactNativeDev from './components/CareerPage/JobListings/ReactNativeDev';
import Career from './components/CareerPage/Hero';
import WebDevIntern from './components/CareerPage/JobListings/WebDevIntern';
import ScrollToTop from './components/ScrollToTop';
import SelfDeclaration from './components/employeepage/SelfDeclaration';
import RegisterEmployee from './components/Adminpage/RegisterEmployee';

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
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/admin-panel' element={<ProtectedRoute element={<Hero/>}/>}/>
          <Route path='/register-employee' element={<RegisterEmployee/>}/>
          <Route path='/employee-panel' element={<ProtectedRoute1 element={<Employee/>}/>}/>
          <Route path='/self-declaration' element={<ProtectedRoute1 element={<SelfDeclaration/>}/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/career/fresher-intern' element={<FreshIntern/>}/>
          <Route path='/career/bpo-fresher' element={<BpoFresher/>}/>
          <Route path='/career/resume-filling' element={<ResumeFilling/>}/>
          <Route path='/career/ui-ux-developer' element={<UXDesigner/>}/>
          <Route path='/career/reactjs-developer' element={<ReactDev/>}/>
          <Route path='/career/react-native-developer' element={<ReactNativeDev/>}/>
          <Route path='/career/web-dev-intern' element={<WebDevIntern/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
