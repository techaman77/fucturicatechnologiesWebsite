import React from 'react';
import laptopImage from './assets/laptop.svg';

const Choose = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto h-[777px] flex items-center justify-center overflow-x-hidden">
            <div className="w-full max-w-[1239px] h-[777px]">
                <h2 className="text-center text-[48px]">Why Choose Us?</h2>
                <p className="text-center text-[20px] font-Montserrat">Lorem ipsum dolor sit amet consectetur. Neque gravida purus proin sagittis sem tellus cras consectetur pellentesque.</p>
                <div className="flex mt-[60px]">
                    <img src={laptopImage} alt="Laptop" className="w-[610px] h-[407px] rounded-[33.33px]" />
                    <div className="w-[549px] h-[558px] flex flex-col justify-between ml-[20px]">
                        <div className="p-3 hover:bg-blue-500 hover:text-white">
                            <h3 className="text-[30px]">Innovative Approach</h3>
                            <p className="text-[20px]">Focus on practical, real-world skills and continuous learning.</p>
                        </div>
                        <div className="p-3 hover:bg-blue-500 hover:text-white">
                            <h3 className="text-[30px]">Experienced Team</h3>
                            <p className="text-[20px]">Learn from industry veterans dedicated to providing the best learning experience.</p>
                        </div>
                        <div className="p-3 hover:bg-blue-500 hover:text-white">
                            <h3 className="text-[30px]">Cutting-Edge Curriculum</h3>
                            <p className="text-[20px]">Programs that are up-to-date with the latest trends and technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;
