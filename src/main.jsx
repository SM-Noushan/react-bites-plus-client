import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FirebaseProvider from "./providers/firebase/FirebaseProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Zoom
      />
    </FirebaseProvider>
  </React.StrictMode>
);
