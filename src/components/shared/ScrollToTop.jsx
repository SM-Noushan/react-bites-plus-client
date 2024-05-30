import { useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigationType } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    if (navigationType !== "POP")
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location, navigationType]);
  return children;
};

export default ScrollToTop;
