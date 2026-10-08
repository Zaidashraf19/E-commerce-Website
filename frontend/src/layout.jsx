import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/App.jsx";
import Footer from "./components/Footer/App.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
