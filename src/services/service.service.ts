'use client'

import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetService = () => {
    return useQuery<void> ({
       queryKey: ["service"],
       queryFn: async () => {
            const res = await axios.get("/api/service")
            return res.data
        }
    }) 
}

export const useCreateService = () => {
    return useMutation<void> ({
        mutationFn: async (data) =>{
            const res = await axios.post("/api/service", data)
            return res.data
        }
    }) 
}
