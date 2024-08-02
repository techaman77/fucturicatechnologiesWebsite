import React from 'react';
import Welcome from './welcome';
import Mission from './Mission';
import Choose from './choose';
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
        </div>
    );
}

export default Homepage;
