import { z } from 'zod'

export const gallerySchema = z.array(z.object({
	id: z.string().optional(),
	image: z.string().optional(),
	title: z.string().optional(),
	data: z.array(z.object({
		id: z.string().optional(),
		image: z.string().optional(),
		title: z.string().optional(),
	})).optional(),
})).optional()

export type GallerySchema = z.infer<typeof gallerySchema>
