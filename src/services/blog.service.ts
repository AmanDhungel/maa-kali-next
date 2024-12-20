"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
interface BlogData {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string[];
}
export const useGetBlog = () => {
  return useQuery<void>({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axios.get("/api/blog");
      return res.data;
    },
  });
};
export const useGetSingleBlog = (id: string) => {
  return useQuery<BlogData, Error>({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(`/api/blog/${id}`);
      return res.data;
    },
  });
};
export const useCreateBlog = () => {
  return useMutation<void>({
    mutationFn: async (data) => {
      const res = await axios.post("/api/blog", data);
      return res.data;
    },
  });
};

export const useDeleteBlog = () => {
  return useMutation<void>({
    mutationFn: async (_id) => {
      const res = await axios.delete(`/api/blog/${_id}`);
      return res.data;
    },
  });
};
