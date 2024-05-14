import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import "preline/preline";

const Root = () => {
  const location = useLocation();
  useEffect(() => {
    if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <section className="bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Root;
