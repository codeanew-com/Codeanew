// src/components/HubSpotChat.js
import React from "react";
import { Helmet } from "react-helmet";

const HubSpotChat = () => {
  return (
    <Helmet>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/145332936.js"
      ></script>
    </Helmet>
  );
};

export default HubSpotChat;
