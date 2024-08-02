import React from 'react';
import Welcome from './welcome';
import Mission from './Mission';
import Choose from './choose';
import Footer from '../footer/footer';
import Featured from './Featured';
import ReviewSlider from './Success';

const Homepage = () => {
    return (
        <div>
            <Welcome />
            <Mission />
            <Choose />
            <Featured/>
            <ReviewSlider/>
            <Footer/>
        </div>
    );
}

export default Homepage;
