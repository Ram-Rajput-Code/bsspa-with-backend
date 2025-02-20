import { Outlet } from "react-router-dom";
import NavBar from "./MyComponents/navBar/NavBar.jsx";
import Footer from "./MyComponents/Footer.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />  {/* Yeh dynamically current route ka component show karega */}
      <Footer />
    </>
  );
};

export default Layout;
