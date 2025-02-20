import React from "react";
import Navbar from "../Navbar";
import Features from "../Features";
import Footer from "../Footer";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faServer,
  faEnvelope,
  faMobileAlt,


  faCogs,
  faNetworkWired,
  faGlobe,
  faMobileScreenButton
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
const Index = () => {
  useAdjustHeader();
  return (
    <div>
      <Navbar />
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Services</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li className="active">Services</li>
            </ul>
          </div>
        </div>
      </div>
      <Container className="features-section content-area justify-content-center">
        <div className="features-section content-area">
          <div style={{ margin: "0 20px" }}>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info">
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
                    captivating web applications, providing you with
                    database-driven web apps that are scalable and effective.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faCloud}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Cloud and DevOps</h3>
                  <p>
                    Our DevOps team creates robust, agile solutions that help
                    your company stay one step ahead of the competition. We are
                    prepared to work with you as a partner to advance your
                    company.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Business Email Services</h3>
                  <p>
                    Designed to meet your business needs, we offer dependable
                    and safe email hosting with Microsoft Exchange and Google
                    Workspace.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Mobile App Development</h3>
                  <p>
                    We use the most effective programming languages to guarantee
                    the stability and dependability of our solutions. Providing
                    you with scalable and strong mobile apps that work with both
                    iOS and Android gadgets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
