import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import ErrorPage from "../ErrorPage";
import AddJobs from "../Page/AddJobs";
import MyPostedJobs from "../Page/MyPostedJobs";
import PrivateRoute from "./PrivateRoute";
import UpdateJob from "../Page/UpdateJob";
import BidDetails from "../Page/BidDetails";
import MyBids from "../Page/MyBids";
import BidRequest from "../Page/BidRequest";

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
            },
            {
                path:'/addjobs',
                element:<PrivateRoute> <AddJobs></AddJobs></PrivateRoute>
            },
            {
                path:'/mypostedjobs',
                element:<PrivateRoute> <MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path:'/updatejob/:id',
                element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute> ,
                loader:({params})=>fetch(`https://assignment-11-server-roan.vercel.app/updatejob/${params.id}`)
            },
            {
                path:'/bidjob/:id',
                element:<PrivateRoute><BidDetails></BidDetails></PrivateRoute> ,
                loader:({params})=>fetch(`https://assignment-11-server-roan.vercel.app/jobdetails/${params.id}`)
            },
            {
                path:'/mybids',
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute> 
            },
            {
                path:"/bidrequest",
                element:<PrivateRoute><BidRequest></BidRequest></PrivateRoute> 
            }
        ]
    }
])
export default router;