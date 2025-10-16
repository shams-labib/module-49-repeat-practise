import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Root from "./Root";
import Home from "../Pages/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Root></Root>,
        children: [
            {
                path:'/',
                index: true,
                element:<Home></Home>,
            },
            {
               path:'/register',
               element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])