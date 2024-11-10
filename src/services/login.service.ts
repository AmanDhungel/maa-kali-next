'use client'

import { useMutation } from "@tanstack/react-query"
import axios from "axios"

// export const useAuth = () => {
//     return useQuery<void> ({
//        queryKey: ["blog"],
//        queryFn: async () => {
//             const res = await axios.get("/api/blog")
//             return res.data
//         }
//     }) 
// }
export const useAuth = () => {
    return useMutation<void> ({
        mutationFn: async (data) =>{
            const res = await axios.post("/api/login", data)
            return res.data
        }
    }) 
}
