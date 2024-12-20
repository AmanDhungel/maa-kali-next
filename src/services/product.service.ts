import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGETProduct = () => {
  return useQuery<void>({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("/api/products");
      return res.data;
    },
  });
};

export const useCreateProduct = () => {
  return useMutation<void>({
    mutationFn: async (data) => {
      const res = await axios.post("/api/products", data);
      return res.data;
    },
  });
};

export const useDeleteProduct = () => {
  return useMutation<void>({
    mutationFn: async (id) => {
      const res = await axios.delete(`/api/products/${id}`);
      return res.data;
    },
  });
};
