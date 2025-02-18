import React from "react";
import Slider from "./homeComponents/Slider";
import WelcomeMessage from "./homeComponents/WelcomeMessage";
import TenDevineMessage from "./homeComponents/TenDevineMessage";
import VisionMission from "./homeComponents/VisionMission";
import SessionAdmission from "./homeComponents/SessionAdmission";
import PrincipalMessage from "./homeComponents/PrincipalMessage";


const HomePage = () => {
  return (
    <div>
      <Slider />
      <WelcomeMessage />
      <PrincipalMessage />
      <TenDevineMessage />
      <VisionMission />
      <SessionAdmission />
    </div>
  );
};

export default HomePage;
