import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Details from "../Pages/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element: <HomePage></HomePage>
        },
        {
           path: "/details/:id",
          element:<Details></Details>
        }
    ]
  },
]);


export default router