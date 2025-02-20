import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service1 from "../../assets/img/img-1.jpg";
import Service2 from "../../assets/img/img-2.jpg";

const Features = () => {
  return (
    <>
      {/* Cloud Services Section */}
      <div className="services content-area-2 bg-grea">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="services-info mb-35">
                <h3>Cloud Services</h3>
                <p>
                  Our DevOps team creates robust, agile solutions that help your
                  company stay one step ahead of the competition. We are
                  prepared to work with you as a partner to advance your
                  company.
                </p>
                <div>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>Near Cloud
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>Backup Systems
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>Office Cloud
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>API Cloud
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>Hybrid Cloud
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>SDK Cloud
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>Cloud Hosting
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-angle-right"/>Web Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1 align-self-center">
              <div className="services-photo">
                <img src={Service1} alt="services-photo" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Development Services Section */}
      <div className="services content-area-3">
        <Container>
          <Row>
            <Col lg={5} className="align-self-center">
              <div className="services-photo mb-50">
                <img src={Service2} alt="services-photo" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6} className="offset-lg-1">
              <div className="services-info">
                <h3>Development Services</h3>
                <p>
                  We use a range of technology stacks to create stunning and
                  captivating web applications, providing you with
                  database-driven web apps that are scalable and effective.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>Web Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>Android Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>Mobile App Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>Back-End
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>iOS Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>Print Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>Front-End
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fa fa-angle-right"/>e-Commerce
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Features;
