import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pillars } from "../../constants/services";
import { Link } from "react-router";

const ServicesGrid = ({ isHomePage = false }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h1>What We Offer</h1>
          <p>Three pillars. One partner. Everything your business needs.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          {pillars.map((pillar, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border text-left transition-all duration-200 ${
                active === i
                  ? "bg-navy text-white border-navy shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-amber-500"
              }`}
            >
              <FontAwesomeIcon
                icon={pillar.icon}
                className={active === i ? "text-amber-400" : "text-amber-500"}
              />
              <span className="font-semibold text-sm">{pillar.title}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-500 mb-10 text-base leading-relaxed">
            {pillars[active].desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars[active].services.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-1">
                  <FontAwesomeIcon
                    icon={icon}
                    size="lg"
                    className="icon-gold text-2xl"
                  />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {isHomePage && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-amber-400 text-amber-500 font-semibold hover:bg-amber-400 hover:text-white transition-all duration-200"
            >
              Explore All Services →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
