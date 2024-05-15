import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
//   const navigate = useNavigate();

  React.useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("outside>>", err?.response?.status);
        if (err?.response?.status == 401 || err?.response?.status === 403) {
          console.log("log ");
          logOut()
            .then(() => {
              console.log("log out");
              toast.error("Error! Please signin again.");
            //   return <Navigate to="/signin" />;
            })
            .catch((err) => console.log(err));
        }
      }
    );
    // // Cleanup the interceptor on unmount
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
