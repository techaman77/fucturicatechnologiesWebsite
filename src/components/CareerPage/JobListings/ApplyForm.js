import React from 'react'
import { FaTimes } from 'react-icons/fa';
const ApplyForm = ({ onClose }) => {

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[50%] relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <FaTimes size={24} />
                </button>
                <form className="space-y-6 text-[#666666]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                            <input id="name" type="text" placeholder="Enter First_Name Last_Name" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="Enter Your Email" className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="resume">Upload resume</label>
                            <input id="resume" type="file" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2" htmlFor="portfolio">Add Links For Portfolios you have created</label>
                            <input id="portfolio" type="text" placeholder="Add portfolio link" className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2" htmlFor="coverLetter">Write cover letter</label>
                        <textarea id="coverLetter" placeholder="Write cover letter!" className="w-full p-2 border rounded"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ApplyForm