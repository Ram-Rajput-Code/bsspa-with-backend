import React from "react";
import { useLocation } from "react-router-dom";
import Academic from "./components/Academic";

import Footer from "../Footer";
import NavBar from "../navBar/NavBar";
import AdmissionProcedure from "./components/AdmissionProcedure";
import SchoolRules from "./components/SchoolRules";
import GuidelinetoParents from "./components/GuidelinetoParent";
import FeesDepositionRules from "./components/FeesDepositionRules";
import StudentsTCList from "./components/StudentsTCList";
import RegForm9and11 from "./components/RegForm9and11";
import RegForm10and12 from "./components/RegForm10and12";
import StudentsList from "./components/StudentsList";
import BannerAdmissionPage from "./components/BannerAdmissionPage";

const AdmissionPage = () => {
  const location = useLocation();
  const path = location.pathname; // Get current URL path

  return (
    <>
      <NavBar />
      <BannerAdmissionPage />
      {/* Render components based on the URL */}
      {path.includes("academic") && <Academic />}
      {path.includes("admission-procedure") && <AdmissionProcedure />}
      {path.includes("school-rules") && <SchoolRules />}
      {path.includes("guideline-to-parent") && <GuidelinetoParents />}
      {path.includes("fees-deposition-rules") && <FeesDepositionRules />}
      {path.includes("students-tc-list") && <StudentsTCList />}
      {path.includes("reg-form9and11") && <RegForm9and11 />}
      {path.includes("reg-form10and12") && <RegForm10and12 />}
      {path.includes("students-list") && <StudentsList />}

      <Footer />
    </>
  );
};

export default AdmissionPage;
