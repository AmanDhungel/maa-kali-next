import { GallerySchema } from "@/_schema/gallery";
import { ApiResponse } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetGallery = () => {
  return useQuery<
    ApiResponse<GallerySchema>,
    { message: string },
    GallerySchema
  >({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axios.get("/api/gallery");
      return res.data;
    },
  });
};

export const useCreateGallery = () => {
  return useMutation<
    ApiResponse<GallerySchema>,
    { message: string },
    { data: GallerySchema }
  >({
    mutationFn: async ({ data }: { data: GallerySchema }) => {
      const res = await axios.post("/api/gallery", { data });
      return res.data;
    },
  });
};

export const useDeleteGallery = () => {
  return useMutation<
    ApiResponse<GallerySchema>,
    { message: string },
    GallerySchema
  >({
    mutationFn: async (_id) => {
      const res = await axios.delete(`/api/gallery/${_id}`);
      return res.data;
    },
  });
};
