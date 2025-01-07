"use client";

import { ServiceSchema } from "@/_schema/service";
import { ApiProps } from "@/components/ScrollableCard";
import { ApiResponse } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetService = () => {
  return useQuery<ApiResponse<ServiceSchema>, { message: string }, ApiProps[]>({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axios.get("/api/service");
      return res.data;
    },
  });
};

export const useCreateService = () => {
  return useMutation<
    ApiResponse<ServiceSchema>,
    { message: string },
    ServiceSchema
  >({
    mutationFn: async (data) => {
      const res = await axios.post("/api/service", data);
      return res.data;
    },
  });
};

export const useDeleteService = () => {
  return useMutation<
    ApiResponse<ServiceSchema>,
    { message: string },
    { id: string }
  >({
    mutationFn: async (_id) => {
      const res = await axios.delete(`/api/service/${_id}`);
      return res.data;
    },
  });
};
