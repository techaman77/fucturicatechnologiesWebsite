
import React from 'react';
import innovative from './assets/innovative.svg';
import growth from './assets/growth.svg';
import environment from './assets/environment.svg';
import work from './assets/work.svg';

const Middle = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">Why Work With Us?</h2>
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
          <img src={innovative} alt="Innovative Projects" className="w-[61px] h-[61px]" />
          <h3 className="text-xl font-semibold mt-4">Innovative Projects</h3>
          <p className="text-gray-600 mt-2">Be part of groundbreaking projects that push the boundaries of technology and innovation.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
          <img src={growth} alt="Professional Growth" className="w-[55px] h-[55px]" />
          <h3 className="text-xl font-semibold mt-4">Professional Growth</h3>
          <p className="text-gray-600 mt-2">Access continuous learning opportunities, mentorship programs, and career advancement paths.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
          <img src={environment} alt="Collaborative Environment" className="w-[55px] h-[55px]" />
          <h3 className="text-xl font-semibold mt-4">Collaborative Environment</h3>
          <p className="text-gray-600 mt-2">Work in a supportive and inclusive environment where your ideas are valued and collaboration is key.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
          <img src={work} alt="Work-Life Balance" className="w-[55px] h-[55px]" />
          <h3 className="text-xl font-semibold mt-4">Work-Life Balance</h3>
          <p className="text-gray-600 mt-2">Enjoy flexible working hours, remote work options, and a healthy work-life balance.</p>
        </div>
      </div>
    </section>
  );
};

export default Middle;
