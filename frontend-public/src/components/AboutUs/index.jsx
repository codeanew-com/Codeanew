import React, { useState } from "react";
import AboutImage from "../../assets/img/abut.jpg";
import Counters from "../Couters";
import OurTeam from "../OurTeam";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import { Container, } from "react-bootstrap";
import {
  faCloud,
  faServer,
  faEnvelope,
  faMobileAlt,
  faLightbulb,
  faFileShield,
  faCertificate,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
const AboutUs = () => {
  
  useAdjustHeader();

  
  // const [showDetails, setShowDetails] = useState(false);

  
  // const handleReadMoreToggle = () => {
  //   setShowDetails((prevShowDetails) => !prevShowDetails);
  // };

  return (
    <>
      <Navbar />
      {/* Sub banner start */}
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>About Us</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sub banner end */}

      {/* About listing start */}
      <div className="about-listing content-area-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="about-slider-box simple-slider">
                <img
                  className="d-block w-100"
                  src={AboutImage}
                  alt="About Us"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
              <div className="about-text">
                <h3>Who we are</h3>
                <p>
                  Codeanew Technologies, situated in UAE, offers high-quality
                  web development, mobile app production, cloud services,
                  DevOps, and business email solutions. Our objective is to
                  provide specialized, innovative solutions that help your
                  organization grow. With a competent workforce and a focus on
                  individual service, we solve challenging challenges and
                  produce extraordinary outcomes. Collaborate with us to
                  translate your digital requirements into effective solutions.
                </p>
                {/* <button
                  onClick={handleReadMoreToggle}
                  className="btn border-thn btn-sm"
                >
                  {showDetails ? "Read Less" : "Read More"}
                </button> */}
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
                      icon={faLightbulb}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Innovation</h3>
                  <p>
                    To stay ahead of the curve and provide cutting-edge
                    outcomes, we constantly embrace new technology and
                    inventive ideas.
                  </p>
                </div>
              </div>

              {/* Cloud and DevOps */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info text-center">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faFileShield}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Integrity</h3>
                  <p>
                    We make sure that our clients trust and value our
                    services by conducting business with honesty and
                    transparency.
                  </p>
                </div>
              </div>

              {/* Business Email Services */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info text-center">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Excellence</h3>
                  <p>
                    We strive for excellence in everything we do and are
                    dedicated to the highest standards of performance and
                    quality for every project.
                  </p>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="features-info text-center">
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      size="2x"
                      className="icon-color"
                    />
                  </div>
                  <h3>Collaboration</h3>
                  <p>
                    We work closely with our clients to accomplish shared
                    goals and achievements because we believe in the power
                    of open communication and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </Container>
          {/* Conditionally render the Container when showDetails is true */}
          {/* {showDetails && (
            <div className="row">
              <div className="col-12">
                <Container style={{ marginTop: "30px" }}>
                  <Row>
                    <Col style={{  }}>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginBottom: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Innovation:
                        </h5>
                        <p style={{ display: "inline" }}>
                          To stay ahead of the curve and provide cutting-edge
                          outcomes, we constantly embrace new technology and
                          inventive ideas.
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Integrity:
                        </h5>
                        <p style={{ display: "inline" }}>
                          We make sure that our clients trust and value our
                          services by conducting business with honesty and
                          transparency.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <Col>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginTop: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Excellence:
                        </h5>
                        <p style={{ display: "inline" }}>
                          We strive for excellence in everything we do and are
                          dedicated to the highest standards of performance and
                          quality for every project.
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginTop: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Collaboration:
                        </h5>
                        <p style={{ display: "inline" }}>
                          We work closely with our clients to accomplish shared
                          goals and achievements because we believe in the power
                          of open communication and teamwork.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row  >
                    <Col style={{  }}>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginTop: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Business Enquiry:
                        </h5>
                        <p style={{ display: "inline" }}>
                          We begin by thoroughly discussing and investigating
                          your needs to determine what they are. We want to know
                          what the main goals of your project are and how we can
                          best meet your needs.
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginTop: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Scope of Work:
                        </h5>
                        <p style={{ display: "inline" }}>
                          We specify and record the project's scope, including
                          all deliverables, schedules, and completion dates.
                          This guarantees a mutual understanding of the goals
                          and lays the groundwork for a fruitful collaboration.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginTop: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Software Development:
                        </h5>
                        <p style={{ display: "inline" }}>
                          Based on the mutually agreed-upon scope, our team
                          creates customized software solutions. Our primary
                          objective is to provide exceptional and inventive
                          solutions while keeping lines of communication open
                          and meeting project deadlines.
                        </p>
                      </div>
                    </Col>

                    <Col>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                          marginTop: '20px'
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Support & Further Development:
                        </h5>
                        <p style={{ display: "inline" }}>
                          We offer continuous help to resolve any problems and
                          guarantee seamless operation following deployment. We
                          can provide additional work to improve and advance
                          your solution as your needs evolve.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          )} */}
        </div>
      </div>
      <Counters />
      <OurTeam />
      <Footer />
    </>
  );
};

export default AboutUs;
