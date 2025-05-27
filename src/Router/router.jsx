import {
  createBrowserRouter,

} from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Utilities/Auth/Login";
import Register from "../Utilities/Auth/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    Component: Root,
    children:[
        {
            index:true,
            Component: Home,
        },
        {
            path: 'login',
            Component: Login
        },
        {
            path: 'register',
            Component: Register
        },

    ]
  },
]);