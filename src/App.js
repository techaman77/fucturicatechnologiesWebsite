import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from "./components/Homepage/homepage"

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
