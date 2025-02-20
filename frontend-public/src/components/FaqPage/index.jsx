import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import useAdjustHeader from '../../hooks/useAdjustHeader';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  useAdjustHeader();

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Business Enquiry",
      answer:
        "We begin by thoroughly discussing and investigating your needs to determine what they are. We want to know what the main goals of your project are and how we can best meet your needs.",
    },
    {
      question: "Scope of Work",
      answer:
        "We specify and record the project's scope, including all deliverables, schedules, and completion dates. This guarantees a mutual understanding of the goals and lays the groundwork for a fruitful collaboration.",
    },
    {
      question: "Software Development",
      answer:
        "Based on the mutually agreed-upon scope, our team creates customized software solutions. Our primary objective is to provide exceptional and inventive solutions while keeping lines of communication open and meeting project deadlines.",
    },
    {
      question: "Support & Further Development",
      answer:
        "We offer continuous help to resolve any problems and guarantee seamless operation following deployment. We can provide additional work to improve and advance your solution as your needs evolve.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Our Process</h1>
            <ul className="breadcrumbs">
              <li><Link to='/'> Home</Link></li>
              <li className="active">Faq</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faq content-area-2">
        <div className="container">
          <div className="main-title text-center">
            <h1>Our Process</h1>
            <p>Streamlined Process: From understanding your needs to delivering customized software and ongoing support.</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div id="faq" className="faq-accordion">
                {faqs.map((faq, index) => (
                  <div className="card m-b-0" key={index}>
                    <div className="card-header">
                      <button
                        className="card-title faq-button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                      >
                        {faq.question}
                      </button>
                    </div>
                    <div
                      className={`card-block collapse ${activeIndex === index ? 'show' : ''
                        }`}
                    >
                      <div className="p-text">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
