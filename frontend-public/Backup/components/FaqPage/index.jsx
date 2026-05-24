import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SubBannerBg from '../../assets/img/img-5.png';

const faqs = [
  {
    question: "Business Enquiry",
    answer: "We begin by thoroughly discussing and investigating your needs to determine what they are. We want to know what the main goals of your project are and how we can best meet your needs.",
  },
  {
    question: "Scope of Work",
    answer: "We specify and record the project's scope, including all deliverables, schedules, and completion dates. This guarantees a mutual understanding of the goals and lays the groundwork for a fruitful collaboration.",
  },
  {
    question: "Software Development",
    answer: "Based on the mutually agreed-upon scope, our team creates customized software solutions. Our primary objective is to provide exceptional and inventive solutions while keeping lines of communication open and meeting project deadlines.",
  },
  {
    question: "Support & Further Development",
    answer: "We offer continuous help to resolve any problems and guarantee seamless operation following deployment. We can provide additional work to improve and advance your solution as your needs evolve.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <>

      {/* Sub Banner */}
      <div
        className="sub-banner"
        style={{ backgroundImage: `url(${SubBannerBg})` }}
      >
        <div className="sub-banner-content">
          <h1>Our Process</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="active">Our Process</li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="section-title">
            <h1>Our Process</h1>
            <p>Streamlined process: From understanding your needs to delivering customized software and ongoing support.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const open = activeIndex === i;
              return (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                    open ? 'border-gold/40 shadow-[0_0_0_1px_rgba(228,173,53,0.2)]' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={open}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-base transition-colors focus-visible:ring-2 focus-visible:ring-gold outline-none ${
                      open ? 'bg-amber-50 text-gold' : 'bg-white text-heading hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                        open ? 'bg-gold text-white' : 'bg-gray-100 text-muted'
                      }`}>
                        {i + 1}
                      </span>
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-gold' : 'text-gray-400'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 py-4 text-muted leading-relaxed border-t border-gray-100 bg-white m-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default Faq;
