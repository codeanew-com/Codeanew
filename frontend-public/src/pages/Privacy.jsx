import React from "react";
import { Link } from "react-router-dom";
import SubBannerBg from "../assets/img/img-5.png";

const Section = ({ number, title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold text-heading mb-3 flex items-center gap-2">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-gold font-bold text-sm shrink-0">
        {number}
      </span>
      {title}
    </h2>
    {children}
  </div>
);

const PrivacyPolicy = () => {
  return (
    <>

      {/* Sub Banner */}
      <div
        className="sub-banner"
        style={{ backgroundImage: `url(${SubBannerBg})` }}
      >
        <div className="sub-banner-content">
          <h1>Privacy Policy</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="active">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-heading mb-2">Privacy Policy</h1>
          <p className="font-semibold text-muted mb-8 text-sm">Effective Date: October 20, 2024</p>

          <p className="mb-8 text-muted leading-relaxed">
            Welcome to Codeanew, based in Sharjah, UAE. We value your privacy and are committed
            to protecting your personal data. This Privacy Policy explains how we collect, use,
            and protect your information when you use our website or services.
          </p>

          <Section number="1" title="Information We Collect">
            <p className="text-muted mb-3">We collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong className="text-heading">Personal Information:</strong> Your name, email address, phone number, and other contact details.</li>
              <li><strong className="text-heading">Technical Information:</strong> IP address, browser type, and operating system collected through cookies.</li>
              <li><strong className="text-heading">Usage Data:</strong> Pages visited, links clicked, and time spent on our site.</li>
            </ul>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Provide our services to you and fulfill any requests you make.</li>
              <li>Improve the functionality and performance of our website.</li>
              <li>Communicate with you regarding your inquiries and services.</li>
              <li>Send promotional offers and newsletters, subject to your consent.</li>
              <li>Analyze trends and usage patterns to enhance user experience.</li>
              <li>Comply with applicable laws and regulations in the UAE.</li>
            </ul>
          </Section>

          <Section number="3" title="Sharing Your Information">
            <p className="text-muted mb-3">We do not sell your personal information. We may share it with:</p>
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li><strong className="text-heading">Service Providers:</strong> Third-party companies assisting in running our business.</li>
              <li><strong className="text-heading">Legal Obligations:</strong> Relevant government authorities when required by UAE laws.</li>
            </ul>
          </Section>

          <Section number="4" title="Data Security">
            <p className="text-muted">
              We have implemented appropriate technical and organizational measures to safeguard
              your personal information. However, no data transmission over the internet is
              completely secure.
            </p>
          </Section>

          <Section number="5" title="Your Rights">
            <ul className="list-disc list-inside space-y-2 text-muted">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
              <li>Opt-out of marketing communications at any time.</li>
            </ul>
          </Section>

          <Section number="6" title="Cookies">
            <p className="text-muted">
              We use cookies and similar tracking technologies to personalize your experience.
              You can adjust your browser settings to decline cookies.
            </p>
          </Section>

          <Section number="7" title="Data Transfers">
            <p className="text-muted">
              Your personal information may be transferred to and stored at locations outside
              the UAE. We ensure adequate protection measures are in place.
            </p>
          </Section>

          <Section number="8" title="Changes to This Privacy Policy">
            <p className="text-muted">
              We may update this Privacy Policy from time to time. We encourage you to review
              this page regularly.
            </p>
          </Section>

          <Section number="9" title="Contact Us">
            <div className="bg-bg-light rounded-xl p-5 text-sm text-muted space-y-1">
              <p className="m-0"><strong className="text-heading">Email:</strong>{" "}
                <a href="mailto:info@codeanew.com" className="text-gold hover:underline">info@codeanew.com</a>
              </p>
              <p className="m-0"><strong className="text-heading">Phone:</strong>{" "}
                <a href="tel:+971504264650" className="text-gold hover:underline">+971 50 426 4650</a>
              </p>
              <p className="m-0"><strong className="text-heading">Address:</strong> SPC Free Zone Sharjah, UAE</p>
            </div>
          </Section>
        </div>
      </section>

    </>
  );
};

export default PrivacyPolicy;
