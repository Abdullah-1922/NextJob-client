
import useMyJobs from "../Hooks/useMyJobs";
import JobCart from "./JobCart";

const MyPostedJobs = () => {


 
   const {data} = useMyJobs();
  



   
    return (
        <div>
            {
                data?.map(job=><JobCart job={job} key={job._id}></JobCart>)
            }
            
        </div>
    );
};

export default MyPostedJobs;