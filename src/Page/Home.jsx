import { Helmet } from "react-helmet-async";
import HomeCategoryJobs from "../Components/HomeCategoryJobs";
import Banner from "../Components/Banner/Banner";

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
        
            
        </div>
    );
};

export default Home;