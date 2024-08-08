import React from 'react';
import img1 from './assets/t1.svg';
import img2 from './assets/t2.svg';
import img3 from './assets/t3.svg';
import img4 from './assets/t4.svg';
import linked from './assets/l.svg';
import mail from './assets/m.svg';
import { Link } from 'react-router-dom';

const teamMembers = [
    { img: img1, name: 'Shruti Dixit', role: 'UI/UX Designer' },
    { img: img2, name: 'Janvi Desai', role: 'Fresher Intern' },
    { img: img3, name: 'Yash Jain', role: 'Web Developer' },
    { img: img4, name: 'Rhivti Shah', role: 'Digital Marketing' },
];

const Team = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[90%] flex flex-col items-center'>
                <h2 className='text-[#666666] text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] font-semibold text-center'>
                    Our <span className='text-[#FB861E]'>Team</span>
                </h2>
                <p className='text-[#666666] font-light text-[24px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px]'>
                    Meet the Fucturica Technologies.
                </p>
                <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 py-10 gap-10'>
                    {teamMembers.map((member, index) => (
                        <div key={index} className='flex flex-col justify-between relative group'>
                            <img src={member.img} alt={`team${index + 1}`} className='m-auto'/>
                            <h2 className='text-[#666666] font-medium text-[20px] max-md:text-[16px] text-center'>
                                {member.name}<br/>
                                <span className='font-light text-[16px] max-md:text-[14px]'>{member.role}</span>
                            </h2>
                            <Link href='#' className='absolute -top-10 -right-10 opacity-0 group-hover:opacity-100 group-hover:top-0 group-hover:right-12 max-sm:group-hover:right-8 transition-all duration-500'><img src={linked} alt='linkedIn' className='w-10 max-sm:w-7'/></Link>
                            <Link href='#' className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-1000'><img src={mail} alt='mail' className='w-10 max-sm:w-7' /></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
