import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <section className="bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Root;
