import React from 'react';
import img from './assets/m1.svg'
const Mission = () => {
    return (
        <div className="w-full flex justify-center py-10 font-Montserrat">
            <div className="w-[90%] flex items-center max-md:flex-col justify-evenly">
                <div className="text-left">
                    <h2 className="text-[44px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] text-[#FB861E] font-semibold mb-4"><span className='text-[#666666]'>Our</span> Mission</h2>
                    <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-light text-[#666666]">At Fucturica Technologies, we innovate to empower businesses, providing transformative technology solutions that drive success and foster lasting growth.</p>
                </div>
                <img src={img} alt='mission' className='max-xl:w-[350px] max-lg:w-[250px]'/>
                <div className=" text-right">
                    <h2 className="text-[44px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] text-[#FB861E] font-semibold mb-4"><span className='text-[#666666]'>Our</span> Vision</h2>
                    <p className="text-[20px] max-xl:text-[18px] max-lg:text-[16px] font-light text-[#666666]">Our vision is to shape the future of business by leading with innovation and integrity, creating a connected and efficient world where technology and human potential thrive together.</p>
                </div>
            </div>
        </div>
    );
}

export default Mission;
