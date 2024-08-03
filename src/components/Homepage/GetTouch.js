import React from 'react'
import './story.css'
const GetTouch = () => {
    return (
        <div className='w-full flex justify-center getbg relative'>
            <div className='w-[90%] py-20 flex justify-evenly z-10'>
                <div>
                    <h2 className='text-[#fff] text-[48px] font-semibold'>Get In <span className='text-[#FB861E]'>Touch</span></h2>
                    <p className='text-[#fff] text-[24px] font-normal'>We'd love to hear from you!<br />
                        Fill out the form below for any inquiries.</p>
                </div>
                <div className='border border-[#FFFFFF] rounded-[30px] p-10 w-[400px]'>
                    <form className="space-y-6 text-[#FFFFFF] font-light">
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="First_Name Last_Name"
                                className="mt-1 p-2 w-full bg-transparent rounded-md border border-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                placeholder="abc123@gmail.com"
                                className="mt-1 p-2 w-full bg-transparent rounded-md border border-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Select Your Course</label>
                            <input
                                type="text"
                                placeholder=""
                                className="mt-1 p-2 w-full bg-transparent rounded-md border border-gray-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Your Message</label>
                            <textarea
                                placeholder=""
                                className="mt-1 p-2 w-full bg-transparent rounded-md border border-gray-300"
                            />
                        </div>
                        <div className='border border-[#FFFFFF] bg-transparent hover:bg-indigo-700 p-2 rounded-md'>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 rounded-md focus:ring-indigo-500 focus:ring-offset-indigo-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetTouch