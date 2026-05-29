import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../../constants/technologies";

const ServiceListItem = ({ label }) => (
  <li className="w-[46%] flex items-center gap-2 px-4 py-2.5 bg-white rounded-r-full shadow-[0_0_10px_rgba(0,0,0,0.08)] hover:shadow-[0_0_5px_rgba(0,0,0,0.06)] transition-shadow text-sm text-gray-600">
    <FontAwesomeIcon icon={faAngleRight} className="icon-gold shrink-0 text-xs" />
    <span>{label}</span>
  </li>
);

const Technologies = () => (
  <section className="py-20 bg-bg-light">
    <div className="container mx-auto px-4">
      <div className="section-title">
        <h1>Technologies We Work With</h1>
        <p>20+ tools and frameworks across every layer of your stack.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map(({ label, items }) => (
          <div key={label}>
            <h3 className="text-base font-bold text-heading mb-4 uppercase tracking-widest text-sm">
              {label}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((item) => (
                <ServiceListItem key={item} label={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
