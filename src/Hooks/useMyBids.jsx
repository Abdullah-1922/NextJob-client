import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMyBids = () => {
    const {user}=useContext(AuthContext);


    const{data ,isLoading,refetch}=useQuery({
        queryKey:['myJobs'],
        queryFn:async()=>{
            const data =await axios.get(`http://localhost:5000/bidjobs?email=${user?.email}`)
            return data.data
        }
    
    })
    

     
    return {data ,isLoading,refetch}
};

export default useMyBids;