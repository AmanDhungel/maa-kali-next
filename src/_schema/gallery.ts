import { z } from "zod";

export const gallerySchema = z.object({
  data: z.array(
    z.object({
      image: z.array(z.string()).optional(),
    })
  ),
});

export type GallerySchema = z.infer<typeof gallerySchema>;
