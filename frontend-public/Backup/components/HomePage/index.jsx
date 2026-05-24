import React, { useEffect } from "react";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import Features from "../Features";
import Counters from "../Couters";
import OurTeam from "../OurTeam";
import Testimonial from "../Testimonial";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollUpButton from "../ScrollButton";
import { getCalApi } from "@calcom/embed-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faCloud,
  faEnvelope,
  faGlobe,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

const serviceCards = [
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
    icon: faMobileScreenButton,
    title: "Mobile App Development",
    desc: "We use the most effective programming languages to guarantee the stability and dependability of our solutions. Providing you with scalable and strong mobile apps that work with both iOS and Android gadgets.",
  },
];

const HomePage = () => {
  useAdjustHeader();

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#ffffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("onEventBooked", (eventData) => {
        sendBookingDataToBackend(eventData);
      });
    })();
  }, []);

  const sendBookingDataToBackend = async (data) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BOOKING}`, data, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Booking submission error:", error);
    }
  };

  return (
    <div>
      <Navbar />

      {/* ── Hero Banner ── */}
      <section className="relative h-screen overflow-hidden" id="banner">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          loop muted autoPlay playsInline preload="auto"
        >
          <source
            src="https://api.codeanew.com/uploads/81e53e25-d559-480c-9da9-8cf2f2c446c3.5e3f45cae7b53aae8427.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(36,42,53,0.55)]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl" style={{ animation: 'fadeInUp 0.7s ease both' }}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6 tracking-tight">
                Transforming Ideas into<br />
                <span className="text-gold-light">Digital Solutions</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-10 max-w-xl font-light tracking-wide">
                Complete web and mobile app development services are provided by Codeanew. Our skilled
                staff is committed to providing top-notch solutions that improve user experience and
                increase business performance.
              </p>
              <button
                data-cal-namespace="30min"
                data-cal-link="codeanew/30min"
                data-cal-config='{"layout":"month_view","theme":"light"}'
                className="btn-theme text-base px-10 py-4 rounded-lg text-[15px]"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/60 animate-bounce" />
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card) => (
              <div key={card.title} className="feature-card">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-1 shrink-0">
                  <FontAwesomeIcon icon={card.icon} size="lg" className="icon-gold text-2xl" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Counters />
      <Features />
      <OurTeam />
      <Testimonial />
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default HomePage;
