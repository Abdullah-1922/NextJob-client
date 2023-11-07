import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
        <div  className="flex min-h-screen flex-col ">
            <Navbar></Navbar>
            
            <div  className="flex-1"><Outlet></Outlet></div> 
            <div className="flex-grow-0"> 
                <Footer ></Footer>
                </div>
           
            
        </div>
    );
};

export default Root;