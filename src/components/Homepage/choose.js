import React from 'react';
import laptopImage from './assets/laptop.svg';

const Choose = () => {
    return (
        <div className="w-full flex justify-center py-24 bg-white font-Montserrat">
            <div className="w-[90%] flex flex-col items-center">
                <h2 className="text-[48px] text-center mb-6">Why Choose Us?</h2>
                <p className="text-[20px] text-center mb-12">Lorem ipsum dolor sit amet consectetur. Neque gravida purus proin sagittis sem tellus cras consectetur pellentesque.</p>
                <div className="flex w-full justify-between max-md:flex-col">
                    <img src={laptopImage} alt="Laptop" className="w-[45%] h-auto rounded-[33.33px] max-md:mb-8" />
                    <div className="flex flex-col justify-between w-[45%] space-y-6 max-md:w-full max-md:space-y-4">
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                            <h3 className="text-[30px] mb-4">Innovative Approach</h3>
                            <p className="text-[20px]">Focus on practical, real-world skills and continuous learning.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                            <h3 className="text-[30px] mb-4">Experienced Team</h3>
                            <p className="text-[20px]">Learn from industry veterans dedicated to providing the best learning experience.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                            <h3 className="text-[30px] mb-4">Cutting-Edge Curriculum</h3>
                            <p className="text-[20px]">Programs that are up-to-date with the latest trends and technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;
