import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

const Root = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default Root;
