import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategoryJobs = (category) => {
    


    const{data ,isLoading,refetch}=useQuery({
        queryKey:['categoryData'],
        queryFn:async()=>{
            const data =await axios.get(`http://localhost:5000/myJobs?category=${category}`)
            return data.data
        }
    
    })

    return {data ,isLoading,refetch} 
};

export default useCategoryJobs;