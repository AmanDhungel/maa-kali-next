import { ProductProps } from "@/components/ProductTestimonials";
import { ApiResponse } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Error from "next/error";

export const useGETProduct = () => {
  return useQuery<ProductProps, Error>({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("/api/products");
      return res.data;
    },
  });
};

export const useCreateProduct = () => {
  return useMutation<ProductProps>({
    mutationFn: async (data) => {
      const res = await axios.post("/api/products", data);
      return res.data;
    },
  });
};

export const useDeleteProduct = () => {
  return useMutation<ApiResponse<ProductProps>, Record<string, string>, string>(
    {
      mutationFn: async (id) => {
        const res = await axios.delete(`/api/products/${id}`);
        return res.data;
      },
    }
  );
};
