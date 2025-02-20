import React, { useState } from "react";
import AboutImage from "../../assets/img/abut.jpg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import Footer from "../Footer";
import { Container, Row, Col } from "react-bootstrap";
import Counters from "../Couters";
import OurTeam from "../OurTeam";
const OurTarget = () => {
  useAdjustHeader();

  const [showDetails, setShowDetails] = useState(false);
  const handleReadMoreToggle = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };
  return (
    <>
      <Navbar />
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Our Target Audience</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li className="active">Our Target</li>
            </ul>
          </div>
        </div>
      </div>

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
                <h3>
                  Empowering Business Growth with CodeAnew's Scalable Solutions
                </h3>
                <p>
                  In today’s digital world, businesses need the right technology
                  to grow and succeed. At CodeAnew, we offer affordable and
                  scalable solutions for small and medium-sized businesses
                  (SMBs), startups, e-commerce companies, and more. Whether you
                  need cloud services, website development, mobile apps, or
                  custom e-commerce platforms, our goal is to provide
                  high-quality solutions that drive business growth and improve
                  efficiency. CodeAnew focuses on delivering innovative,
                  reliable services tailored to your unique needs, helping you
                  stay ahead in a fast-changing market.
                </p>
                <button
                  onClick={handleReadMoreToggle}
                  className="btn border-thn btn-sm"
                >
                  {showDetails ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>

          {/* Conditionally render the Container when showDetails is true */}
          {showDetails && (
            <div className="row">
              <div className="col-12">
                <Container style={{ marginTop: "30px" }}>
                  <Row>
                    <Col className='mb-3'>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Small to Medium-Sized Businesses (SMBs)
                        </h5>
                        <div
                          style={{
                            marginLeft: "20px",
                          }}
                        >
                          <p>
                            To stay ahead of the curve and provide cutting-edge
                            outcomes, we constantly embrace new technology and
                            inventive ideas.
                          </p>
                          <p>
                            Needs: cloud services, software development, mobile
                            app development, and website development.
                          </p>
                          <p>
                            Value Proposition: Affordable, scalable, and
                            tailored solutions to drive business growth and
                            efficiency.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col className='mb-3'>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Startups:
                        </h5>
                        <div style={{ marginLeft: "20px" }}>
                          <p>
                            Description: Innovative startups seeking to disrupt
                            markets and scale quickly.
                          </p>
                          <p>
                            Needs: End-to-end development services, including
                            MVP creation, rapid prototyping, and cloud
                            infrastructure.
                          </p>
                          <p>
                            Value Proposition: Agile and flexible services
                            designed to support rapid growth and market entry.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className='mb-3'>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          E-commerce Businesses:
                        </h5>
                        <div style={{ marginLeft: "20px" }}>
                          <p>
                            Description: Online retailers aiming to improve
                            their digital storefront and customer experience.
                          </p>
                          <p>
                            Needs: Custom e-commerce platforms, mobile apps, and
                            seamless integration with payment gateways and
                            logistics systems.
                          </p>
                          <p>
                            Value Proposition: Enhanced user experience,
                            increased conversion rates, and optimized backend
                            operations for e-commerce success.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col className='mb-3'>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Tech-Savvy Individuals and Developers:
                        </h5>
                        <div
                          style={{
                            marginLeft: "20px",
                          }}
                        >
                          <p>
                            Description: Individual developers and tech
                            enthusiasts looking for reliable development and
                            cloud solutions.
                          </p>
                          <p>
                            Needs: Development tools, cloud services, and DevOps
                            support.
                          </p>
                          <p>
                            Value proposition: access to state-of-the-art tools
                            and knowledgeable assistance to realize their ideas.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <Col className='mb-3'>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Enterprises:
                        </h5>
                        <div style={{ marginLeft: "20px" }}>
                          <p>
                            Description: Large organizations with complex
                            requirements and high standards.
                          </p>
                          <p>
                            Needs: Robust and secure software solutions, cloud
                            migration, DevOps, and continuous
                            integration/continuous deployment (CI/CD) practices.
                          </p>
                          <p>
                            Value Proposition: Comprehensive solutions with a
                            focus on reliability, security, and scalability to
                            meet enterprise-level demands.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col className='mb-3'>
                      <div
                        style={{
                          backgroundColor: "#D1E9F6",
                          border: "10px solid #D1E9F6",
                          borderRadius: "20px",
                        }}
                      >
                        <h5 style={{ display: "inline", marginRight: "10px" }}>
                          Educational Institutions:
                        </h5>
                        <div
                          style={{
                            marginLeft: "20px",
                          }}
                        >
                          <p>
                            Description: Schools, colleges, and universities
                            aiming to integrate technology into their
                            educational framework.
                          </p>
                          We specify and record the project's scope, including
                          <p>
                            Needs: E-learning platforms, mobile apps for student
                            engagement, and cloud solutions for data management.
                          </p>
                          <p>
                            Value Proposition: Innovative and user-friendly
                            solutions to enhance the learning experience and
                            streamline administrative tasks.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          )}
        </div>
      </div>

      <Counters />
      <OurTeam />
      <Footer />
    </>
  );
};

export default OurTarget;
