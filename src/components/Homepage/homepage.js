import React from 'react';
import Welcome from './welcome';
import Mission from './Mission';
import Choose from './choose';
import Featured from './Featured';
import ReviewSlider from './Success';
import Blogs from './Blogs';
import GetTouch from './GetTouch';

const Homepage = () => {
    return (
        <div>
            <Welcome />
            <Mission />
            <Choose />
            <Featured/>
            <ReviewSlider/>
            <Blogs/>
            <GetTouch/>
        </div>
    );
}

export default Homepage;
