import React from "react";
import AboutImage from "../assets/img/about/about.jpg";
import Counters from "../components/Counters";
import OurTeam from "../components/OurTeam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { values } from "../constants/values";
import SEO from "../components/SEO";
import { pageSEO } from "../constants/seo";

const About = () => {
  return (
    <>
      <SEO
        title={pageSEO.about.title}
        description={pageSEO.about.description}
        canonicalUrl="/about"
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-5/12">
              <img
                src={AboutImage}
                alt="About Codeanew"
                className="w-full rounded-xl shadow-card object-cover"
              />
            </div>

            <div className="lg:w-7/12 pl-0 lg:pl-8">
              <h3 className="text-3xl font-bold text-heading mb-5">Who we are</h3>
              <p className="text-muted leading-relaxed text-base">
                We are codeanew — a UAE-based technology partner built for businesses that are
                serious about growth. From your first website to a full enterprise platform, we
                design, build, and manage the technology your business runs on. One team, one
                relationship, no limits. We work directly with founders and decision-makers — no
                account managers, no bureaucracy — just fast, reliable delivery from people who
                genuinely care about your success.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="section-title">
              <h1>Our Core Values</h1>
              <p>The principles that guide everything we do.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon, title, desc }) => (
                <div key={title} className="feature-card">
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-1">
                    <FontAwesomeIcon icon={icon} size="lg" className="icon-gold text-xl" />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Counters />
      <OurTeam />
    </>
  );
};

export default About;
