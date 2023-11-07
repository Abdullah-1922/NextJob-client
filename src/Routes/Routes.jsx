import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import ErrorPage from "../ErrorPage";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;