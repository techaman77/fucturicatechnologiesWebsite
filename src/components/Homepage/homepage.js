import React from 'react';
import Welcome from './welcome';
import Mission from './Mission';
import Choose from './choose';
import Navbar from '../navbar/Navbar'

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Welcome />
            <Mission />
            <Choose />
        </div>
    );
}

export default Homepage;
