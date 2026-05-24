import React from "react";
import AboutImage from "../../assets/img/abut.jpg";
import SubBannerBg from "../../assets/img/img-5.png";
import Counters from "../Couters";
import OurTeam from "../OurTeam";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faFileShield,
  faCertificate,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

const values = [
  {
    icon: faLightbulb,
    title: "Innovation",
    desc: "To stay ahead of the curve and provide cutting-edge outcomes, we constantly embrace new technology and inventive ideas.",
  },
  {
    icon: faFileShield,
    title: "Integrity",
    desc: "We make sure that our clients trust and value our services by conducting business with honesty and transparency.",
  },
  {
    icon: faCertificate,
    title: "Excellence",
    desc: "We strive for excellence in everything we do and are dedicated to the highest standards of performance and quality.",
  },
  {
    icon: faHandshake,
    title: "Collaboration",
    desc: "We work closely with our clients to accomplish shared goals because we believe in the power of open communication and teamwork.",
  },
];

const AboutUs = () => {
  return (
    <>

      {/* Sub Banner */}
      <div
        className="sub-banner"
        style={{ backgroundImage: `url(${SubBannerBg})` }}
      >
        <div className="sub-banner-content">
          <h1>About Us</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <div className="lg:w-5/12">
              <img
                src={AboutImage}
                alt="About Codeanew"
                className="w-full rounded-xl shadow-card object-cover"
              />
            </div>

            {/* Text */}
            <div className="lg:w-7/12 pl-0 lg:pl-8">
              <h3 className="text-3xl font-bold text-heading mb-5">Who we are</h3>
              <p className="text-muted leading-relaxed text-base">
                Codeanew Technologies, situated in UAE, offers high-quality web development,
                mobile app production, cloud services, DevOps, and business email solutions.
                Our objective is to provide specialized, innovative solutions that help your
                organization grow. With a competent workforce and a focus on individual service,
                we solve challenging challenges and produce extraordinary outcomes. Collaborate
                with us to translate your digital requirements into effective solutions.
              </p>
            </div>
          </div>

          {/* Core Values */}
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

export default AboutUs;
