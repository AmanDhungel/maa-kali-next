import { z } from "zod";

export const serviceSchema = z.object({
  _id: z.string().optional(),
  image: z.string().url().min(1, {
    message: "Image is required and must be a valid URL.",
  }),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  shortDescription: z.string().min(10, {
    message: "description must be at least 10 characters.",
  }),
  description: z.string().min(10, {
    message: "description must be at least 10 characters.",
  }),
});

export type ServiceSchema = z.infer<typeof serviceSchema>;
