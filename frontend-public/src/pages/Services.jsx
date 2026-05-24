import React from "react";
import Features from "../components/Features";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faEnvelope,
  faMobileAlt,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import SubBannerBg from "../assets/img/img-5.png";

const services = [
  {
    icon: faGlobe,
    title: "Web Developments",
    desc: "We use a range of technology stacks to create stunning and captivating web applications, providing you with database-driven web apps that are scalable and effective.",
  },
  {
    icon: faCloud,
    title: "Cloud and DevOps",
    desc: "Our DevOps team creates robust, agile solutions that help your company stay one step ahead of the competition. We are prepared to work with you as a partner to advance your company.",
  },
  {
    icon: faEnvelope,
    title: "Business Email Services",
    desc: "Designed to meet your business needs, we offer dependable and safe email hosting with Microsoft Exchange and Google Workspace.",
  },
  {
    icon: faMobileAlt,
    title: "Mobile App Development",
    desc: "We use the most effective programming languages to guarantee the stability and dependability of our solutions. Providing you with scalable and strong mobile apps that work with both iOS and Android gadgets.",
  },
];

const Services = () => {
  return (
    <div>

      {/* Sub Banner */}
      <div
        className="sub-banner"
        style={{ backgroundImage: `url(${SubBannerBg})` }}
      >
        <div className="sub-banner-content">
          <h1>Services</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="active">Services</li>
          </ul>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h1>What We Offer</h1>
            <p>Comprehensive digital solutions tailored to your business needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-1">
                  <FontAwesomeIcon icon={icon} size="lg" className="icon-gold text-2xl" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
    </div>
  );
};

export default Services;
