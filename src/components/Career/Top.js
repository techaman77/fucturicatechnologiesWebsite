import React from 'react';
import driveImage from './drive.jpg';

const Top = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          Join Our <span className="text-orange-500">Team</span> and <span className="text-orange-500">Drive Innovation</span>
        </h1>
        <p className="text-gray-700">
          At Futurica, we believe in the power of teamwork, creativity, and continuous learning. If you're passionate about technology, dedicated to excellence, and eager to make a difference, we want you on our team.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img src={driveImage} alt="Team working together" className="w-full h-auto max-w-md" />
      </div>
    </section>
  );
};

export default Top;
