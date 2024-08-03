import React from 'react';
import welcomeImage from './assets/welcome.svg';

const Welcome = () => {
    return (
        <div className="w-full flex justify-center py-10 max-md:py-5 overflow-x-hidden font-Montserrat">
            <div className="flex justify-between items-center w-[90%] max-md:flex-col">
                <div className="flex flex-col justify-center max-md:w-full">
                    <h1 className="text-[52px] max-xl:text-[40px] max-lg:text-[32px] max-sm:text-[24px] text-[#666666] font-bold tracking-tight leading-tight">
                        Welcome to
                    </h1>
                    <h1 className="text-[52px] max-xl:text-[40px] max-lg:text-[32px] max-sm:text-[24px] text-[#FB861E] font-bold tracking-tight leading-tight">
                        Fucturica Technologies
                    </h1>
                    <h2 className="text-[24px] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[18px] max-sm:text-[14px] text-[#666666] font-medium opacity-85 mt-4">
                        Transforming IT and BPO Training.
                    </h2>
                    <p className="text-[16px] max-xl:text-[14px] max-lg:text-[12px] max-md:text-[14px] max-sm:text-[12px] text-[#666666] font-medium opacity-85 mt-4">
                        Our mission is to bridge the gap between academia and <br/> industry through personalized, hands-on learning <br/> experiences.
                    </p>
                </div>
                <img src={welcomeImage} alt="Welcome" className="w-[504px] max-xl:w-[450px] max-lg:w-[320px]" />
            </div>
        </div>
    );
}

export default Welcome;
