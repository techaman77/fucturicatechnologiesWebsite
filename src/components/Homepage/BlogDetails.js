import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogPosts";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();

  // Find the blog post by ID
  const blog = blogPosts.find((post) => post.id === parseInt(id));

  // Navigate back to the previous page
  const handleBackClick = () => {
    navigate("/blogs");
  };

  // If the blog is not found
  if (!blog) return <p>Blog not found</p>;

  // Filter out the current blog and pick three random blogs
  const relatedBlogs = blogPosts
    .filter((post) => post.id !== parseInt(id)) // Exclude current blog
    .slice(0, 3); // Pick the first 3 blogs (adjust as needed)

  return (
    <div className="w-full flex flex-col items-center py-20 max-sm:py-0">
      <div className="w-[90%]">
        <div className="py-10">
          {/* Blog Image */}
          <div className="relative w-full max-h-[500px] overflow-hidden mb-4 rounded-[30px]">
            <img
              src={blog.img}
              alt="blog post"
              className="w-full h-[50%] object-cover"
            />
          </div>

          {/* Back Button */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={handleBackClick}
              className="text-[#666666] flex items-center gap-2"
            >
              <IoIosArrowRoundBack className="text-2xl" />
              Blogs
            </button>
          </div>

          {/* Categories */}
          <div className="flex gap-5 mb-4">
            <button className="text-[#007BFF] bg-[#007BFF] bg-opacity-[0.1] hover:text-white hover:bg-[#007BFF] rounded-[20px] py-1 px-4">
              Leadership
            </button>
            <button className="text-[#666666] bg-[#666666] bg-opacity-[0.1] hover:text-white hover:bg-[#666666] rounded-[20px] py-1 px-4">
              Management
            </button>
          </div>
          <div class="flex flex-col-reverse md:flex-row gap-[26px]">
            <div class="flex-1">
              <h2 className="text-2xl font-semibold mb-2  text-gray">
                {blog.title}
              </h2>
              <p className="text-base text-gray-700 mb-4 font-semibold  text-gray">
                {blog.description}
              </p>

              {/* Blog Sections */}
              {blog.aboutBlog.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2  text-gray">
                    {section.section}
                  </h3>
                  <p className="text-base text-gray-600  text-gray font-Montserrat">
                    {section.content}
                  </p>
                  {section.subsections && (
                    <div className="mt-4 pl-4">
                      {section.subsections.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="mb-4 flex items-start gap-2"
                        >
                          <span className="text-lg font-medium font-Montserrat text-gray">
                            •
                          </span>
                          <div>
                            <h4 className="text-lg font-medium mb-1  font-Montserrat text-gray">
                              {sub.title}
                            </h4>
                            <p className="text-base text-gray-600 font-Montserrat text-gray">
                              {sub.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <div class="max-w-[300px] max-h-[300px] bg-gray-200 border border-gray-300 p-4 rounded-lg overflow-auto">
                <h3 class="text-medium font-semibold text-gray mb-4">
                  Latest Blogs
                </h3>
                <p className="text-small text-gray-700 mb-2">
                  Transforming Careers with BPO Training
                </p>
                <p className="text-small text-gray-700 mb-2">
                  The Role of Emerging Technologies in Shaping the Future of
                  Work
                </p>
                <p className="text-small text-gray-700 mb-2">
                  Why Communication Training is the Key to Career Success
                </p>
                <p className="text-small text-gray-700 mb-2">
                  Job Interview Preparation
                </p>
                <p className="text-small text-gray-700 mb-2">
                  Why Choose BPO Services?
                </p>
              </div>
              <div className="mt-5">
                <h3 class="text-medium font-semibold text-gray mb-4">
                  Share on Social Media
                </h3>
                <div class="flex gap-4 p-4">
                  <div class="w-12 h-12 border-2 border-gray shadow-md flex items-center justify-center rounded-full shadow-md">
                    <FaFacebookF className="text-gray" />
                  </div>
                  <div class="w-12 h-12 border-2 border-gray shadow-md flex items-center justify-center rounded-full shadow-md">
                    <FaInstagram className="text-gray" />
                  </div>{" "}
                  <div class="w-12 h-12 border-2 border-gray shadow-md flex items-center justify-center rounded-full shadow-md">
                    <RiTwitterXLine className="text-gray" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          {/* Related Blogs Section */}
          <div className="mt-10">
            <h2 className="text-[#666666] text-start text-[38px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] font-semibold">
              Related <span className="text-[#FB861E]">Blogs</span>
            </h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 mt-5">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="flex flex-col gap-3 cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedBlog.id}`)} // Navigate to the clicked blog's detail page
                >
                  <img
                    src={relatedBlog.img}
                    alt="related blog post"
                    className="w-full h-[200px] object-cover rounded-[30px] duration-300 hover:scale-110 "
                  />
                  <div className="flex items-center gap-5">
                    <h3 className="text-lg font-medium">{relatedBlog.title}</h3>
                    <MdOutlineArrowOutward className="text-[#FB861E] text-[44px]" />
                  </div>
                  <p className="text-gray-700">{relatedBlog.description}</p>
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
      </div>
    </div>
  );
};

export default BlogDetail;
