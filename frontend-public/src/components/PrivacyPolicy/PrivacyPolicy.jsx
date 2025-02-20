import "./style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useAdjustHeader from "../../hooks/useAdjustHeader";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Privay Policy</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li className="active">Privay Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faq content-area-2">
        <div className="container">
          {/* <div className="main-title text-center">
            <h1>Our Process</h1>
            <p>Streamlined Process: From understanding your needs to delivering customized software and ongoing support.</p>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <h1 style={{ marginBottom: "10px" }}>Privacy Policy</h1>

              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                Effective Date: October 20, 2024
              </p>

              <p>
                Welcome to Codeanew, based in Sharjah, UAE. We value your
                privacy and are committed to protecting your personal data. This
                Privacy Policy explains how we collect, use, and protect your
                information when you use our website or services.
              </p>

              <h2 className="section-title">1. Information We Collect</h2>
              <p>
                We collect information to provide better services to all our
                users. We collect the following types of information:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Your name, email
                  address, phone number, and any other contact details you
                  provide through our website or communication channels.
                </li>
                <li>
                  <strong>Technical Information:</strong> Information about your
                  device, including IP address, browser type, and operating
                  system, collected through cookies and other tracking
                  technologies.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information on how you use our
                  website, including pages visited, links clicked, and time
                  spent on our site.
                </li>
              </ul>

              <h2 className="section-title" style={{marginTop: '30px'}}>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>
                  Provide our services to you and fulfill any requests you make.
                </li>
                <li>
                  Improve the functionality and performance of our website.
                </li>
                <li>
                  Communicate with you regarding your inquiries, feedback, or
                  services you have requested.
                </li>
                <li>
                  Send promotional offers, updates, and newsletters, subject to
                  your consent.
                </li>
                <li>
                  Analyze trends and usage patterns to enhance our website
                  experience.
                </li>
                <li>Comply with applicable laws and regulations in the UAE.</li>
              </ul>

              <h2 className="section-title" style={{marginTop: '30px'}}>3. Sharing Your Information</h2>
              <p>
                We respect your privacy and do not sell your personal
                information. However, we may share your information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party companies that
                  assist in running our business, such as IT services, payment
                  processors, and marketing agencies.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> If required by law, we may
                  share your data with relevant government authorities, in
                  compliance with UAE laws.
                </li>
              </ul>

              <h2 className="section-title" style={{marginTop: '30px'}}>4. Data Security</h2>
              <p>
                We take data security seriously and have implemented appropriate
                technical and organizational measures to safeguard your personal
                information. However, no data transmission over the internet is
                completely secure, and we cannot guarantee the security of your
                data transmitted to our site.
              </p>

              <h2 className="section-title" style={{marginTop: '30px'}}>5. Your Rights</h2>
              <p>
                As a resident of Sharjah or the UAE, you have certain rights
                regarding your personal data:
              </p>
              <ul>
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>
                  Request deletion of your personal data, subject to legal
                  obligations.
                </li>
                <li>Opt-out of marketing communications at any time.</li>
              </ul>

              <h2 className="section-title" style={{marginTop: '30px'}}>6. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to personalize
                your experience and gather data on how you use our site. You can
                adjust your browser settings to decline cookies, but this may
                affect your experience on our site.
              </p>

              <h2 className="section-title" style={{marginTop: '30px'}}>7. Data Transfers</h2>
              <p>
                Your personal information may be transferred to, and stored at,
                locations outside the UAE. We will ensure that adequate
                protection measures are in place to protect your data when
                transferring it across borders.
              </p>

              <h2 className="section-title" style={{marginTop: '30px'}}>8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal obligations. We encourage you
                to review this page regularly for the latest updates.
              </p>

              <h2 className="section-title" style={{marginTop: '30px'}}>9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <p>Email: info@codeanew.com</p>
              <p>Phone: : +971 50 426 4650</p>
              <p>Address: SPC Free Zone Sharjah, UAE</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
