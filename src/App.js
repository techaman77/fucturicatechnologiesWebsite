import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from "./components/Homepage/homepage"
import Layout from './Layout';

function App() {
  return (
    
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
