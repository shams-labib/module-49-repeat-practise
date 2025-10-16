import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Root from "./Root";
import Home from "../Pages/Home";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../components/PrivateRoutes/Profile";
import Order from "../components/PrivateRoutes/Order";
import Dshboard from "../components/PrivateRoutes/Dshboard";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

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
            },
            {
                path:'/profile',
                element:<PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            },
            {
                path:'/order',
                element:<PrivateRoutes>
                    <Order></Order>
                </PrivateRoutes>
            },
            {
                path:'/dashboard',
                element:<PrivateRoutes>
                    <Dshboard></Dshboard>
                </PrivateRoutes>
            }
            
        ]
    }
])