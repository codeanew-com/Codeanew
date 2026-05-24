import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import ReactGA from "react-ga4";

const ScrollToTopAndTrack = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // ReactGA.send({ 
    //   hitType: "pageview", 
    //   page: pathname + search,
    //   title: document.title
    // });

  }, [pathname, search]);

  return null;
};

export default ScrollToTopAndTrack;