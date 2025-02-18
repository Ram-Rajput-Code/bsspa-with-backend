import "./App.css";
import Footer from "./MyComponents/Footer.jsx";

import Contact from "./MyComponents/Contact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Activities from "./MyComponents/Activities.jsx";
import Test from "./MyComponents/Test.jsx";
import HomePage from "./MyComponents/homePage/HomePage.jsx";
import NavBar from "./MyComponents/navBar/NavBar.jsx";
import AboutPage from "./MyComponents/aboutPage/AboutPage.jsx";
import FacilitiesPage from "./MyComponents/facilitiesPage/FacilitiesPage.jsx";
import AdmissionPage from "./MyComponents/admissionPage/AdmissionPage.jsx";
import PageNotFound from "./MyComponents/PageNotFound.jsx";
import Gallery from "./MyComponents/galleryPage/Gallery.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <AboutPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <NavBar />
        <Gallery />
        <Footer />
      </>
    ),
  },

  {
    path: "/activities",
    element: (
      <>
        <NavBar />
        <Activities />
        <Footer />
      </>
    ),
  },

  {
    path: "/admission",
    element: (
      <>
        <AdmissionPage />
      </>
    ),
  },
  {
    path: "/admission/academic",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/admission-procedure",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/school-rules",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/guideline-to-parent",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/fees-deposition-rules",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/students-tc-list",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/reg-form9and11",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/reg-form10and12",
    element: <AdmissionPage />,
  },
  {
    path: "/admission/students-list",
    element: <AdmissionPage />,
  },
  {
    path: "/facilities",
    element: (
      <>
        <FacilitiesPage />
      </>
    ),
  },

  {
    path: "/facilities/faculties",
    element: <FacilitiesPage />,
  },
  {
    path: "/facilities/infrastructure",
    element: <FacilitiesPage />,
  },
  {
    path: "/facilities/praxis",
    element: <FacilitiesPage />,
  },

  {
    path: "/test",
    element: (
      <>
        <Test />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <PageNotFound />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
