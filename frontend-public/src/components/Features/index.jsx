import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Service1 from "../../assets/img/img-1.jpg";
import Service2 from "../../assets/img/img-2.jpg";

const serviceListItems = [
  "Near Cloud", "Backup Systems", "Office Cloud", "API Cloud",
  "Hybrid Cloud", "SDK Cloud", "Cloud Hosting", "Web Services",
];

const devListItems = [
  "Web Design", "Android Development", "Mobile App Design", "Back-End",
  "iOS Development", "Print Design", "Front-End", "e-Commerce",
];

const ServiceListItem = ({ label }) => (
  <li className="w-[46%] flex items-center gap-2 px-4 py-2.5 bg-white rounded-r-full shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:shadow-[0_0_5px_rgba(0,0,0,0.06)] transition-shadow text-sm text-gray-600">
    <FontAwesomeIcon icon={faAngleRight} className="icon-gold shrink-0 text-xs" />
    <span>{label}</span>
  </li>
);

const Features = () => (
  <>
    {/* Cloud Services */}
    <section className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-heading mb-4">Cloud Services</h3>
            <p className="text-muted leading-relaxed mb-8">
              Our DevOps team creates robust, agile solutions that help your company stay one step
              ahead of the competition. We are prepared to work with you as a partner to advance
              your company.
            </p>
            <ul className="flex flex-wrap gap-3">
              {serviceListItems.map((item) => (
                <ServiceListItem key={item} label={item} />
              ))}
            </ul>
          </div>

          <div className="lg:w-5/12 lg:ml-auto">
            <img
              src={Service1}
              alt="Cloud services"
              className="w-full max-w-111.25 mx-auto rounded-xl shadow-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Development Services */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-5/12">
            <img
              src={Service2}
              alt="Development services"
              className="w-full max-w-111.25 mx-auto rounded-xl shadow-card object-cover"
            />
          </div>

          <div className="lg:w-1/2 lg:ml-auto">
            <h3 className="text-3xl font-bold text-heading mb-4">Development Services</h3>
            <p className="text-muted leading-relaxed mb-8">
              We use a range of technology stacks to create stunning and captivating web
              applications, providing you with database-driven web apps that are scalable
              and effective.
            </p>
            <ul className="flex flex-wrap gap-3">
              {devListItems.map((item) => (
                <ServiceListItem key={item} label={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Features;
