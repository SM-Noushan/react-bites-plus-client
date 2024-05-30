import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import "preline/preline";

const Root = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <section className="bg-gray-100">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Root;
