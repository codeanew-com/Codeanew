import React from "react";
import Logo from "../../assets/img/logos/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Divider = () => (
  <div className="flex flex-col gap-[3px] mb-7">
    <div className="w-12 h-[2px] rounded-full bg-gray-300" />
    <div className="w-6 h-[2px] rounded-full bg-gray-300" />
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ── Main Footer ── */}
      <footer className="bg-bg-footer border-t border-gray-100 pt-20 pb-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">

            {/* Logo column */}
            <div className="lg:col-span-5">
              <img
                src={Logo}
                alt="Codeanew"
                className="h-14 w-auto mb-5"
              />
              <p className="text-sm text-muted leading-relaxed max-w-xs">
                High-quality web development, mobile apps, cloud services, and DevOps solutions based in UAE.
              </p>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-4">
              <h4 className="text-[17px] font-semibold text-heading mb-2">Contact &amp; Location</h4>
              <Divider />
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-body">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-gold mt-0.5 flex-shrink-0 w-4" />
                  <span>SPC Free Zone Sharjah, UAE</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-body">
                  <FontAwesomeIcon icon={faEnvelope} className="icon-gold mt-0.5 flex-shrink-0 w-4" />
                  <a href="mailto:info@codeanew.com" className="hover:text-gold transition-colors">
                    info@codeanew.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-body">
                  <FontAwesomeIcon icon={faPhone} className="icon-gold mt-0.5 flex-shrink-0 w-4" />
                  <a href="tel:+971504264650" className="hover:text-gold transition-colors">
                    +971 50 426 4650
                  </a>
                </li>
              </ul>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-1 sm:col-span-1">
              <h4 className="text-[17px] font-semibold text-heading mb-2">Links</h4>
              <Divider />
              <ul className="space-y-3">
                <li>
                  <Link to="/services" className="text-sm text-body hover:text-gold transition-colors">Our Services</Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-body hover:text-gold transition-colors">About Us</Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 sm:col-span-1">
              <h4 className="text-[17px] font-semibold text-heading mb-2">Support</h4>
              <Divider />
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy" className="text-sm text-body hover:text-gold transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-sm text-body hover:text-gold transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      {/* ── Sub Footer ── */}
      <div className="bg-bg-footer border-t border-gray-200">
        <div className="container mx-auto py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-muted m-0">
              © {currentYear}{" "}
              <a href="/" className="text-gold font-semibold hover:text-gold-light transition-colors">
                Codeanew.
              </a>{" "}
              All Rights Reserved.
            </p>

            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="https://www.instagram.com/codeanew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-base transition-all duration-200 hover:scale-110 hover:shadow-md facebook-bg"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/codeanew/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-base transition-all duration-200 hover:scale-110 hover:shadow-md linkedin-bg"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
