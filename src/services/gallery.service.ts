import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetGallery = () => {
    return useQuery<void> ({
       queryKey: ["gallery"],
       queryFn: async () => {
            const res = await axios.get("/api/gallery")
            return res.data
        }
    }) 
}

export const useCreateGallery = () => {
    return useMutation<void> ({
        mutationFn: async (data) =>{
            const res = await axios.post("/api/gallery", data)
            return res.data
        }
    }) 
}

export const useDeleteGallery = () => {
    return useMutation<void> ({
        mutationFn: async (_id) =>{
            const res = await axios.delete(`/api/gallery/${_id}`);
            return res.data;
        }
    }) 
}