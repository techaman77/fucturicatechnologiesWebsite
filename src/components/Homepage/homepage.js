import React from 'react';
import Welcome from './welcome';
import Mission from './Mission';
import Choose from './choose';


const Homepage = () => {
    return (
        <div>
            <Welcome />
            <Mission />
            <Choose />
        </div>
    );
}

export default Homepage;
