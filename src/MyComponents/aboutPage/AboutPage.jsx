import React, { useRef, useEffect, useState } from "react";
import AboutSchool from "./components/AboutSchool";
import AboutBanner from "./components/AboutBanner";
import FounderOfSchool from "./components/FounderOfSchool";
import SecretaryMessage from "./components/SecretaryMessage";

import TenDevineMessage from "../homePage/homeComponents/TenDevineMessage";
import PrincipalMessage from "../homePage/homeComponents/PrincipalMessage";
import FounderOfBSSPA from "./components/FounderOfBSSPA";
import Members from "./components/Members";
import NavBar from "../navBar/components/NavBar";
import NavOne from "../navBar/components/NavOne";
import VisionMission from "../homePage/homeComponents/VisionMission";

const AboutPage = () => {
  const aboutBannerRef = useRef(null);
  const aboutSchoolRef = useRef(null);
  const founderBSSPARef = useRef(null);
  const founderSchoolRef = useRef(null);
  const secretaryMessageRef = useRef(null);
  const principalMessageRef = useRef(null);
  const membersRef = useRef(null);
  const visionMissionRef = useRef(null);
  const tenDevineMessageRef = useRef(null);

  const [refsReady, setRefsReady] = useState(false);

  useEffect(() => {
    // Ensure refs are assigned before passing to NavBar
    if (
      aboutBannerRef.current &&
      aboutSchoolRef.current &&
      founderBSSPARef.current &&
      founderSchoolRef.current &&
      secretaryMessageRef.current &&
      principalMessageRef.current &&
      membersRef.current &&
      visionMissionRef.current &&
      tenDevineMessageRef.current
    ) {
      setRefsReady(true);
    }
  }, []);

  return (
    <div>
      <NavOne />
      {refsReady && (
        <NavBar
          aboutBannerRef={aboutBannerRef}
          aboutSchoolRef={aboutSchoolRef}
          founderBSSPARef={founderBSSPARef}
          founderSchoolRef={founderSchoolRef}
          secretaryMessageRef={secretaryMessageRef}
          principalMessageRef={principalMessageRef}
          membersRef={membersRef}
          visionMissionRef={visionMissionRef}
          tenDevineMessageRef={tenDevineMessageRef}
        />
      )}

      <div ref={aboutBannerRef}><AboutBanner /></div>
      <div ref={aboutSchoolRef}><AboutSchool /></div>
      <div ref={founderBSSPARef}><FounderOfBSSPA /></div>
      <div ref={founderSchoolRef}><FounderOfSchool /></div>
      <div ref={secretaryMessageRef}><SecretaryMessage /></div>
      <div ref={principalMessageRef}><PrincipalMessage /></div>
      <div ref={membersRef}><Members /></div>
      <div ref={visionMissionRef}><VisionMission/></div>
      <div ref={tenDevineMessageRef}><TenDevineMessage /></div>
    </div>
  );
};

export default AboutPage;
