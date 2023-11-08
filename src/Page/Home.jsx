import { Helmet } from "react-helmet-async";
import HomeCategoryJobs from "../Components/HomeCategoryJobs";
import Banner from "../Components/Banner/Banner";
import HomeSwiper from "../Components/HomeSwper/HomeSwiper";
import Accordion from "../Components/Accordion";

const Home = () => {
   
    return (
        <div>
            <Helmet>
                <title>
                   NextJob || HOME
                </title>
            </Helmet>
            <div><Banner></Banner></div>
            <div className="text-center mt-3 ">
                <HomeCategoryJobs></HomeCategoryJobs>
            </div>
            <div>
               <HomeSwiper></HomeSwiper>
            </div>
           <div className="my-10">
            <Accordion></Accordion>
           </div>
            
        </div>
    );
};

export default Home;