import React from 'react';
import ithiring from './assets/ithiring.svg';

const ITHiring = () => {
  return (
    <div className="w-full flex justify-center text-[#666666]">
      <div className="max-w-7xl mx-auto">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">IT Hiring and Placement</h1>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>Our IT Hiring and Placement module is designed to prepare you for a successful career in the IT industry. From mastering programming languages to understanding network infrastructure, this course covers all the essential areas required for IT roles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Master in-demand IT skills.</li>
            <li>Hands-on experience with the latest technologies.</li>
            <li>Networking opportunities with industry professionals.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Curriculum Highlights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Fundamentals of Programming (Python, Java, etc.)</li>
            <li>Networking and Security Essentials</li>
            <li>Software Development Life Cycle (SDLC)</li>
            <li>IT Project Management</li>
            <li>Cloud Computing and DevOps</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Placement Assistance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Resume building workshops</li>
            <li>Mock interviews with IT experts</li>
            <li>Direct placement opportunities with leading tech companies</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">100% Placement Guarantee</h2>
          <p>We don’t just train you; we help you launch your career. Our 100% Placement Assistance ensures that you’re not just job-ready but also connected with the right opportunities. We work closely with a network of top employers across industries to place our graduates in rewarding roles. From the moment you start your training, our team is dedicated to supporting you through every step of your job search.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
          <p>At Fucturica Technologies, our training modules are designed to not just educate but to empower. With a focus on industry relevance, practical application, and comprehensive support, we’re dedicated to helping you achieve your career goals. Whether you’re starting your journey or looking to advance, our training programs provide the skills, knowledge, and confidence you need to succeed. Contact us today to learn more about how we can help you take the next step in your career!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">FAQS</h2>
          <div className="space-y-4">
            {['What kind of support do I get after completing the training?', 'How long are the training modules?', 'Are the training modules online or in-person?', 'Do I receive a certificate after completion?', 'What is the success rate of your placement assistance?', 'Is there a refund policy if I’m not satisfied with the training?'].map((faq, index) => (
              <details key={index} className="border p-4 rounded">
                <summary className="cursor-pointer font-medium">{faq}</summary>
              </details>
            ))}
          </div>
        </section>

        <section className="flex justify-center mt-12">
          <img src={ithiring} alt="IT Hiring and Placement" className="w-514 h-459"/>
        </section>
      </div>
    </div>
  );
}

export default ITHiring;
