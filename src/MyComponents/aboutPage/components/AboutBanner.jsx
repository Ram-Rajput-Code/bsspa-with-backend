import React from "react";
import "./about.css";
const AboutBanner = () => {
  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <div className="col-12">
        <img
          src="/images/about-us-banner.jpg"
          alt=""
          width={"100%"}
          border={"2px slide blue"}
          style={{ opacity: "1" }}
        />
      </div>
    </div>
  );
};

export default AboutBanner;
