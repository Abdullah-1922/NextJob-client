import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useBidRequest = () => {
    const {user}=useContext(AuthContext);


    const{data ,isLoading,refetch ,isFetching}=useQuery({
        queryKey:['bitREquests'],
        queryFn:async()=>{
            const data =await axios.get(`https://assignment-11-server-roan.vercel.app/bidjobsown?email=${user?.email}`)
            return data.data
        }
    
    })
    

     
    return {data ,isLoading,refetch,isFetching}
};

export default useBidRequest;