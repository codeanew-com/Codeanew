import React from "react";
import HeroBanner from "../components/HeroBanner";
import Technologies from "../components/Technologies";
import Counters from "../components/Counters";
import OurTeam from "../components/OurTeam";
import ServicesGrid from "../components/ServicesGrid";
import SEO from "../components/SEO";
import { pageSEO } from "../constants/seo";

const Home = () => {
  return (
    <div>
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        canonicalUrl="/"
      />
      <HeroBanner />
      <ServicesGrid isHomePage={true} />
      <Counters />
      <Technologies />
      <OurTeam />
    </div>
  );
};

export default Home;
