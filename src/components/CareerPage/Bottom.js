import React from 'react';
import { Link } from 'react-router-dom';

const openings = [
  {
    title: 'Web Development Intern',
    type: 'Freshers, Graduates',
    skills: 'HTML, CSS, and JavaScript',
    employmentType: 'Remote',
    link: '/career/web-dev-intern'
  },
  {
    title: 'Fresher Intern',
    type: 'Internship (3 Months)',
    skills: 'IT and software development',
    employmentType: 'Remote',
    link: '/career/fresher-intern'
  },
  {
    title: 'UI/UX Designer',
    type: 'Internship with full-time opportunity',
    skills: 'Sketch, Figma, Adobe XD, or similar',
    employmentType: 'Remote',
    link: '/career/ui-ux-developer'
  },
  {
    title: 'React.js Developer',
    type: 'Full-Time',
    skills: 'React.js, RESTful APIs',
    employmentType: 'Remote',
    link: '/career/reactjs-developer'
  },
  {
    title: 'BPO Fresher',
    type: 'Full-Time',
    skills: 'Handle inbound and outbound customer calls professionally and efficiently',
    employmentType: 'Remote',
    link: '/career/bpo-fresher'
  },
  {
    title: 'React Native Developer',
    type: 'Part-Time/Full-Time',
    skills: 'React Native, mobile app development lifecycle, XCode, Android Studio',
    employmentType: 'Remote',
    link: '/career/react-native-developer'
  },
  {
    title: 'Resume Form Filling Specialist',
    type: 'Part-Time/Full-Time',
    skills: 'MS Office, data entry experience',
    employmentType: 'Remote',
    link: '/career/resume-filling'
  },
];

const Bottom = () => {
  return (
    <div className='w-full flex justify-center py-10 max-sm:py-5'>
      <div className="w-[90%]">
        <h2 className="text-[48px] text-center max-xl:text-[35px] max-lg:text-[28px] max-md:text-[24px] font-semibold text-[#666666]">Current <span className='text-[#FB861E]'>Openings</span></h2>
        <h3 className='text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] text-center font-semibold text-[#666666] '>We develop high-performance applications that are not only functional but also provide an exceptional user experience.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {openings.map((opening, index) => (
            <div key={index} className="p-6 bg-white hover:shadow-2xl flex flex-col gap-3 rounded-[30px]">
              <h3 className="text-xl font-semibold text-gray-800">{opening.title}</h3>
              <p className="text-gray-600 mt-2">Employment Type: {opening.type}</p>
              <p className="text-gray-600 mt-1">Skills: {opening.skills}</p>
              <p className="text-gray-600 mt-1">{opening.employmentType}</p>
              <Link to={`${opening.link}`}><button className="text-[#007BFF] hover:text-[#fff] py-2 px-8 border-2 border-[#007BFF] rounded-[30px] hover:bg-[#007BFF]">Apply</button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
