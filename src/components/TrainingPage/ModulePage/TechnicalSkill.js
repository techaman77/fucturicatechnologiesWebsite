import React, { useState } from 'react';
import technical from './assets/technical.svg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#007BFF] rounded-2xl p-4 mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <h3 className="font-semibold text-gray-800 flex justify-between items-center">
        {question}
        <span>{isOpen ? '▲' : '▼'}</span>
      </h3>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const TechnicalSkill = () => {
  const faqs = [
    {
      question: "What kind of support do I get after completing the training?",
      answer: "You will receive ongoing support including resume building, interview preparation, and networking opportunities."
    },
    {
      question: "How long are the training modules?",
      answer: "The training modules vary in length but typically last between 4 to 12 weeks."
    },
    {
      question: "Are the training modules online or in-person?",
      answer: "We offer both online and in-person training modules to cater to your preferences."
    },
    {
      question: "Do I receive a certificate after completion?",
      answer: "Yes, you will receive a certificate upon successful completion of the training modules."
    },
    {
      question: "What is the success rate of your placement assistance?",
      answer: "We have a 95% placement success rate within 6 months of training completion."
    },
    {
      question: "Is there a refund policy if I'm not satisfied with the training?",
      answer: "Yes, we offer a refund policy within the first 14 days of the training program."
    }
  ];

  return (
    <div className='w-full pt-20 sm:pt-10'>
      <div className="w-[90%] mx-auto font-montserrat text-[#666666] p-4 sm:p-8 text-left">
        <div>
          <p>Training Modules</p>
          <h1 className="text-2xl sm:text-4xl font-semibold mt-4 sm:mt-6 mb-6 sm:mb-12">Technical Skill Development</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
          <p>Our Technical Skill Development module is perfect for those looking to upgrade their technical knowledge and stay ahead in the rapidly evolving tech industry. This course is ideal for both beginners and professionals looking to deepen their technical expertise.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <div className="sm:w-1/2">
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Learn cutting-edge technologies and tools.</li>
              <li>Practical training through real-world projects.</li>
              <li>Industry-recognized certifications.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Curriculum Highlights</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Advanced Programming Techniques</li>
              <li>Data Science and Machine Learning</li>
              <li>Cybersecurity Practices</li>
              <li>Software Testing and QA</li>
              <li>IoT and AI Integrations</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Placement Assistance</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Comprehensive job search support</li>
              <li>Interview prep with focus on technical roles</li>
              <li>Job alerts for relevant positions in tech companies</li>
            </ul>
          </div>

          <div className="sm:w-1/2 mt-8 sm:mt-0">
            <img src={technical} alt="IT Hiring Illustration" className="w-full sm:w-auto max-w-xs mx-auto sm:mx-0" />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">100% Placement Guarantee</h2>
          <p className="mb-8">We don’t just train you; we help you launch your career. Our 100% Placement Assistance ensures that you’re not just job-ready but also connected with the right opportunities. We work closely with a network of top employers across industries to place our graduates in rewarding roles. From the moment you start your training, our team is dedicated to supporting you through every step of your job search.</p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Conclusion</h2>
          <p>At Fucturica Technologies, our training modules are designed to not just educate but to empower. With a focus on industry relevance, practical application, and comprehensive support, we’re dedicated to helping you achieve your career goals. Whether you’re starting your journey or looking to advance, our training programs provide the skills, knowledge, and confidence you need to succeed. Contact us today to learn more about how we can help you take the next step in your career!</p>
        </div>

        <div className="mt-16 w-full grid place-items-center">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-[#FB861E]">FAQS</h1>
          <div className="w-full sm:w-[80%] p-4 rounded-md text-xs">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkill;
