import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import AddFood from "../pages/foods/add-food/AddFood";
import AvailableFood from "../pages/foods/available-food/AvailableFood";
import FoodDetails from "../pages/foods/food-details/FoodDetails";
import ManageMyFood from "../pages/foods/user-options/ManageMyFood";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/foods",
        element: <AvailableFood />,
      },
      {
        path: "/food/add",
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}?details=true`),
      },
      {
        path: "/foods/manage",
        element: (
          <PrivateRoutes>
            <ManageMyFood type="manage" />,
          </PrivateRoutes>
        ),
      },
      {
        path: "/food/update/:id",
        element: (
          <PrivateRoutes>
            <AddFood variant={false} />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
      {
        path: "/foods/request",
        element: (
          <PrivateRoutes>
            <ManageMyFood type="request" />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
