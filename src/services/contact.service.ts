'use client'

import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export const useCreateContact = () => {
    return useMutation<void> ({
        mutationFn: async (data) =>{
            const res = await axios.post("/api/contact", data)
            return res.data
        }
    }) 
}

// export const useCreateTrialArticle = () => {
//     return useMutation<ApiResponseType<unknown>, Error, FormData, unknown>({
//       mutationKey: [Keys.MANAGE_ARTICLE],
//       mutationFn: async (data: FormData) => {
//         const res = await adminAxiosInstance.post(
//           API_ROUTES.CREATE_TRIAL_ARTICLE,
//           data,
//         );
//         return res.data;
//       },
//     });
//   };