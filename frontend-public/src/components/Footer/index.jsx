import React from "react";
import Logo from "../../assets/img/logos/logo.png";
import { Link } from "react-router-dom";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import "./style.css";

const Footer = () => {
  useAdjustHeader();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
              <img
                src={Logo}
                alt="logo"
                style={{
                  height: "54.88px",
                  marginBottom: "30px",
                  width: "250px",
                }}
              />
            </div>
            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-item clearfix">
                <h4>Contact & Location </h4>
                <div className="s-border "
                //  style={{ marginLeft: "35px" }}
                 ></div>
                <div className="m-border" 
                // style={{ marginLeft: "35px" }}
                ></div>
                <div>
                  <ul className="contact-info">
                    <li>
                      <i
                        className="fa fa-map-marker-alt"
                        style={{ color: "#f1cf2e" }}
                      ></i>{" "}
                      SPC Free Zone Sharjah, UAE
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope"
                        style={{ color: " #f1cf2e", alignItems: "start" }}
                      ></i>
                      <a
                        href="mailto:info@codeanew.com"
                        style={{ alignItems: "start" }}
                      >
                        info@codeanew.com
                      </a>
                    </li>
                    <li>
                      <i
                        className="fa fa-phone"
                        style={{ color: " #f1cf2e", alignItems: "start" }}
                      ></i>
                      <a href="tel:+971-50-426-4650">+971 50 426 4650</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-item">
                <div>
                  <h4>Helpful Links</h4>
                  <div
                    className="s-border"
                    // style={{ marginLeft: "20px" }}
                  ></div>
                  <div
                    className="m-border"
                    // style={{ marginLeft: "20px" }}
                  ></div>
                </div>
                <div>
                  <ul className="links">
                    <li>
                      <Link to="/services">Our Services</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item">
                <div>
                  <h4>Support</h4>
                  <div
                    className="s-border"
                    // style={{ marginLeft: "45px" }}
                  ></div>
                  <div
                    className="m-border"
                    // style={{ marginLeft: "45px" }}
                  ></div>
                </div>
                <div>
                  <ul className="links">
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <p className="copy">
                © {currentYear} <a href="#">Codeanew.</a> All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div>
                <ul className="social-list clearfix">
                  <li
                    style={{
                      marginRight: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <a
                      href="https://www.instagram.com/codeanew/"
                      className="f-facebook-bg"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/codeanew/about/"
                      className="f-linkedin-bg"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
