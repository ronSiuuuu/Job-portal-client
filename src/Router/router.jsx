import {
  createBrowserRouter,

} from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    Component: Root,
    children:[
        {
            index:true,
            Component: Home,
        }
    ]
  },
]);