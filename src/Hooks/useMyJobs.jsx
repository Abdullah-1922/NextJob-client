import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";

const useMyJobs = () => {
    const {user}=useContext(AuthContext);


    const{data ,isLoading,refetch}=useQuery({
        queryKey:['myJobs'],
        queryFn:async()=>{
            const data =await axios.get(`https://assignment-11-server-roan.vercel.app/myJobs?email=${user?.email}`)
            return data.data
        }
    
    })
    

     
    return {data ,isLoading,refetch}
};

export default useMyJobs;