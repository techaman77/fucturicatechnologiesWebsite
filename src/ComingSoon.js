// src/ComingSoon.js
import React from 'react';
import './ComingSoon.css';
import { useSpring, animated } from 'react-spring';

const ComingSoon = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000 },
  });

  return (
    <div className="coming-soon-container">
      <animated.div style={fade}>
        <h1 className="coming-soon-text">Coming Soon</h1>
      </animated.div>
    </div>
  );
};

export default ComingSoon;
