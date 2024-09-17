import React from 'react'
import { useNavigate } from "react-router-dom";
import { blogPosts } from "./blogPosts";
import { MdOutlineArrowOutward } from "react-icons/md";

const Blogs = () => {
    const navigate = useNavigate();

    // Function to handle clicking on a blog post
    const handleBlogClick = (id) => {
        navigate(`/blog/${id}`); // Navigate to the blog detail page with the blog ID
    };

    return (
        <div className="w-full flex flex-col items-center py-20 max-sm:py-0">
            <div className="w-[90%]">
                <h2 className="text-[#666666] text-center text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] font-semibold">
                    Our Blog <span className="text-[#FB861E]">Posts</span>
                </h2>

                <div className="text-[#666666] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-20 py-10 mx-20 max-md:mx-10 max-sm:mx-0">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 cursor-pointer "
                            onClick={() => handleBlogClick(post.id)} // Pass the blog ID
                        >
                            <img
                                src={post.img}
                                alt="blog post"
                                className="w-full h-[200px] object-cover rounded-[30px] duration-300 hover:scale-110"
                            />
                            <div className="flex items-center gap-5">
                                <h2 className="text-[20px] max-xl:text-[16px] font-medium">
                                    {post.title}
                                </h2>
                                <MdOutlineArrowOutward className="text-[#FB861E] text-[44px] m-auto" />
                            </div>
                            <p className="font-normal text-[16px] max-xl:text-[14px]">
                                {post.description}
                            </p>
                            <div className="flex gap-5 max-xl:gap-2">
                                <button className="text-[#007BFF] max-xl:text-[14px] bg-[#007BFF] hover:text-[#fff] hover:bg-[#007BFF] bg-opacity-[0.1] rounded-[20px] py-1 px-4">
                                    Leadership
                                </button>
                                <button className="text-[#666666] max-xl:text-[14px] bg-[#666666] hover:text-[#fff] hover:bg-[#666666] bg-opacity-[0.1] rounded-[20px] py-1 px-4">
                                    Management
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Blogs;
