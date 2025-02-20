

import React from "react";
import AboutSchool from "./components/AboutSchool";
import AboutBanner from "./components/AboutBanner";
import FounderOfSchool from "./components/FounderOfSchool";
import SecretaryMessage from "./components/SecretaryMessage";

import TenDevineMessage from "../homePage/homeComponents/TenDevineMessage";
import PrincipalMessage from "../homePage/homeComponents/PrincipalMessage";
import FounderOfBSSPA from "./components/FounderOfBSSPA";
import Members from "./components/Members";


import VisionMission from "../homePage/homeComponents/VisionMission";

import { useLocation } from "react-router-dom";


const AboutPage = () => {
  

  const location = useLocation();
  const path = location.pathname; // Get current URL path
  return (

  <>

  
    <AboutBanner />
    {/* Render components based on the URL */}
    {path.includes("about-school") && <AboutSchool />}
    {path.includes("founder-of-bsspa") && <FounderOfBSSPA />}
    {path.includes("founder-of-school") && <FounderOfSchool />}
    {path.includes("secretary-message") && <SecretaryMessage />}
    {path.includes("principal-message") && <PrincipalMessage />}
    {path.includes("members") && <Members />}
    {path.includes("vision-mission") && <VisionMission />}
    {path.includes("ten-devine-message") && <TenDevineMessage />}
    
      </>
  );
};

export default AboutPage;
