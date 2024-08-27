import React, { useState } from 'react';
import bpo from './assets/bpo.svg';


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

const BpoHiring = () => {
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
          <h1 className="text-2xl sm:text-4xl font-semibold mt-4 sm:mt-6 mb-6 sm:mb-12">BPO Hiring and Placement</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Introduction</h2>
          <p>The BPO industry is booming, and our BPO Hiring and Placement module is your gateway to success in this dynamic field. We focus on equipping you with the skills necessary to excel in customer service, technical support, and other BPO roles.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <div className="sm:w-1/2">
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Develop communication and problem-solving skills.</li>
              <li>Training in multiple BPO domains (Customer Service, Tech Support, etc.)</li>
              <li>Exposure to global business processes.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Curriculum Highlights</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Customer Relationship Management (CRM).</li>
              <li>Effective Communication Techniques.</li>
              <li>Technical Support Fundamentals.</li>
              <li>Cross-cultural Training.</li>
              <li>BPO Industry Tools and Software.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Placement Assistance</h2>
            <ul className="list-disc list-inside mb-8">
              <li>Tailored resume and cover letter guidance.</li>
              <li>Practice interviews with BPO industry veterans.</li>
              <li>Connections with top BPO firms globally.</li>
            </ul>
          </div>

          <div className="sm:w-1/2 mt-8 sm:mt-0">
            <img src={bpo} alt="IT Hiring Illustration" className="w-full sm:w-auto max-w-xs mx-auto sm:mx-0" />
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

export default BpoHiring;
