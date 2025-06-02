import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Utilities/Auth/Login";
import Register from "../Utilities/Auth/Register";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../Pages/ApplyJob";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/jobs"),
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "job/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
      element:<PrivateRoute>
        <JobDetails></JobDetails>
      </PrivateRoute>
      },
      {
        path: "apply/:id",
        
      element:<PrivateRoute>
       <ApplyJob></ApplyJob>
      </PrivateRoute>
      },
    ],
  },
]);
