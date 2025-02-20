import React, { useState } from "react";
import Banner from "./81e53e25-d559-480c-9da9-8cf2f2c446c3.mp4";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import Features from "../Features";
import Counters from "../Couters";
import OurTeam from "../OurTeam";
import Testimonial from "../Testimonial";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import ScrollUpButton from "../ScrollButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCloud,
  faEnvelope,
  faGlobe,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import "./style.css";

const HomePage = () => {
  useAdjustHeader();

  const [setShowDetails] = useState(false);

  const handleReadMoreToggle = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const text = `Complete web and mobile app development services are provided by Codeanew. Our skilled staff is committed to providing top-notch solutions that improve user experience and increase business performance.`;

  return (
    <div>
      <Navbar />
      <div className="banner" id="banner">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item item-bg active">
              {/* Embed the video as the banner */}
              {/* <video className="d-block w-100 h-100" autoPlay loop muted>
                <source src={Banner} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}

              {/* <video className="d-block w-100 h-100" autoPlay loop muted>
  <source src={Banner} type="video/mp4" />
</video> */}

              <video
                loop
                muted
                autoPlay
                preload="auto"
              // width="600"
              // height="400"
              >
                <source
                  src="https://api.codeanew.com/uploads/81e53e25-d559-480c-9da9-8cf2f2c446c3.5e3f45cae7b53aae8427.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="carousel-caption banner-slider-inner d-flex h-100">
                <div className="carousel-content container">
                  <div className="banner-inner">
                    <h1 className="b-text">
                      Transforming Ideas into Digital Solutions
                    </h1>
                    <p>{text}</p>
                    <Link
                      style={{ backgroundColor: " #e4ad35" }}
                      to="/booking"
                      className="btn-md button-theme"
                    >
                      Book a Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container className="features-section content-area justify-content-center">
        <div className="row justify-content-center">
          {/* Web Developments */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="features-info text-center">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="2x"
                  className="icon-color"
                />
              </div>
              <h3>Web Developments</h3>
              <p>
                We use a range of technology stacks to create stunning and
                captivating web applications, providing you with database-driven
                web apps that are scalable and effective.
              </p>
            </div>
          </div>

          {/* Cloud and DevOps */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="features-info text-center">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faCloud}
                  size="2x"
                  className="icon-color"
                />
              </div>
              <h3>Cloud and DevOps</h3>
              <p>
                Our DevOps team creates robust, agile solutions that help your
                company stay one step ahead of the competition. We are prepared
                to work with you as a partner to advance your company.
              </p>
            </div>
          </div>

          {/* Business Email Services */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="features-info text-center">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="icon-color"
                />
              </div>
              <h3>Business Email Services</h3>
              <p>
                Designed to meet your business needs, we offer dependable and
                safe email hosting with Microsoft Exchange and Google Workspace.
              </p>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="features-info text-center">
              <div className="icon">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  size="2x"
                  className="icon-color"
                />
              </div>
              <h3>Mobile App Development</h3>
              <p>
                We use the most effective programming languages to guarantee the
                stability and dependability of our solutions. Providing you with
                scalable and strong mobile apps that work with both iOS and
                Android gadgets.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Counters />
      <Features />
      <OurTeam />
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default HomePage;
