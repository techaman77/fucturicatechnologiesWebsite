import React from 'react';
import bpo from './assets/bpo.svg';


const BpoHiring = () => {
  return (
    <div className="container mx-auto text-[#666666] p-8">
      <div className="text-left mb-8">
        <p>Training Modules</p>
        <h1 className="text-4xl font-semibold mb-4">BPO Hiring and Placement</h1>
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>The BPO industry is booming, and our BPO Hiring and Placement module is your gateway to success in this dynamic field. We focus on equipping you with the skills necessary to excel in customer service, technical support, and other BPO roles.</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Develop communication and problem-solving skills.</li>
            <li>Training in multiple BPO domains (Customer Service, Tech Support, etc.)</li>
            <li>Exposure to global business processes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Curriculum Highlights</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Customer Relationship Management (CRM)</li>
            <li>Effective Communication Techniques.</li>
            <li>Technical Support Fundamentals.</li>
            <li>Cross-cultural Training</li>
            <li>BPO Industry Tools and Software.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Placement Assistance</h2>
          <ul className="list-disc list-inside mb-8">
            <li>Tailored resume and cover letter guidance.</li>
            <li>Practice interviews with BPO industry veterans.</li>
            <li>Connections with top BPO firms globally.</li>
          </ul>
        </div>

        <div>
          <img src={bpo} alt="IT Hiring Illustration" className="w-full" />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">100% Placement Guarantee</h2>
        <p className="mb-8">We don’t just train you; we help you launch your career. Our 100% Placement Assistance ensures that you’re not just job-ready but also connected with the right opportunities. We work closely with a network of top employers across industries to place our graduates in rewarding roles. From the moment you start your training, our team is dedicated to supporting you through every step of your job search.</p>
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p>At Fucturica Technologies, our training modules are designed to not just educate but to empower. With a focus on industry relevance, practical application, and comprehensive support, we’re dedicated to helping you achieve your career goals. Whether you’re starting your journey or looking to advance, our training programs provide the skills, knowledge, and confidence you need to succeed. Contact us today to learn more about how we can help you take the next step in your career!</p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-4">FAQS</h2>
        <div className="p-4 rounded-md">
          <h3 className="text-lg font-semibold">1. What kind of support do I get after completing the training?</h3>
          <h3 className="text-lg font-semibold mt-4">2. How long are the training modules?</h3>
          <h3 className="text-lg font-semibold mt-4">3. Are the training modules online or in-person?</h3>
          <h3 className="text-lg font-semibold mt-4">4. Do I receive a certificate after completion?</h3>
          <h3 className="text-lg font-semibold mt-4">5. What is the success rate of your placement assistance?</h3>
          <h3 className="text-lg font-semibold mt-4">6. Is there a refund policy if I'm not satisfied with the training?</h3>
        </div>
      </div>
    </div>
  );
};

export default BpoHiring;
