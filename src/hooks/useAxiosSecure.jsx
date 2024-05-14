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
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("err");
        if (err.response.status === 401 || err.response.status === 403)
          logOut().then(() => {
            console.log("object");
            toast.error("Error! Please signin again.");
            // navigate("/");
            return <Navigate to="/signin" />;
          });
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
