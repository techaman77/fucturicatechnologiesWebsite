import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Homepage from "./components/Homepage/homepage"
import Layout from './Layout';

import Login from './components/loginpage/Login';
import Hero from './components/Adminpage/Hero';
import { useSelector } from 'react-redux';
import Employee from './components/employeepage/Hero';

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
