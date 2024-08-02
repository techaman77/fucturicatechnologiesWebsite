import React, { useState } from 'react';
import './story.css'
import img from './assets/s2.svg'
const reviews = [
  { id: 1, content: img },
  { id: 2, content: img },
  { id: 3, content: img },
  { id: 4, content: img },
  { id: 5, content: img },
  { id: 6, content: img }
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const middleIndex = 1; // Index of the middle card in the visible 3 cards

  return (
    <div className="relative mt-10 w-full h-[700px] flex flex-col justify-center items-center overflow-hidden bgimg">
      <div className='flex flex-col items-center absolute top-0'>
          <h2 className='text-[#666666] text-[48px] font-semibold'>Success <span className='text-[#FB861E]'>Stories</span></h2>
          <p className='text-[#666666] font-light text-[20px] text-center'>Lorem ipsum dolor sit amet consectetur. Neque gravida purus proin sagittis sem tellus cras consectetur pellentesque.</p>
        </div>
      <div className='w-[90%]'>
        
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`min-w-[33.33%]  p-4 flex-shrink-0 ${index === currentIndex + middleIndex ? 'transition-transform duration-1000 transform translate-y-[-50px] scale-110' : ''
                }`}
            >
              <div className="">
                <img src={review.content} alt='imgs' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute text-[#FB861E] text-[40px] font-bold top-1/2 left-10 transform -translate-y-1/2 "
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute text-[#FB861E] text-[40px] font-bold top-1/2 right-10 transform -translate-y-1/2 "
      >
        &gt;
      </button>
    </div>
  );
};

export default ReviewSlider;
