import React, { useState, useEffect } from "react";
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
import { getCalApi } from "@calcom/embed-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
  const [show, setShow] = useState(false);
  const [bookingData, setBookingData] = useState(null); // State to store booking info
  const handleReadMoreToggle = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: {
          branding: { brandColor: "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // Capture booking data and set it to state
      cal("onEventBooked", (eventData) => {
        console.log("Event booked: ", eventData); // You can inspect eventData structure
        setBookingData(eventData); // Set the booking data to state
        sendBookingDataToBackend(eventData); // Trigger the backend call
      });
    })();
  }, []);

  // Function to send POST request to backend using axios
  const sendBookingDataToBackend = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BOOKING}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Booking successfully sent to backend:", response.data);
    } catch (error) {
      console.error(
        "There was an error sending the booking data to the backend:",
        error
      );
    }
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
              <video loop muted autoPlay preload="auto">
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
                    {/* <Button
                      data-cal-namespace="30min"
                      variant="primary"
                      className="btn-md button-theme"
                      style={{ backgroundColor:  linear-gradient(140deg, #e4ad35, #f1cf2e), border: 'none', hover:'#e4ad35' }}
                      data-cal-link="mohamed-emad-hs8u0e/30min"
                      data-cal-config='{"layout":"month_view","theme":"light"}'
                    >Book a call</Button> */}

                    <Button
                      data-cal-namespace="30min"
                      variant="primary"
                      className="btn-md button-theme custom-btn"
                      style={{
                        background: "linear-gradient(140deg, #e4ad35, #f1cf2e)",
                        border: "none",
                        color: '#333',
                      }}
                      // data-cal-link="mohamed-emad-hs8u0e/30min"
                      data-cal-link="codeanew/30min"
                      data-cal-config='{"layout":"month_view","theme":"light"}'
                    >
                      Book a call
                    </Button>
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
