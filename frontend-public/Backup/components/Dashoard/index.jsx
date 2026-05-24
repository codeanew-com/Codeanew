import React from "react";
import NavDash from "./NavDash";
import ContactPage from "./ContactPage/ContactPage";

const Dashboard = () => (
  <div className="min-h-screen bg-bg-light">
    <NavDash />
    <div className="pt-20">
      <ContactPage />
    </div>
  </div>
);

export default Dashboard;
