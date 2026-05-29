import React from "react";
import Technologies from "../components/Technologies";
import ServicesGrid from "../components/ServicesGrid";
import SEO from "../components/SEO";
import { pageSEO } from "../constants/seo";

const Services = () => {
  return (
    <div>
      <SEO
        title={pageSEO.services.title}
        description={pageSEO.services.description}
        canonicalUrl="/services"
      />
      <ServicesGrid />
      <Technologies />
    </div>
  );
};

export default Services;
