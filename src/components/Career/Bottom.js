import React from 'react';

const Bottom = [
  {
    title: 'Web Development Intern',
    type: 'Freshers, Graduates',
    skills: 'HTML, CSS, and JavaScript',
    employmentType: 'Remote',
  },
  {
    title: 'Fresher Intern',
    type: 'Internship (3 Months)',
    skills: 'IT and software development',
    employmentType: 'Remote',
  },
  {
    title: 'UI/UX Designer',
    type: 'Internship with full-time opportunity',
    skills: 'Sketch, Figma, Adobe XD, or similar',
    employmentType: 'Remote',
  },
  {
    title: 'React.js Developer',
    type: 'Full-Time',
    skills: 'React.js, RESTful APIs',
    employmentType: 'Remote',
  },
  {
    title: 'BPO Fresher',
    type: 'Full-Time',
    skills: 'Handle inbound and outbound customer calls professionally and efficiently',
    employmentType: 'Remote',
  },
  {
    title: 'React Native Developer',
    type: 'Part-Time/Full-Time',
    skills: 'React Native, mobile app development lifecycle, XCode, Android Studio',
    employmentType: 'Remote',
  },
  {
    title: 'Resume Form Filling Specialist',
    type: 'Part-Time/Full-Time',
    skills: 'MS Office, data entry experience',
    employmentType: 'Remote',
  },
];

const Openings = () => {
  return (
    <div className="mt-16 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Current Openings</h2>
      <h3 className='text-2xl font-semibold text-[#666666] '>We develop high-performance applications that are not only functional but also provide an exceptional user experience.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {open.map((opening, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">{opening.title}</h3>
            <p className="text-gray-600 mt-2">Employment Type: {opening.type}</p>
            <p className="text-gray-600 mt-1">Skills: {opening.skills}</p>
            <p className="text-gray-600 mt-1">{opening.employmentType}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
