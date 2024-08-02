import React from 'react';
import Welcome from './welcome';
import Mission from './Mission';
import Choose from './choose';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/footer';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Welcome />
            <Mission />
            <Choose />
            <Footer/>
        </div>
    );
}

export default Homepage;
