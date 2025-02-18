
import React from "react";
import { useLocation } from "react-router-dom";
import Faculties from "./Components/Faculties";
import BannerFacilities from "./Components/BannerFacilities";
import Infrastructure from "./Components/Infrastructure";
import Praxis from "./Components/Praxis";
import NavBar from "../navBar/NavBar";
import Footer from "../Footer";

const FacilitiesPage = () => {
  const location = useLocation();
  const path = location.pathname; // Get current URL path

  return (
    <>
      <NavBar/>
      <BannerFacilities />
      
      {/* Render components based on the URL */}
      {path.includes("faculties") && <Faculties />}
      {path.includes("infrastructure") && <Infrastructure />}
      {path.includes("praxis") && <Praxis />}
      <Footer/>
    </>
  );
};

export default FacilitiesPage;
