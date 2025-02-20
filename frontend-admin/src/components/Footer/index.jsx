import React from "react";
import Logo from "../../assets/img/logos/logo.png";
import { Link } from "react-router-dom";
// import useAdjustHeader from "../../hooks/useAdjustHeader";

const Footer = () => {
  // useAdjustHeader();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
              <img src={Logo} alt="logo" style={{
                height: '54.88px',
                marginBottom: '30px',
                width: '250px',
              }} />
            </div>
            <div className="col-xl-5 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-item clearfix">
                <h4>Contact & Location </h4>
                <div className="s-border"></div>
                <div className="m-border"></div>
                <ul className="contact-info">
                  <li>
                    <i className="fa fa-map-marker-alt" style={{ color: ' #e4ad35' }}></i> SPC Free Zone
                    Sharjah, UAE
                  </li>
                  <li>
                    <i className="fa fa-envelope" style={{ color: ' #e4ad35' }}></i>
                    <a href="mailto:info@codeanew.com">info@codeanew.com</a>
                  </li>
                  <li>
                    <i className="fa fa-phone" style={{ color: ' #e4ad35' }}></i>
                    <a href="tel:+971-50-426-4650">+971 50 426 4650</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-item">
                <h4>Helpful Links</h4>
                <div className="s-border"></div>
                <div className="m-border"></div>
                <ul className="links">
                  <li>
                    <Link to="/terms-of-use">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/our-process">FAQ</Link>
                  </li>

                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item">
                <h4>Pages</h4>
                <div className="s-border"></div>
                <div className="m-border"></div>
                <ul className="links">
                  <li>
                    <Link to="/all-bookings">Bookings</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Contacts</Link>
                  </li>
                  <li>
                    <Link to="/all-users">All Users</Link>
                  </li>
                </ul>
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
    </>
  );
};

export default Footer;
