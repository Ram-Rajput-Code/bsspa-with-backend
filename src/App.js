// import "./App.css";
// import Footer from "./MyComponents/Footer.jsx";

// import Contact from "./MyComponents/Contact.jsx";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Activities from "./MyComponents/Activities.jsx";
// import Test from "./MyComponents/Test.jsx";
// import HomePage from "./MyComponents/homePage/HomePage.jsx";
// import NavBar from "./MyComponents/navBar/NavBar.jsx";
// import AboutPage from "./MyComponents/aboutPage/AboutPage.jsx";
// import FacilitiesPage from "./MyComponents/facilitiesPage/FacilitiesPage.jsx";
// import AdmissionPage from "./MyComponents/admissionPage/AdmissionPage.jsx";
// import PageNotFound from "./MyComponents/PageNotFound.jsx";
// import Gallery from "./MyComponents/galleryPage/Gallery.jsx";


// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element: (
//       <>
//         <NavBar />
//         <HomePage />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/about-school",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/founder-of-bsspa",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/founder-of-school",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/secretary-message",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/principal-message",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/members",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/vision-mission",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },
//   {
//     path: "/ten-devine-message",
//     element: (
//       <>
//         <AboutPage />
//       </>
//     ),
//   },

//   {
//     path: "/contact",
//     element: (
//       <>
//         <NavBar />
//         <Contact />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/gallery",
//     element: (
//       <>
//         <NavBar />
//         <Gallery />
//         <Footer />
//       </>
//     ),
//   },

//   {
//     path: "/activities",
//     element: (
//       <>
//         <NavBar />
//         <Activities />
//         <Footer />
//       </>
//     ),
//   },

//   {
//     path: "/admission",
//     element: (
//       <>
//         <AdmissionPage />
//       </>
//     ),
//   },
//   {
//     path: "/academic",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/admission-procedure",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/school-rules",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/guideline-to-parent",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/fees-deposition-rules",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/students-tc-list",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/reg-form9and11",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/reg-form10and12",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/students-list",
//     element: <AdmissionPage />,
//   },
//   {
//     path: "/facilities",
//     element: (
//       <>
//         <FacilitiesPage />
//       </>
//     ),
//   },

//   {
//     path: "/facilities/faculties",
//     element: <FacilitiesPage />,
//   },
//   {
//     path: "/facilities/infrastructure",
//     element: <FacilitiesPage />,
//   },
//   {
//     path: "/facilities/praxis",
//     element: <FacilitiesPage />,
//   },

//   {
//     path: "/test",
//     element: (
//       <>
//         <Test />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <PageNotFound />
//       </>
//     ),
//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;


import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";  // Layout Component import karna hai
import HomePage from "./MyComponents/homePage/HomePage.jsx";
import AboutPage from "./MyComponents/aboutPage/AboutPage.jsx";
import Contact from "./MyComponents/Contact.jsx";
import Activities from "./MyComponents/Activities.jsx";
import Test from "./MyComponents/Test.jsx";
import FacilitiesPage from "./MyComponents/facilitiesPage/FacilitiesPage.jsx";
import AdmissionPage from "./MyComponents/admissionPage/AdmissionPage.jsx";
import Gallery from "./MyComponents/galleryPage/Gallery.jsx";
import PageNotFound from "./MyComponents/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // Sab pages ke liye Layout common hai
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/about-school", element: <AboutPage /> },
      { path: "/founder-of-bsspa", element: <AboutPage /> },
      { path: "/founder-of-school", element: <AboutPage /> },
      { path: "/secretary-message", element: <AboutPage /> },
      { path: "/principal-message", element: <AboutPage /> },
      { path: "/members", element: <AboutPage /> },
      { path: "/vision-mission", element: <AboutPage /> },
      { path: "/ten-devine-message", element: <AboutPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/activities", element: <Activities /> },
      { path: "/admission", element: <AdmissionPage /> },
      { path: "/academic", element: <AdmissionPage /> },
      { path: "/admission-procedure", element: <AdmissionPage /> },
      { path: "/school-rules", element: <AdmissionPage /> },
      { path: "/guideline-to-parent", element: <AdmissionPage /> },
      { path: "/fees-deposition-rules", element: <AdmissionPage /> },
      { path: "/students-tc-list", element: <AdmissionPage /> },
      { path: "/reg-form9and11", element: <AdmissionPage /> },
      { path: "/reg-form10and12", element: <AdmissionPage /> },
      { path: "/students-list", element: <AdmissionPage /> },
      { path: "/facilities", element: <FacilitiesPage /> },
      { path: "/facilities/faculties", element: <FacilitiesPage /> },
      { path: "/facilities/infrastructure", element: <FacilitiesPage /> },
      { path: "/facilities/praxis", element: <FacilitiesPage /> },
      { path: "/test", element: <Test /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
