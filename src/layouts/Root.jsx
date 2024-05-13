import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Root = () => {
  return (
    <section className="bg-gray-100">
      <Header />
      <Outlet />
    </section>
  );
};

export default Root;
