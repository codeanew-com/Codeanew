import React from "react";
import { Link } from "react-router";

// NOTE: This component is currently not in use.
// It has been replaced by clean page headers on each page.
// To re-enable: import SubBanner and add it to any page with:
// <SubBanner title="Page Title" active="Page Title" bg={SubBannerBg} />

const SubBanner = ({ title, active, bg }) => (
  <div
    className="sub-banner"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="sub-banner-content">
      <h1>{title}</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li className="active">{active}</li>
      </ul>
    </div>
  </div>
);

export default SubBanner;
