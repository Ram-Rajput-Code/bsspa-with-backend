import React from "react";
import { useLocation } from "react-router-dom";
import Faculties from "./Components/Faculties";
import BannerFacilities from "./Components/BannerFacilities";
import Infrastructure from "./Components/Infrastructure";
import Praxis from "./Components/Praxis";

const FacilitiesPage = () => {
  const location = useLocation();
  const path = location.pathname; // Get current URL path

  return (
    <>
      <BannerFacilities />

      {/* Render components based on the URL */}
      {path.includes("faculties") && <Faculties />}
      {path.includes("infrastructure") && <Infrastructure />}
      {path.includes("praxis") && <Praxis />}
    </>
  );
};

export default FacilitiesPage;
