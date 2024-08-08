import React from 'react';
import './story.css'
import 'swiper/css'
import hero from './assets/profile.jpg'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonialsData = [
  {
    name: 'Amit Patel',
    text: 'Fucturica Technologies provided excellent training that helped me secure a job in web development. Highly recommended!',
  },
  {
    name: 'Sneha Roy',
    text: 'The Data Science course was comprehensive and practical. The instructors were knowledgeable and supportive.',
  },
  {
    name: 'Ravi Kumar',
    text: 'I learned a lot from the BPO courses. The modules were detailed, and the real-world examples were very helpful.',
  },
  {
    name: 'Anjali Mehta',
    text: 'The support team at Fucturica Technologies is amazing. They were always available to help and guide me.',
  },
  {
    name: 'Karan Singh',
    text: 'The innovative approach to teaching made the learning process enjoyable and effective. Kudos to the team!',
  },
  {
    name: 'Priya Sharma',
    text: 'The commitment to quality is evident in all the courses. The content is up-to-date and industry-relevant.',
  },
  {
    name: 'Vikram Desai',
    text: 'Thanks to Fucturica Technologies, I landed my dream job in the tech industry. The training was top-notch!',
  },
  {
    name: 'Ritu Jain',
    text: 'The experienced team of instructors provided valuable insights and practical knowledge. I feel well-prepared for my career.',
  },
];


const ReviewSlider = () => {

  return (
    <div className='w-full flex justify-center'>
      <div className="w-[90%] h-[700px] flex flex-col justify-center items-center bgimg">
        <div className='flex flex-col items-center pt-40 max-md:pt-10 '>
          <h2 className='text-[#666666] text-[48px] max-xl:text-[35px] max-lg:text-[28px] max-sm:text-[24px] font-semibold'>Success <span className='text-[#FB861E]'>Stories</span></h2>
          <p className='text-[#666666] font-light text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] text-center'>Hear from our successful students who have achieved their dreams with us</p>
        </div>
        <div className='flx w-[80%] max-sm:w-[100%] mx-auto my-10 '>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              310: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper p-10 m-10 h-[400px] max-sm:h-[400px]'
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col max-md:ml-0 max-md:w-full h-[300px] max-sm:h-[320px]'>
                  <div className={`flex flex-col grow px-4 py-5 max-sm:py-2 bg-[#fff] leading-[128%] rounded-[30px] max-md:px-5 max-md:mt-0`}>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <img
                        loading='lazy'
                        src={hero}
                        alt={testimonial.name}
                        className='w-16 h-16 rounded-full top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className={`font-bold text-[#007BFF]`}>{testimonial.name}</div>
                      </div>
                    </div>
                    <div className={`mt-12 max-sm:mt-5 text-[18px] max-sm:text-[14px] max-sm:leading-5 leading9 text-[#666666] max-md:mt-10`}>
                      {testimonial.text}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;
