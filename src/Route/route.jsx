import {
  createBrowserRouter
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element: <HomePage></HomePage>
        }
    ]
  },
]);


export default router